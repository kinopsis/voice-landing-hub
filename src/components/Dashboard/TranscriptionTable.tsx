
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
        
        // Using type assertion to tell TypeScript this is valid
        let query = supabase
          .from('transcripciones')
          .select('*')
          .eq('user_id', user.id) as any;
        
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
        
        const { data, error } = await query.order('fecha_hora', { ascending: false });
        
        if (error) throw error;
        
        setTranscripciones(data as Transcripcion[] || []);
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
            <TableHead>Fecha</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Asistente</TableHead>
            <TableHead>Calificación</TableHead>
            <TableHead>Costo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transcripciones.map((transcripcion) => (
            <TableRow key={transcripcion.id}>
              <TableCell className="font-medium flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                {transcripcion.telefono}
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-500" />
                {format(parseISO(transcripcion.fecha_hora), 'dd MMM yyyy, HH:mm', { locale: es })}
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                {formatDuration(transcripcion.duracion)}
              </TableCell>
              <TableCell>{transcripcion.tipo_llamada}</TableCell>
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
              <TableCell className="flex items-center gap-2">
                <User size={16} className="text-gray-500" />
                {transcripcion.asistente}
              </TableCell>
              <TableCell className="flex items-center gap-1">
                <Star size={16} className="text-yellow-500" />
                {transcripcion.calificacion}/5
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <DollarSign size={16} className="text-gray-500" />
                ${transcripcion.costo.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TranscriptionTable;
