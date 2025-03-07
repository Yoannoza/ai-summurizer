
import React, { useState } from 'react';
import { InputType, SummaryModel, SummaryResult } from '@/lib/types';
import InputSelector from './InputSelector';
import ModelSelector from './ModelSelector';
import LoadingIndicator from './LoadingIndicator';
import { summarizeContent } from '@/lib/summarize';
import { toast } from 'sonner';

interface SummaryFormProps {
  onResultGenerated: (result: SummaryResult) => void;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ onResultGenerated }) => {
  const [inputType, setInputType] = useState<InputType>('url');
  const [inputValue, setInputValue] = useState<string>('');
  const [model, setModel] = useState<SummaryModel>('gpt-4o');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) {
      toast.error(inputType === 'url' ? "Veuillez saisir une URL valide" : "Veuillez saisir un texte à résumer");
      return;
    }
    
    try {
      setIsLoading(true);
      const result = await summarizeContent(
        inputValue,
        inputType === 'url',
        model
      );
      onResultGenerated(result);
    } catch (error) {
      console.error('Error generating summary:', error);
      toast.error("Une erreur est survenue lors de la génération du résumé");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="glass-panel p-6 md:p-8 animate-scale-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputSelector inputType={inputType} onChange={setInputType} />
        
        <div className="space-y-2">
          <label htmlFor="input" className="label-text">
            {inputType === 'url' ? 'URL de l\'article' : 'Texte à résumer'}
          </label>
          {inputType === 'url' ? (
            <input
              id="input"
              type="url"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="https://www.example.com/article"
              className="input-field"
              disabled={isLoading}
            />
          ) : (
            <textarea
              id="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Collez le texte de l'article ici..."
              className="input-field min-h-32 resize-y"
              disabled={isLoading}
            />
          )}
        </div>
        
        <ModelSelector selectedModel={model} onChange={setModel} />
        
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <button 
            type="submit" 
            className="btn-secondary w-full"
          >
            Générer le résumé
          </button>
        )}
      </form>
    </div>
  );
};

export default SummaryForm;
