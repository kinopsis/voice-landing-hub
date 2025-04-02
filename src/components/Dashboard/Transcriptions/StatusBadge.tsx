
import React from 'react';

interface StatusBadgeProps {
  status: string;
  type: 'call-type' | 'appointment-status';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, type }) => {
  let colorClasses = '';
  
  if (type === 'call-type') {
    colorClasses = status === 'Appointment' 
      ? 'bg-blue-100 text-blue-800' 
      : status === 'Support'
        ? 'bg-purple-100 text-purple-800'
        : 'bg-gray-100 text-gray-800';
  } else if (type === 'appointment-status') {
    colorClasses = status === 'Booked' 
      ? 'bg-green-100 text-green-800' 
      : status === 'Cancelled'
        ? 'bg-red-100 text-red-800'
        : 'bg-yellow-100 text-yellow-800';
  }
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
