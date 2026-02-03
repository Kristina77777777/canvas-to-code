import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { cafeInfo } from '@/data/menuData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Навигация</h3>
            <nav className="space-y-2 font-body text-sm">
              <Link to="/menu" className="block opacity-80 hover:opacity-100 transition-opacity">
                Меню
              </Link>
              <Link to="/events" className="block opacity-80 hover:opacity-100 transition-opacity">
                Мероприятия
              </Link>
              <Link to="/contacts" className="block opacity-80 hover:opacity-100 transition-opacity">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 font-body text-sm">
              <a 
                href={`tel:${cafeInfo.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                {cafeInfo.phone}
              </a>
              <a 
                href={`mailto:${cafeInfo.email}`}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                {cafeInfo.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Адрес</h3>
            <div className="font-body text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <p>г. {cafeInfo.city}</p>
                  <p>{cafeInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback / Social */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Написать нам</h3>
            <div className="space-y-3 font-body text-sm">
              {cafeInfo.social?.telegram && (
                <a 
                  href={cafeInfo.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              )}
              <p className="opacity-60 text-xs mt-2">
                Заказ доставки, запись на мастер-класс
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center font-body text-sm opacity-60">
          <p>© {new Date().getFullYear()} {cafeInfo.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
