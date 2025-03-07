
import React from 'react';
import { SummaryModel } from '@/lib/types';
import { BrainCircuit, ZapFast, BookOpen, Sparkles } from 'lucide-react';

interface ModelSelectorProps {
  selectedModel: SummaryModel;
  onChange: (model: SummaryModel) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onChange }) => {
  const models: Array<{
    id: SummaryModel;
    name: string;
    description: string;
    icon: React.ReactNode;
  }> = [
    {
      id: 'gpt-4o',
      name: 'GPT-4o',
      description: 'Haute qualité, détaillé',
      icon: <BrainCircuit className="w-4 h-4" />
    },
    {
      id: 'gpt-4o-mini',
      name: 'GPT-4o Mini',
      description: 'Rapide et efficace',
      icon: <ZapFast className="w-4 h-4" />
    },
    {
      id: 'pegasus',
      name: 'Pegasus',
      description: 'Spécialisé en actualités',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: 'bart',
      name: 'BART',
      description: 'Concis et précis',
      icon: <BookOpen className="w-4 h-4" />
    }
  ];

  return (
    <div className="space-y-2">
      <label className="label-text">Modèle de résumé</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {models.map((model) => (
          <button
            key={model.id}
            type="button"
            onClick={() => onChange(model.id)}
            className={`border rounded-lg p-3 flex flex-col items-center justify-center gap-1 transition-all duration-200 hover:border-primary/50 ${
              selectedModel === model.id
                ? 'bg-primary/5 border-primary/30 ring-2 ring-primary/10'
                : 'bg-white border-input'
            }`}
          >
            <div className="flex items-center gap-2">
              {model.icon}
              <span className="font-medium">{model.name}</span>
            </div>
            <span className="text-xs text-muted-foreground">{model.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;
