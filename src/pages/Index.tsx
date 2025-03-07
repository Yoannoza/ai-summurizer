
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
            
            <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#how-it-works" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Découvrir comment ça marche
                <ChevronDown className="w-4 h-4" />
              </a>
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
        
        <section id="how-it-works" className="py-20 px-4 bg-muted/30">
          <div className="container max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12">Comment ça marche</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Choisissez votre source",
                  description: "Collez l'URL de l'article ou le texte complet à résumer."
                },
                {
                  step: "2",
                  title: "Sélectionnez le modèle",
                  description: "Choisissez un modèle d'IA adapté à vos besoins de synthèse."
                },
                {
                  step: "3",
                  title: "Obtenez votre résumé",
                  description: "En quelques secondes, recevez une synthèse claire et concise."
                }
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4 border border-border">
                    <span className="text-lg font-medium">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
