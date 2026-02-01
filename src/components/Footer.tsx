import React from 'react';
import { Waves, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Waves className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-semibold">
              Мэджик Кофейня
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-center opacity-80">
            © 2024 Coastal Coffee & Art Space. Все права защищены.
          </p>

          {/* Tagline */}
          <p className="font-body text-sm flex items-center gap-1 opacity-80">
            Создано с <Heart className="w-4 h-4 text-primary fill-primary" /> к морю и творчеству
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
