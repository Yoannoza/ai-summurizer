
import React from 'react';
import { CircleOff } from 'lucide-react';

interface LoadingIndicatorProps {
  message?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ 
  message = "Génération du résumé en cours..."
}) => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center py-8">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-rotate"></div>
        <div className="absolute inset-2 border-t-2 border-primary/30 rounded-full animate-rotate" style={{ animationDuration: '1.5s' }}></div>
        <div className="absolute inset-4 border-t-2 border-primary/20 rounded-full animate-rotate" style={{ animationDuration: '2s' }}></div>
      </div>
      <p className="mt-4 text-foreground/80 animate-pulse-opacity">{message}</p>
    </div>
  );
};

export default LoadingIndicator;
