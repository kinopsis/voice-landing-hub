
// Este archivo contiene tipos para las tablas de Supabase
// alineados con el esquema de la base de datos

export interface ContactoInsert {
  telefono: string;
  email: string;
  empresa?: string | null;
  mensaje?: string | null;
}

export interface ContactoRow extends ContactoInsert {
  id: string;
  created_at: string;
}

export interface PerfilInsert {
  id: string; // user_id
  nombre: string;
  apellido: string;
  email: string;
  ultima_sesion?: string | null;
}

export interface PerfilRow extends PerfilInsert {
  // No hay campos adicionales
}

export interface TranscripcionInsert {
  user_id: string;
  telefono: string;
  duracion: string;
  tipo_llamada: 'Inquiry' | 'Appointment' | 'Support' | 'Other';
  estado_cita: 'Not Booked' | 'Booked' | 'Cancelled';
  calificacion: number;
  fecha_hora: string;
  costo: number;
  asistente: string;
}

export interface TranscripcionRow extends TranscripcionInsert {
  id: string;
}
