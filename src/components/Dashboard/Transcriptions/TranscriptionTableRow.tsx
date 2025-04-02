
import React from 'react';
import { TableRow, TableCell } from '@/components/ui/table';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Transcripcion } from '@/lib/types';
import StarRating from './StarRating';
import StatusBadge from './StatusBadge';
import DurationFormatter from './DurationFormatter';

interface TranscriptionTableRowProps {
  transcripcion: Transcripcion;
}

const TranscriptionTableRow: React.FC<TranscriptionTableRowProps> = ({ transcripcion }) => {
  return (
    <TableRow className="hover:bg-gray-50">
      <TableCell className="font-medium">
        {transcripcion.telefono}
      </TableCell>
      <TableCell>
        <DurationFormatter duration={transcripcion.duracion} />
      </TableCell>
      <TableCell>
        <StatusBadge status={transcripcion.tipo_llamada} type="call-type" />
      </TableCell>
      <TableCell>
        <StatusBadge status={transcripcion.estado_cita} type="appointment-status" />
      </TableCell>
      <TableCell>
        <StarRating rating={transcripcion.calificacion} />
      </TableCell>
      <TableCell>
        {format(parseISO(transcripcion.fecha_hora), 'E, MMM d h:mm a', { locale: es })}
      </TableCell>
    </TableRow>
  );
};

export default TranscriptionTableRow;
