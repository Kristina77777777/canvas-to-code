import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import { menuItems, MenuItem } from '@/data/menuData';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addItem } = useCart();

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'coffee', label: 'Кофе' },
    { id: 'tea', label: 'Чай' },
    { id: 'pastry', label: 'Выпечка' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      icon: item.icon,
    });
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Наше меню
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Авторские напитки и выпечка, вдохновлённые морем
          </p>
        </div>

        {/* Category tabs */}
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="flex justify-center mb-10 bg-transparent gap-2 flex-wrap">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="font-body px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="card-hover bg-card border-border overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{item.icon}</span>
                      <span className="font-display text-2xl font-semibold text-primary">
                        {item.price}₽
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>
                    
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    
                    <Button
                      className="w-full btn-ocean bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => handleAddToCart(item)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
