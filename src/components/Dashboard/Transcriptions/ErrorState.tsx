
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <Alert className="bg-red-50 border-red-200">
      <div className="flex items-start">
        <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
        <AlertDescription className="text-red-800">
          {error}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default ErrorState;
