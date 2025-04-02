
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Transcripcion } from '@/lib/types';
import { useAuth } from '@/contexts/AuthContext';
import { Table, TableBody } from '@/components/ui/table';
import TranscriptionTableHeader from './TranscriptionTableHeader';
import TranscriptionTableRow from './TranscriptionTableRow';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';

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

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (transcripciones.length === 0) {
    return (
      <EmptyState message="No hay transcripciones disponibles con los filtros seleccionados." />
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TranscriptionTableHeader />
        <TableBody>
          {transcripciones.map((transcripcion) => (
            <TranscriptionTableRow 
              key={transcripcion.id} 
              transcripcion={transcripcion} 
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TranscriptionTable;
