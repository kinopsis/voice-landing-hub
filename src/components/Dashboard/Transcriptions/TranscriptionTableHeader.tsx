
import React from 'react';
import { TableHeader, TableRow, TableHead } from '@/components/ui/table';

const TranscriptionTableHeader: React.FC = () => {
  return (
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
  );
};

export default TranscriptionTableHeader;
