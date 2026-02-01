import React from 'react';
import { Coffee, Palette, MapPin, Clock, Phone, ChevronDown, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import logo from '@/assets/logo.png';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickActions = [
    {
      icon: Coffee,
      title: 'Меню',
      description: 'Авторские напитки и выпечка',
      action: () => scrollToSection('#menu'),
      primary: true,
    },
    {
      icon: Palette,
      title: 'Арт-пространство',
      description: 'Мастер-классы и выставки',
      action: () => scrollToSection('#art-space'),
      primary: false,
    },
    {
      icon: Truck,
      title: 'Доставка',
      description: 'Яндекс.Доставка и Delivery Club',
      action: () => scrollToSection('#delivery'),
      primary: false,
    },
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-primary/10 animate-float" />
        <div className="absolute top-1/3 right-16 w-32 h-32 rounded-full bg-primary/5 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-secondary/50 animate-wave" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Logo and branding */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <img 
            src={logo} 
            alt="Magic Coffee" 
            className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-6"
          />
        </div>

        {/* Quick info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {/* Hours */}
          <Card className="card-hover bg-card/80 backdrop-blur-sm border-border animate-fade-in-up stagger-1">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Часы работы
              </h3>
              <div className="font-body text-sm text-muted-foreground space-y-1">
                <p>Пн–Пт: 8:00–22:00</p>
                <p>Сб–Вс: 9:00–23:00</p>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="card-hover bg-card/80 backdrop-blur-sm border-border animate-fade-in-up stagger-2">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Адрес
              </h3>
              <div className="font-body text-sm text-muted-foreground">
                <p>г. Санкт-Петербург</p>
                <p>ул. Примерная, 42</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-hover bg-card/80 backdrop-blur-sm border-border animate-fade-in-up stagger-3">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Контакты
              </h3>
              <div className="font-body text-sm text-muted-foreground">
                <a 
                  href="tel:+78121234567" 
                  className="hover:text-primary transition-colors"
                >
                  +7 (812) 123-45-67
                </a>
                <p className="mt-1">info@magiccoffee.ru</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Button
              key={action.title}
              size="lg"
              variant={action.primary ? "default" : "outline"}
              className={`h-auto py-6 px-6 flex flex-col items-center gap-3 animate-fade-in-up ${
                action.primary 
                  ? 'btn-ocean bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              onClick={action.action}
            >
              <action.icon className="w-6 h-6" />
              <div className="text-center">
                <div className="font-display text-lg font-semibold">{action.title}</div>
                <div className="font-body text-xs opacity-80 mt-1">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Features highlight */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center animate-fade-in-up stagger-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">☕</span>
            <span className="font-body text-sm">Авторский кофе</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">🎨</span>
            <span className="font-body text-sm">Мастер-классы</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">📦</span>
            <span className="font-body text-sm">Доставка</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">🌿</span>
            <span className="font-body text-sm">Уютная атмосфера</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
        <button
          onClick={() => scrollToSection('#menu')}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Прокрутить вниз"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
