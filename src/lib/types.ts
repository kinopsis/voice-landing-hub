
// Transcripcion type definition
export interface Transcripcion {
  id: string;
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

export interface Perfil {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  ultima_sesion: string | null;
}
