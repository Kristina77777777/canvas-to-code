import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const CartModal: React.FC = () => {
  const { 
    items, 
    totalPrice, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeItem,
    clearCart 
  } = useCart();
  const { toast } = useToast();
  
  const [isCheckout, setIsCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card',
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkoutData.name || !checkoutData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заказ оформлен!",
      description: "Мы свяжемся с вами для подтверждения заказа",
    });

    clearCart();
    setIsCheckout(false);
    setIsCartOpen(false);
    setCheckoutData({
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: 'card',
    });
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setIsCheckout(false);
  };

  return (
    <Dialog open={isCartOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            {isCheckout ? 'Оформление заказа' : 'Ваша корзина'}
          </DialogTitle>
        </DialogHeader>

        {!isCheckout ? (
          <>
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <p className="font-body text-muted-foreground">
                  Корзина пуста
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-body font-medium text-foreground truncate">
                          {item.name}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground">
                          {item.price}₽
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        
                        <span className="font-body w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center mb-4">
                  <span className="font-body text-lg">Итого:</span>
                  <span className="font-display text-2xl font-semibold text-primary">
                    {totalPrice}₽
                  </span>
                </div>

                <Button
                  className="w-full btn-ocean bg-primary hover:bg-primary/90 text-primary-foreground font-body text-lg py-6"
                  onClick={() => setIsCheckout(true)}
                >
                  Оформить заказ
                </Button>
              </>
            )}
          </>
        ) : (
          <form onSubmit={handleCheckout} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="checkout-name" className="font-body">
                Ваше имя *
              </Label>
              <Input
                id="checkout-name"
                value={checkoutData.name}
                onChange={(e) => setCheckoutData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Введите ваше имя"
                className="font-body"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkout-email" className="font-body">
                Email
              </Label>
              <Input
                id="checkout-email"
                type="email"
                value={checkoutData.email}
                onChange={(e) => setCheckoutData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
                className="font-body"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkout-phone" className="font-body">
                Телефон *
              </Label>
              <Input
                id="checkout-phone"
                type="tel"
                value={checkoutData.phone}
                onChange={(e) => setCheckoutData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+7 (999) 123-45-67"
                className="font-body"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkout-address" className="font-body">
                Адрес доставки
              </Label>
              <Input
                id="checkout-address"
                value={checkoutData.address}
                onChange={(e) => setCheckoutData(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Улица, дом, квартира"
                className="font-body"
              />
            </div>

            <div className="space-y-3">
              <Label className="font-body">Способ оплаты</Label>
              <RadioGroup
                value={checkoutData.paymentMethod}
                onValueChange={(value) => setCheckoutData(prev => ({ ...prev, paymentMethod: value }))}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="font-body cursor-pointer">
                    Картой онлайн
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="font-body cursor-pointer">
                    Наличными при получении
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sbp" id="sbp" />
                  <Label htmlFor="sbp" className="font-body cursor-pointer">
                    СБП
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <span className="font-body text-lg">К оплате:</span>
              <span className="font-display text-2xl font-semibold text-primary">
                {totalPrice}₽
              </span>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 font-body"
                onClick={() => setIsCheckout(false)}
              >
                Назад
              </Button>
              <Button
                type="submit"
                className="flex-1 btn-ocean bg-primary hover:bg-primary/90 text-primary-foreground font-body"
              >
                Подтвердить заказ
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
