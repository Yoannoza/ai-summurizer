
import React, { useState } from 'react';
import Header from '@/components/Header';
import SummaryForm from '@/components/SummaryForm';
import SummaryResult from '@/components/SummaryResult';
import { SummaryResult as SummaryResultType } from '@/lib/types';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [result, setResult] = useState<SummaryResultType | null>(null);

  const handleResultGenerated = (newResult: SummaryResultType) => {
    setResult(newResult);
    
    // Scroll to result after a short delay
    setTimeout(() => {
      const resultElement = document.getElementById('result-section');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container max-w-4xl relative">
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6 animate-fade-in">
              Intelligence artificielle pour la presse
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-balance animate-slide-down">
              Résumé Automatique d'Articles de Presse
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Obtenez instantanément l'essentiel de n'importe quel article de presse. Gagnez du temps tout en restant informé des actualités qui comptent.
            </p>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <SummaryForm onResultGenerated={handleResultGenerated} />
            </div>
          </div>
        </section>
        
        {result && (
          <section id="result-section" className="py-12 px-4">
            <div className="container max-w-4xl">
              <h2 className="text-2xl font-semibold mb-6 text-center">Votre résumé</h2>
              <SummaryResult result={result} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
