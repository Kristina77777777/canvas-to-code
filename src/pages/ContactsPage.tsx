import React from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink, Check, Baby, User, Users, Laptop, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cafeInfo } from '@/data/menuData';

const ContactsPage: React.FC = () => {
  const featureIcons: Record<string, React.ReactNode> = {
    'Можно прийти с детьми': <Baby className="w-5 h-5" />,
    'Удобно зайти одному': <User className="w-5 h-5" />,
    'Подходит для спокойных встреч': <Users className="w-5 h-5" />,
    'Можно посидеть с ноутбуком': <Laptop className="w-5 h-5" />,
    'Можно просто взять кофе с собой': <Coffee className="w-5 h-5" />,
  };

  const whatWeHave = [
    { label: 'Кофе и напитки', link: '/menu' },
    { label: 'Гонконгские вафли', link: '/menu' },
    { label: 'Сезонные напитки', link: '/menu' },
    { label: 'Мастер-классы', link: '/events' },
    { label: 'Встречи по интересам', link: '/events' },
    { label: 'Мини-игра «Что? Где? Когда?»', link: '/events' },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Page title */}
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-12">
          Как к нам прийти
        </h1>

        {/* Location section */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Где мы находимся
          </h2>
          <div className="font-body text-muted-foreground space-y-3">
            <p>
              Мы находимся в {cafeInfo.city}, в {cafeInfo.district}.
            </p>
            <p>
              Удобно зайти по дороге, без заездов во дворы.
            </p>
            <p>
              Рядом — {cafeInfo.landmarks}.
            </p>
            <p className="text-foreground">
              {cafeInfo.directions}
            </p>
          </div>
        </section>

        {/* Map links */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Как нас найти
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild className="font-body">
              <a href={cafeInfo.mapLinks.yandex} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть в Яндекс Картах
              </a>
            </Button>
            <Button variant="outline" asChild className="font-body">
              <a href={cafeInfo.mapLinks.google} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть в Google Maps
              </a>
            </Button>
            <Button variant="outline" asChild className="font-body">
              <a href={cafeInfo.mapLinks['2gis']} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть в 2ГИС
              </a>
            </Button>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hours */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Часы работы
                    </h3>
                    <div className="font-body text-sm text-muted-foreground space-y-1">
                      <p>Пн–Пт: {cafeInfo.hours.weekdays}</p>
                      <p>Сб–Вс: {cafeInfo.hours.weekends}</p>
                      {cafeInfo.seasonNote && (
                        <p className="text-primary mt-2">{cafeInfo.seasonNote}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Адрес
                    </h3>
                    <div className="font-body text-sm text-muted-foreground">
                      <p>г. {cafeInfo.city}</p>
                      <p>{cafeInfo.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Телефон
                    </h3>
                    <a 
                      href={`tel:${cafeInfo.phone.replace(/[^\d+]/g, '')}`}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {cafeInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <a 
                      href={`mailto:${cafeInfo.email}`}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {cafeInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who feels comfortable here */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Кому у нас удобно
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cafeInfo.features.map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-3 font-body text-muted-foreground"
              >
                <span className="text-primary">
                  {featureIcons[feature] || <Check className="w-5 h-5" />}
                </span>
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* What we have */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Что у нас есть
          </h2>
          <div className="flex flex-wrap gap-2">
            {whatWeHave.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="font-body text-sm px-4 py-2 bg-secondary text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        {/* First time visitors */}
        <section className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Если вы у нас впервые
              </h2>
              <div className="font-body text-muted-foreground space-y-3">
                <p>
                  Если вы у нас впервые — просто заходите. Мы подскажем, что взять.
                </p>
                <div className="space-y-2 text-foreground">
                  <p>• Можно просто зайти и уйти с кофе.</p>
                  <p>• Не обязательно заказывать еду.</p>
                  <p>• Можно посидеть недолго.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ContactsPage;
