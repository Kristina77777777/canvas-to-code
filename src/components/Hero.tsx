import React from 'react';
import { ChevronDown, Coffee, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToArtSpace = () => {
    const element = document.querySelector('#art-space');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center justify-center">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave SVG 1 */}
        <svg
          className="absolute top-1/4 left-10 w-24 h-24 text-primary/20 animate-float"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" />
        </svg>

        {/* Wave SVG 2 */}
        <svg
          className="absolute top-1/3 right-16 w-32 h-32 text-primary/15 animate-float-delayed"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" />
        </svg>

        {/* Circle decoration */}
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-primary/10 animate-wave" />
        
        {/* Another circle */}
        <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-warm/50 animate-float" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-in-up">
            Вдохни свежесть момента
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up stagger-1 max-w-xl mx-auto">
            Кофейня и арт-пространство, где каждый глоток вдохновляет, 
            а каждая минута наполнена творчеством
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
            <Button
              size="lg"
              className="btn-ocean bg-primary hover:bg-primary/90 text-primary-foreground font-body text-lg px-8 py-6"
              onClick={scrollToMenu}
            >
              <Coffee className="w-5 h-5 mr-2" />
              Заказать кофе
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="font-body text-lg px-8 py-6 border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToArtSpace}
            >
              <Palette className="w-5 h-5 mr-2" />
              Откройте искусство
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Прокрутить вниз"
        >
          <span className="font-body text-sm mb-2">Листать</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
