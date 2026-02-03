import React from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink, Baby, User, Users, Laptop, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cafeInfo } from '@/data/menuData';

// Фотографии интерьера
import interiorBar from '@/assets/interior-bar.jpg';
import interiorSeating from '@/assets/interior-seating.jpg';
import exteriorEntrance from '@/assets/exterior-entrance.jpg';
import exteriorMural from '@/assets/exterior-mural.jpg';
import interiorLounge from '@/assets/interior-lounge.jpg';
import interiorEntrance from '@/assets/interior-entrance.jpg';
import interiorMain from '@/assets/interior-main.jpg';
import interiorPlants from '@/assets/interior-plants.jpg';
import interiorSofa from '@/assets/interior-sofa.jpg';

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
    { label: 'Авторские чаи', link: '/menu' },
    { label: 'Мастер-классы', link: '/events' },
    { label: 'Встречи по интересам', link: '/events' },
    { label: 'Мини-игра «Что? Где? Когда?»', link: '/events' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
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
              <Button variant="outline" asChild className="font-body btn-vintage">
                <a href={cafeInfo.mapLinks.yandex} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Открыть в Яндекс Картах
                </a>
              </Button>
              <Button variant="outline" asChild className="font-body btn-vintage">
                <a href={cafeInfo.mapLinks.google} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Открыть в Google Maps
                </a>
              </Button>
              <Button variant="outline" asChild className="font-body btn-vintage">
                <a href={cafeInfo.mapLinks['2gis']} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Открыть в 2ГИС
                </a>
              </Button>
            </div>
          </section>

          {/* Photo gallery */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Как мы выглядим
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="col-span-2 row-span-2">
                <img 
                  src={interiorMain} 
                  alt="Основной зал кофейни" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
              <img 
                src={interiorBar} 
                alt="Барная стойка" 
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow aspect-square"
              />
              <img 
                src={interiorSeating} 
                alt="Зона отдыха" 
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow aspect-square"
              />
              <img 
                src={exteriorEntrance} 
                alt="Вход в кофейню с улицы" 
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow aspect-square"
              />
              <img 
                src={exteriorMural} 
                alt="Фасад с муралом" 
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow aspect-square"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <img 
                src={interiorLounge} 
                alt="Уютный уголок" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img 
                src={interiorPlants} 
                alt="Зелёный уголок" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img 
                src={interiorSofa} 
                alt="Красный диван" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <p className="font-body text-sm text-muted-foreground mt-3">
              Фотографии сделаны в нашей кофейне
            </p>
          </section>

          {/* Contact info cards */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Hours */}
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        Часы работы
                      </h3>
                      <div className="font-body text-sm text-muted-foreground space-y-1">
                        <p>Пн–Пт: {cafeInfo.hours.weekdays}</p>
                        <p>Сб–Вс: {cafeInfo.hours.weekends}</p>
                        {cafeInfo.seasonNote && (
                          <p className="text-accent mt-2">{cafeInfo.seasonNote}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
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
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
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
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
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
                    {featureIcons[feature] || <Coffee className="w-5 h-5" />}
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

      <Footer />
    </div>
  );
};

export default ContactsPage;
