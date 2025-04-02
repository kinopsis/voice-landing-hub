
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Transcripcion } from '@/lib/types';
import { useAuth } from '@/contexts/AuthContext';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { User, Phone, Calendar, Clock, DollarSign, Star } from 'lucide-react';

interface TranscriptionTableProps {
  fecha: Date | undefined;
  asistente: string | undefined;
}

type TranscriptionResponse = {
  data: Transcripcion[] | null;
  error: any;
}

const TranscriptionTable: React.FC<TranscriptionTableProps> = ({ fecha, asistente }) => {
  const [transcripciones, setTranscripciones] = useState<Transcripcion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  // Fetch data from Supabase
  useEffect(() => {
    if (!user) return;

    const fetchTranscripciones = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using an explicit cast with a defined return type
        let query = supabase
          .from('transcripciones')
          .select('*')
          .eq('user_id', user.id);
        
        // Apply filters if set
        if (fecha) {
          const startOfDay = new Date(fecha);
          startOfDay.setHours(0, 0, 0, 0);
          
          const endOfDay = new Date(fecha);
          endOfDay.setHours(23, 59, 59, 999);
          
          query = query
            .gte('fecha_hora', startOfDay.toISOString())
            .lte('fecha_hora', endOfDay.toISOString());
        }
        
        if (asistente) {
          query = query.eq('asistente', asistente);
        }
        
        const response = await query.order('fecha_hora', { ascending: false }) as unknown as TranscriptionResponse;
        
        if (response.error) throw response.error;
        
        setTranscripciones(response.data || []);
      } catch (err: any) {
        console.error('Error fetching transcripciones:', err);
        setError(err.message || 'Error al cargar las transcripciones');
      } finally {
        setLoading(false);
      }
    };

    fetchTranscripciones();

    // Set up realtime subscription for live updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'transcripciones',
          filter: `user_id=eq.${user.id}`
        },
        () => {
          fetchTranscripciones();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, fecha, asistente]);

  // Format duration from interval to minutes and seconds
  const formatDuration = (duracion: string) => {
    // Example: "00:00:21" (21 seconds) or "00:01:30" (1 minute, 30 seconds)
    const parts = duracion.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = parseInt(parts[2]);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };
  
  // Render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert className="bg-red-50 border-red-200">
        <AlertDescription className="text-red-800">{error}</AlertDescription>
      </Alert>
    );
  }

  if (transcripciones.length === 0) {
    return (
      <Alert className="bg-blue-50 border-blue-200">
        <AlertDescription className="text-blue-800">
          No hay transcripciones disponibles con los filtros seleccionados.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Teléfono</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Calificación</TableHead>
            <TableHead>Fecha y Hora</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transcripciones.map((transcripcion) => (
            <TableRow key={transcripcion.id} className="hover:bg-gray-50">
              <TableCell className="font-medium">
                {transcripcion.telefono}
              </TableCell>
              <TableCell>
                {formatDuration(transcripcion.duracion)}
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  transcripcion.tipo_llamada === 'Appointment' 
                    ? 'bg-blue-100 text-blue-800' 
                    : transcripcion.tipo_llamada === 'Support'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {transcripcion.tipo_llamada}
                </span>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  transcripcion.estado_cita === 'Booked' 
                    ? 'bg-green-100 text-green-800' 
                    : transcripcion.estado_cita === 'Cancelled'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {transcripcion.estado_cita}
                </span>
              </TableCell>
              <TableCell>
                {renderStars(transcripcion.calificacion)}
              </TableCell>
              <TableCell>
                {format(parseISO(transcripcion.fecha_hora), 'E, MMM d h:mm a', { locale: es })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TranscriptionTable;
