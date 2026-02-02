import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Coffee, Calendar, Truck, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import logo from '@/assets/logo.png';
import { cafeInfo } from '@/data/menuData';

const Index: React.FC = () => {
  const quickLinks = [
    {
      icon: Coffee,
      title: 'Меню',
      description: 'Кофе, напитки, вафли и десерты',
      link: '/menu',
    },
    {
      icon: Calendar,
      title: 'Мероприятия',
      description: 'Мастер-классы и встречи',
      link: '/events',
    },
    {
      icon: MapPin,
      title: 'Как добраться',
      description: 'Адрес и часы работы',
      link: '/contacts',
    },
    {
      icon: Truck,
      title: 'Доставка',
      description: 'Яндекс Еда и Delivery Club',
      link: '/menu#delivery',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero section */}
      <section className="min-h-screen gradient-hero pt-20 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-12">
          {/* Logo */}
          <div className="text-center mb-12">
            <img 
              src={logo} 
              alt={cafeInfo.name}
              className="h-32 md:h-40 w-auto mx-auto mb-6"
            />
            <p className="font-body text-lg text-muted-foreground">
              Кофейня в {cafeInfo.city}
            </p>
          </div>

          {/* Quick info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-4 flex items-center gap-4">
                <Clock className="w-6 h-6 text-primary" />
                <div className="font-body text-sm">
                  <p className="text-foreground">Сегодня: {cafeInfo.hours.weekdays}</p>
                  <p className="text-muted-foreground">Вых: {cafeInfo.hours.weekends}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-4 flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div className="font-body text-sm">
                  <p className="text-foreground">{cafeInfo.address}</p>
                  <p className="text-muted-foreground">{cafeInfo.district}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {quickLinks.map((item) => (
              <Link key={item.title} to={item.link}>
                <Card className="bg-card/80 backdrop-blur-sm border-border h-full card-hover">
                  <CardContent className="p-4 text-center">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* First time message */}
          <div className="text-center max-w-xl mx-auto">
            <p className="font-body text-muted-foreground mb-4">
              Если вы у нас впервые — просто заходите. Мы подскажем, что взять.
            </p>
            <div className="font-body text-sm text-muted-foreground space-y-1">
              <p>Можно просто зайти и уйти с кофе.</p>
              <p>Не обязательно заказывать еду.</p>
              <p>Можно посидеть недолго.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief about sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu preview */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Меню
              </h2>
              <p className="font-body text-muted-foreground mb-4">
                Классический кофе на качественном зерне. Гонконгские вафли. Сезонные напитки.
              </p>
              <Button variant="ghost" asChild className="font-body p-0 h-auto text-primary">
                <Link to="/menu" className="flex items-center gap-2">
                  Смотреть меню <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Events preview */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Мероприятия
              </h2>
              <p className="font-body text-muted-foreground mb-4">
                Камерные мастер-классы, книжный клуб, игра «Что? Где? Когда?».
              </p>
              <Button variant="ghost" asChild className="font-body p-0 h-auto text-primary">
                <Link to="/events" className="flex items-center gap-2">
                  Расписание <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Location preview */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Как добраться
              </h2>
              <p className="font-body text-muted-foreground mb-4">
                Центр Анапы. Удобно зайти по дороге. Рядом остановка.
              </p>
              <Button variant="ghost" asChild className="font-body p-0 h-auto text-primary">
                <Link to="/contacts" className="flex items-center gap-2">
                  Адрес и карта <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
