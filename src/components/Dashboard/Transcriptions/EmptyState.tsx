
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <Alert className="bg-blue-50 border-blue-200">
      <AlertDescription className="text-blue-800">
        {message}
      </AlertDescription>
    </Alert>
  );
};

export default EmptyState;
