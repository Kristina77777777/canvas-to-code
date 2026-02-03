import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните имя и сообщение',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-telegram', {
        body: {
          name: formData.name,
          phone: formData.phone || undefined,
          email: formData.email || undefined,
          message: formData.message,
          subject: 'Сообщение с сайта',
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: 'Сообщение отправлено!',
        description: 'Мы свяжемся с вами в ближайшее время',
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Ошибка отправки',
        description: 'Попробуйте позже или свяжитесь с нами напрямую',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="font-display text-xl text-foreground">
          Написать нам
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              Телефон
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
              className="font-body"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body text-sm">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="font-body"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-body text-sm">
              Сообщение *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваш вопрос или пожелание..."
              rows={4}
              required
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
                Отправить
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
