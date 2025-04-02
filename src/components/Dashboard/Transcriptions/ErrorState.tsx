
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ErrorStateProps {
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <Alert className="bg-red-50 border-red-200">
      <AlertDescription className="text-red-800">{error}</AlertDescription>
    </Alert>
  );
};

export default ErrorState;
