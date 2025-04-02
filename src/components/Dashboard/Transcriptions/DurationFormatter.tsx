
import React from 'react';

interface DurationFormatterProps {
  duration: string;
}

const DurationFormatter: React.FC<DurationFormatterProps> = ({ duration }) => {
  // Format duration from interval to minutes and seconds
  const formatDuration = (duracion: string) => {
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

  return <span>{formatDuration(duration)}</span>;
};

export default DurationFormatter;
