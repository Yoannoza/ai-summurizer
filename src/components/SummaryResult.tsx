
import React from 'react';
import { SummaryResult as SummaryResultType } from '@/lib/types';
import { CalendarIcon, ExternalLink, Copy } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { toast } from 'sonner';

interface SummaryResultProps {
  result: SummaryResultType;
}

const SummaryResult: React.FC<SummaryResultProps> = ({ result }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(result.content);
    toast.success('Résumé copié dans le presse-papier');
  };
  
  return (
    <div className="animate-slide-up glass-panel p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-balance">{result.title}</h2>
            <button 
              onClick={handleCopyClick}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Copier le résumé"
            >
              <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {result.originalUrl && (
              <a 
                href={result.originalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary flex items-center gap-1 hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                Article original
              </a>
            )}
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <CalendarIcon className="w-3 h-3" />
              {format(result.dateGenerated, 'PPP', { locale: fr })}
            </div>
            <div className="text-sm px-2 py-0.5 bg-accent rounded-full text-foreground/70">
              {result.model}
            </div>
          </div>
        </div>
        
        <div className="prose prose-gray prose-sm sm:prose max-w-none">
          <p className="text-foreground/90 leading-relaxed">{result.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryResult;
