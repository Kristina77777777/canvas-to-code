import React, { useState } from 'react';
import { Send, Loader2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { upcomingEvents } from '@/data/menuData';

interface EventRegistrationData {
  name: string;
  phone: string;
  eventId: string;
  comment: string;
}

const EventRegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<EventRegistrationData>({
    name: '',
    phone: '',
    eventId: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventChange = (value: string) => {
    setFormData(prev => ({ ...prev, eventId: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.eventId) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните имя, телефон и выберите мероприятие',
        variant: 'destructive',
      });
      return;
    }

    const selectedEvent = upcomingEvents.find(e => e.id === formData.eventId);
    if (!selectedEvent) {
      toast({
        title: 'Ошибка',
        description: 'Мероприятие не найдено',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const message = `Мероприятие: ${selectedEvent.title}\nДата: ${selectedEvent.date}\nВремя: ${selectedEvent.time}${formData.comment ? `\n\nКомментарий: ${formData.comment}` : ''}`;

      const { data, error } = await supabase.functions.invoke('send-telegram', {
        body: {
          name: formData.name,
          phone: formData.phone,
          message: message,
          subject: 'Запись на мероприятие',
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами для подтверждения записи',
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        eventId: '',
        comment: '',
      });
    } catch (error) {
      console.error('Error sending registration:', error);
      toast({
        title: 'Ошибка отправки',
        description: 'Попробуйте позже или свяжитесь с нами напрямую',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Filter events that need registration
  const eventsWithRegistration = upcomingEvents.filter(event => event.needsRegistration);

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="font-display text-xl text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Записаться на мероприятие
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="event" className="font-body text-sm">
              Мероприятие *
            </Label>
            <Select value={formData.eventId} onValueChange={handleEventChange}>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Выберите мероприятие" />
              </SelectTrigger>
              <SelectContent>
                {eventsWithRegistration.map(event => (
                  <SelectItem key={event.id} value={event.id} className="font-body">
                    {event.title} — {event.date}, {event.time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="font-body text-sm">
              Ваше имя *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Как вас зовут?"
              required
              className="font-body"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-body text-sm">
              Телефон *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
              required
              className="font-body"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment" className="font-body text-sm">
              Комментарий
            </Label>
            <Textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Дополнительная информация (количество человек, особые пожелания...)"
              rows={3}
              className="font-body resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full btn-vintage font-body"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Отправляем...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Записаться
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EventRegistrationForm;
