import React, { useState } from 'react';
import { Calendar, Clock, User, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { workshops, Workshop } from '@/data/menuData';

const ArtSpaceSection: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seats, setSeats] = useState('1');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedWorkshop || !name || !email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    const workshop = workshops.find(w => w.id === selectedWorkshop);
    
    toast({
      title: "Заявка отправлена!",
      description: `Вы записаны на мастер-класс "${workshop?.name}". Мы свяжемся с вами для подтверждения.`,
    });

    // Reset form
    setSelectedWorkshop('');
    setName('');
    setEmail('');
    setSeats('1');
  };

  return (
    <section id="art-space" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Арт-пространство
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Мастер-классы и творческие встречи в уютной атмосфере
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Workshop timeline */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Расписание мастер-классов
            </h3>
            
            <div className="timeline-line space-y-6 pl-8">
              {workshops.map((workshop, index) => (
                <div 
                  key={workshop.id} 
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  
                  <Card className="card-hover bg-background border-border">
                    <CardContent className="p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h4 className="font-display text-lg font-semibold text-foreground">
                          {workshop.name}
                        </h4>
                        <span className="font-display text-lg font-semibold text-primary">
                          {workshop.price}₽
                        </span>
                      </div>
                      
                      <p className="font-body text-sm text-muted-foreground mb-3">
                        {workshop.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {workshop.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {workshop.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {workshop.instructor}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Registration form */}
          <div>
            <Card className="bg-background border-border sticky top-24">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Записаться на мастер-класс
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="workshop" className="font-body">
                      Выберите мастер-класс *
                    </Label>
                    <Select value={selectedWorkshop} onValueChange={setSelectedWorkshop}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите мастер-класс" />
                      </SelectTrigger>
                      <SelectContent>
                        {workshops.map((workshop) => (
                          <SelectItem key={workshop.id} value={workshop.id}>
                            {workshop.name} — {workshop.date}, {workshop.time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body">
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите ваше имя"
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seats" className="font-body">
                      Количество мест
                    </Label>
                    <Select value={seats} onValueChange={setSeats}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'место' : num < 5 ? 'места' : 'мест'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-ocean bg-primary hover:bg-primary/90 text-primary-foreground font-body text-lg py-6"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Забронировать
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtSpaceSection;
