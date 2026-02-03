import React, { useState } from 'react';
import { ExternalLink, Phone, Truck, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { menuItems, menuAddOns, cafeInfo } from '@/data/menuData';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', label: 'Кофе', description: 'Классические кофейные напитки на качественном зерне. Средняя обжарка. Вкус понятный и стабильный.' },
    { id: 'tea', label: 'Чай', description: 'Листовой чай. Чёрный, зелёный, улун.' },
    { id: 'author-tea', label: 'Авторский чай', description: 'Наши фирменные чаи с натуральными добавками.' },
    { id: 'hot-drinks', label: 'Горячие напитки', description: 'Для тех, кто не пьёт кофе или хочет что-то другое.' },
    { id: 'cold-drinks', label: 'Холодные напитки', description: 'Освежающие напитки для тёплого времени года.' },
    { id: 'waffles-sweet', label: 'Вафли сладкие', description: 'Гонконгские вафли. Готовим на заказ, подаём горячими.' },
    { id: 'waffles-savory', label: 'Вафли сытные', description: 'Гонконгские вафли с сытными начинками.' },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const currentCategory = categories.find(c => c.id === activeCategory);

  const formatPrices = (prices: number[]) => {
    if (prices.length === 1) return `${prices[0]} ₽`;
    return prices.map(p => `${p}`).join(' / ') + ' ₽';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Page title */}
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-12">
            Меню и доставка
          </h1>

          {/* Menu section */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Меню
            </h2>

            <Tabs defaultValue="coffee" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="flex flex-wrap justify-start mb-6 bg-transparent gap-2 h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="font-body px-4 py-2 rounded-full border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeCategory} className="mt-0">
                {/* Category description */}
                {currentCategory?.description && (
                  <p className="font-body text-muted-foreground mb-6">
                    {currentCategory.description}
                  </p>
                )}

                {/* Size legend for multi-price items */}
                {filteredItems.some(item => item.prices.length > 1) && (
                  <p className="font-body text-sm text-muted-foreground mb-4 italic">
                    Цены указаны за разные размеры порции
                  </p>
                )}

                {/* Items list */}
                <div className="space-y-3">
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id}
                      className="flex justify-between items-baseline py-3 border-b border-border last:border-0"
                    >
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-medium text-foreground">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="font-body text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="font-body text-lg font-medium text-primary ml-4 whitespace-nowrap">
                        {formatPrices(item.prices)}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Add-ons section */}
            <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-accent" />
                Чтобы стало идеально...
              </h3>
              <div className="flex flex-wrap gap-3">
                {menuAddOns.map((addon) => (
                  <span 
                    key={addon.id}
                    className="font-body text-sm px-3 py-1.5 bg-card rounded-full border border-border text-muted-foreground"
                  >
                    {addon.name} +{addon.price}₽
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Delivery section */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Доставка
            </h2>
            
            <p className="font-body text-muted-foreground mb-6">
              Вы можете заказать у нас домой или в офис.
            </p>

            <div className="space-y-6">
              {/* Delivery services */}
              <div>
                <h3 className="font-body text-foreground font-medium mb-3">
                  Доступные варианты:
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild className="font-body btn-vintage">
                    <a href={cafeInfo.delivery.yandex} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Яндекс Еда
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="font-body btn-vintage">
                    <a href={cafeInfo.delivery.deliveryClub} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Delivery Club
                    </a>
                  </Button>
                </div>
              </div>

              {/* Own delivery */}
              {cafeInfo.delivery.ownDelivery.available && (
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Truck className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                          Наша доставка
                        </h3>
                        <div className="font-body text-sm text-muted-foreground space-y-1">
                          <p>Работаем по {cafeInfo.delivery.ownDelivery.areas}</p>
                          <p>Время доставки — {cafeInfo.delivery.ownDelivery.time}</p>
                          <p>Минимальная сумма — {cafeInfo.delivery.ownDelivery.minOrder} ₽</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact for delivery */}
              <div className="font-body text-muted-foreground">
                <p className="mb-3">
                  Если вы не нашли нас в сервисах доставки — напишите или позвоните, подскажем.
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a 
                    href={`tel:${cafeInfo.phone.replace(/[^\d+]/g, '')}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cafeInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
