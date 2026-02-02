import React from 'react';
import { Calendar, Clock, Users, Check, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { upcomingEvents, pastEvents } from '@/data/menuData';

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Page title */}
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Мастер-классы и события
          </h1>

          {/* Intro */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Что у нас происходит
            </h2>
            <div className="font-body text-muted-foreground space-y-2">
              <p>В кофейне регулярно проходят камерные мероприятия.</p>
              <p>Обычно это 6–12 человек.</p>
              <p>Формат спокойный, без сцены, микрофона и шума.</p>
            </div>
          </section>

          {/* Upcoming events */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Расписание ближайших мероприятий
            </h2>
            
            {/* Table for desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 px-2 font-medium text-foreground">Дата</th>
                    <th className="text-left py-3 px-2 font-medium text-foreground">Время</th>
                    <th className="text-left py-3 px-2 font-medium text-foreground">Мероприятие</th>
                    <th className="text-left py-3 px-2 font-medium text-foreground">Формат</th>
                    <th className="text-left py-3 px-2 font-medium text-foreground">Для кого</th>
                    <th className="text-left py-3 px-2 font-medium text-foreground">Запись</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingEvents.map((event) => (
                    <tr key={event.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                      <td className="py-3 px-2 text-foreground">{event.date}</td>
                      <td className="py-3 px-2 text-foreground">{event.time}</td>
                      <td className="py-3 px-2">
                        <span className="font-medium text-foreground">{event.title}</span>
                        {event.description && (
                          <p className="text-muted-foreground text-xs mt-1">{event.description}</p>
                        )}
                      </td>
                      <td className="py-3 px-2 text-muted-foreground">{event.format}</td>
                      <td className="py-3 px-2 text-muted-foreground">{event.audience}</td>
                      <td className="py-3 px-2">
                        {event.needsRegistration ? (
                          <span className="flex items-center gap-1 text-accent">
                            <Check className="w-4 h-4" /> Нужна
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <X className="w-4 h-4" /> Не нужна
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards for mobile */}
            <div className="md:hidden space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="bg-card border-border card-hover">
                  <CardContent className="p-4">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 font-body text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        {event.audience}
                      </div>
                      {event.description && (
                        <p className="text-muted-foreground pt-2 border-t border-border">
                          {event.description}
                        </p>
                      )}
                      <div className="pt-2">
                        {event.needsRegistration ? (
                          <span className="inline-flex items-center gap-1 text-accent text-xs">
                            <Check className="w-4 h-4" /> Нужна запись
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-muted-foreground text-xs">
                            Запись не нужна
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* About formats */}
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Мастер-классы
              </h2>
              <div className="font-body text-muted-foreground space-y-2">
                <p>Мы проводим практические мастер-классы и творческие встречи.</p>
                <p>Без спешки и формальности.</p>
                <p>Подходит для тех, кто хочет провести время с пользой и интересом.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Встречи по интересам
              </h2>
              <div className="font-body text-muted-foreground space-y-2">
                <p>В кофейне проходят встречи по разным темам.</p>
                <p>Формат — разговорный, без обязательств.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Мини-игра «Что? Где? Когда?»
              </h2>
              <div className="font-body text-muted-foreground space-y-2">
                <p>Регулярно проходит мини-игра «Что? Где? Когда?».</p>
                <p>Формат любительский. Без соревнований и призов.</p>
                <p>Подходит для тех, кто любит думать и обсуждать.</p>
              </div>
            </div>
          </section>

          {/* Past events */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Прошедшие мероприятия
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Это помогает понять формат тем, кто ещё не был у нас.
            </p>
            
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <Card key={event.id} className="bg-card border-border card-hover">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-lg font-medium text-foreground">
                        {event.title}
                      </h3>
                      <span className="font-body text-sm text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
