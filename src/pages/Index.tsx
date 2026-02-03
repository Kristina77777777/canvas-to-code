import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Coffee, 
  Calendar, 
  Phone, 
  Baby, 
  User, 
  Laptop, 
  Heart,
  ExternalLink,
  ArrowRight,
  PackageOpen
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cafeInfo } from '@/data/menuData';
import heroWaffles from '@/assets/hero-waffles.jpg';

// Фотографии интерьера
import interiorEntrance from '@/assets/interior-entrance.jpg';
import interiorMain from '@/assets/interior-main.jpg';
import interiorWindow from '@/assets/interior-window.jpg';

// Анимации
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Index: React.FC = () => {
  // Удобства
  const conveniences = [
    { icon: Baby, text: 'Рады детям' },
    { icon: User, text: 'Удобно одному' },
    { icon: Heart, text: 'Для спокойных встреч' },
    { icon: Laptop, text: 'Можно с ноутбуком' },
    { icon: PackageOpen, text: 'Кофе с собой' },
  ];

  // Что у нас есть
  const offerings = [
    { text: 'Кофе и напитки', link: '/menu' },
    { text: 'Гонконгские вафли', link: '/menu' },
    { text: 'Сезонные напитки', link: '/menu' },
    { text: 'Мастер-классы', link: '/events' },
    { text: 'Встречи по интересам', link: '/events' },
    { text: '«Что? Где? Когда?»', link: '/events' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero section - Location First */}
      <section className="relative pt-24 pb-12 min-h-[60vh] md:min-h-[50vh] overflow-hidden">
        {/* Background image with blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroWaffles})` }}
        >
          <div className="absolute inset-0 bg-espresso/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">

          {/* Краткое описание */}
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-cream leading-relaxed text-lg font-medium drop-shadow-md">
              Здесь готовим кофе из свежей обжарки, гонконгские вафли и сезонные напитки. 
              Можно посидеть с книгой, поработать, прийти с детьми или попасть на мастер-класс.
            </p>
          </motion.div>

          {/* Часы работы и отметка о детях */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-card/90 backdrop-blur-sm border-border">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-body text-sm">
                    <p className="text-foreground font-medium">Пн–Вс</p>
                    <p className="text-muted-foreground">{cafeInfo.hours.weekdays}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card/90 backdrop-blur-sm border-border">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Baby className="w-5 h-5 text-accent" />
                  </div>
                  <div className="font-body text-sm">
                    <p className="text-foreground font-medium">Рады детям</p>
                    <p className="text-muted-foreground">Семейная атмосфера</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card/90 backdrop-blur-sm border-border">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <a href={`tel:${cafeInfo.phone}`} className="font-body text-sm">
                    <p className="text-foreground font-medium">{cafeInfo.phone}</p>
                    <p className="text-muted-foreground">Позвонить</p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Где мы находимся */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-6">
              Где мы находимся
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Адрес и ориентиры */}
              <div className="space-y-4">
                <Card className="bg-card border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="font-body text-sm space-y-2">
                        <p className="text-foreground font-medium text-base">{cafeInfo.address}</p>
                        <p className="text-muted-foreground">{cafeInfo.district}</p>
                        <p className="text-muted-foreground">{cafeInfo.landmarks}</p>
                        <p className="text-muted-foreground">{cafeInfo.directions}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ссылки на карты */}
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-body"
                    asChild
                  >
                    <a href={cafeInfo.mapLinks.yandex} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Яндекс Карты <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-body"
                    asChild
                  >
                    <a href={cafeInfo.mapLinks.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-body"
                    asChild
                  >
                    <a href={cafeInfo.mapLinks['2gis']} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      2ГИС <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Фото фасада */}
              <motion.div 
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={interiorEntrance} 
                    alt="Вид с улицы на кофейню"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <p className="font-body text-xs text-muted-foreground text-center py-2 bg-card">
                    Вид с улицы
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Фото интерьера */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-6">
              Как у нас
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                className="overflow-hidden rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <img 
                  src={interiorMain} 
                  alt="Основной зал кофейни"
                  className="w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="font-body text-xs text-muted-foreground text-center py-2 bg-card">
                  Основной зал
                </p>
              </motion.div>
              <motion.div 
                className="overflow-hidden rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <img 
                  src={interiorWindow} 
                  alt="Уютное место у окна"
                  className="w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="font-body text-xs text-muted-foreground text-center py-2 bg-card">
                  Вид из окна
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Кому у нас удобно */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-6">
              Кому у нас удобно
            </h2>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {conveniences.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card/90 backdrop-blur-sm border-border">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-body text-sm text-foreground">{item.text}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Что у нас есть */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-6">
              Что у нас есть
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {offerings.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link to={item.link}>
                    <Card className="bg-card border-border h-full card-hover">
                      <CardContent className="p-4 flex items-center justify-between">
                        <span className="font-body text-sm text-foreground">{item.text}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Быстрые ссылки */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/menu">
                <Card className="bg-card border-border h-full card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Coffee className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Меню
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Кофе, чай, вафли, напитки
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/events">
                <Card className="bg-card border-border h-full card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Мероприятия
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Мастер-классы, встречи, игры
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/contacts">
                <Card className="bg-card border-border h-full card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Контакты
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Адрес, карта, часы работы
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Если вы у нас впервые */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Если вы у нас впервые
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Просто заходите. Мы подскажем, что взять.
            </p>
            <motion.div 
              className="space-y-2 font-body text-sm text-muted-foreground"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeInUp}>Можно просто зайти и уйти с кофе.</motion.p>
              <motion.p variants={fadeInUp}>Не обязательно заказывать еду.</motion.p>
              <motion.p variants={fadeInUp}>Можно посидеть недолго.</motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
