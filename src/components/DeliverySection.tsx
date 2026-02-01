import React from 'react';
import { Phone, ExternalLink, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DeliverySection: React.FC = () => {
  return (
    <section id="delivery" className="py-20 md:py-32 gradient-ocean text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Truck className="w-16 h-16 mx-auto mb-6 opacity-80" />
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Доставка кофе к вам домой
          </h2>
          
          <p className="font-body text-lg opacity-90 mb-10 max-w-xl mx-auto">
            Закажите любимые напитки и выпечку с доставкой через наших партнёров
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-body text-lg px-8 py-6"
              asChild
            >
              <a 
                href="https://yandex.ru/delivery" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Яндекс.Доставка
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground font-body text-lg px-8 py-6"
              asChild
            >
              <a 
                href="https://www.delivery-club.ru" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Delivery Club
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-lg">
            <Phone className="w-5 h-5" />
            <a 
              href="tel:+78121234567" 
              className="font-body hover:underline"
            >
              +7 (812) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
