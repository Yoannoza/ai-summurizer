
import React from 'react';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-border">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold tracking-tight">SynthPress</h1>
              <p className="text-xs text-muted-foreground">Résumé intelligent d'articles</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Comment ça marche</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guide d'utilisation</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
