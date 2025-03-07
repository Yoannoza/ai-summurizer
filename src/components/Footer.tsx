
import React from 'react';
import { Link2, Info, Lock, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-10 mt-12">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">SynthPress</h3>
            <p className="text-sm text-muted-foreground">
              Un service de résumé automatique d'articles de presse utilisant l'intelligence artificielle pour faciliter la veille médiatique.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Comment ça marche', 'Guide d\'utilisation', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Légal</h3>
            <ul className="space-y-2">
              {[
                { label: 'Mentions légales', icon: <Info className="w-3.5 h-3.5" /> },
                { label: 'Politique de confidentialité', icon: <Lock className="w-3.5 h-3.5" /> },
                { label: 'Conditions d\'utilisation', icon: <Link2 className="w-3.5 h-3.5" /> },
                { label: 'GitHub', icon: <Github className="w-3.5 h-3.5" /> }
              ].map((item) => (
                <li key={item.label}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50 text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} SynthPress. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
