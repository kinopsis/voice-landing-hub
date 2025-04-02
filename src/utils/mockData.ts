
import { supabase, handleSupabaseError } from '@/integrations/supabase/client';
import { TranscripcionInsert } from '@/lib/supabase-types';
import { format, subDays } from 'date-fns';
import { toast } from 'sonner';

// Genera datos de muestra para las transcripciones
export const generateMockTranscriptions = async (userId: string) => {
  if (!userId) {
    toast.error("Usuario no autenticado");
    return;
  }

  try {
    console.log("Generating mock data for user ID:", userId);
    
    // Primero verificamos si ya hay datos para este usuario
    const { data: existingData, error: checkError } = await supabase
      .from('transcripciones')
      .select('id')
      .eq('user_id', userId)
      .limit(1);
      
    if (checkError) {
      console.error("Error checking existing data:", checkError);
      throw checkError;
    }
    
    // Si ya hay datos, no generamos nuevos
    if (existingData && existingData.length > 0) {
      console.log('Ya existen datos de muestra para este usuario');
      toast.info('Ya existen datos de muestra para este usuario');
      return;
    }
    
    // Datos de ejemplo basados en la imagen
    const mockData: TranscripcionInsert[] = [
      {
        user_id: userId,
        telefono: '+18324472941',
        duracion: '00:00:21',
        tipo_llamada: 'Inquiry',
        estado_cita: 'Not Booked',
        calificacion: 4,
        fecha_hora: new Date().toISOString(),
        costo: 0.25,
        asistente: 'María García'
      },
      {
        user_id: userId,
        telefono: '+18324472941',
        duracion: '00:00:20',
        tipo_llamada: 'Inquiry',
        estado_cita: 'Not Booked',
        calificacion: 4,
        fecha_hora: subDays(new Date(), 0).toISOString(),
        costo: 0.20,
        asistente: 'Juan López'
      },
      {
        user_id: userId,
        telefono: '+18324472941',
        duracion: '00:00:23',
        tipo_llamada: 'Inquiry',
        estado_cita: 'Not Booked',
        calificacion: 4,
        fecha_hora: subDays(new Date(), 1).toISOString(),
        costo: 0.30,
        asistente: 'Ana Martínez'
      },
      {
        user_id: userId,
        telefono: '+18324472941',
        duracion: '00:00:14',
        tipo_llamada: 'Inquiry',
        estado_cita: 'Not Booked',
        calificacion: 4,
        fecha_hora: subDays(new Date(), 3).toISOString(),
        costo: 0.15,
        asistente: 'Carlos Pérez'
      },
      {
        user_id: userId,
        telefono: '+18324472941',
        duracion: '00:00:14',
        tipo_llamada: 'Appointment',
        estado_cita: 'Booked',
        calificacion: 4,
        fecha_hora: subDays(new Date(), 3).toISOString(),
        costo: 0.15,
        asistente: 'María García'
      },
      {
        user_id: userId,
        telefono: '+17135551234',
        duracion: '00:01:05',
        tipo_llamada: 'Support',
        estado_cita: 'Not Booked',
        calificacion: 5,
        fecha_hora: subDays(new Date(), 4).toISOString(),
        costo: 0.50,
        asistente: 'Juan López'
      },
      {
        user_id: userId,
        telefono: '+13215557890',
        duracion: '00:00:45',
        tipo_llamada: 'Appointment',
        estado_cita: 'Cancelled',
        calificacion: 3,
        fecha_hora: subDays(new Date(), 5).toISOString(),
        costo: 0.35,
        asistente: 'Ana Martínez'
      }
    ];
    
    console.log("Attempting to insert mock data:", mockData);
    
    const { error } = await supabase
      .from('transcripciones')
      .insert(mockData);
      
    if (error) {
      console.error('Error inserting mock data:', error);
      throw error;
    }
    
    toast.success('Datos de muestra generados correctamente');
    console.log('Mock data generated successfully');
    
  } catch (error: any) {
    console.error('Error generando datos de muestra:', error);
    toast.error('Error generando datos de muestra: ' + handleSupabaseError(error));
  }
};
