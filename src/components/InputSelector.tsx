
import React from 'react';
import { Link2, FileText } from 'lucide-react';
import { InputType } from '@/lib/types';

interface InputSelectorProps {
  inputType: InputType;
  onChange: (type: InputType) => void;
}

const InputSelector: React.FC<InputSelectorProps> = ({ inputType, onChange }) => {
  return (
    <div className="flex rounded-lg shadow-sm p-1 border border-input bg-accent w-fit mx-auto mb-6">
      <button
        onClick={() => onChange('url')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
          inputType === 'url' 
            ? 'bg-white shadow-sm text-foreground' 
            : 'text-muted-foreground hover:text-foreground/80'
        }`}
      >
        <Link2 className="w-4 h-4" />
        <span>URL</span>
      </button>
      <button
        onClick={() => onChange('text')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
          inputType === 'text' 
            ? 'bg-white shadow-sm text-foreground' 
            : 'text-muted-foreground hover:text-foreground/80'
        }`}
      >
        <FileText className="w-4 h-4" />
        <span>Texte</span>
      </button>
    </div>
  );
};

export default InputSelector;
