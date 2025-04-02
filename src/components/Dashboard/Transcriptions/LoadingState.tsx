
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingState: React.FC = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default LoadingState;
