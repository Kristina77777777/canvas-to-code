export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastry';
  icon: string;
}

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'morning-breeze',
    name: 'Утренний бриз',
    description: 'Эспрессо с цитрусовыми нотками и морской солью',
    price: 340,
    category: 'coffee',
    icon: '☕',
  },
  {
    id: 'warm-wave',
    name: 'Тёплая волна',
    description: 'Капучино с ванилью и корицей',
    price: 320,
    category: 'coffee',
    icon: '🌊',
  },
  {
    id: 'depth',
    name: 'Глубина',
    description: 'Колд-брю 12-часовой выдержки',
    price: 280,
    category: 'coffee',
    icon: '🫖',
  },
  // Tea
  {
    id: 'sea-tea',
    name: 'Морской чай',
    description: 'Зелёный чай с морскими водорослями и лимоном',
    price: 220,
    category: 'tea',
    icon: '🍵',
  },
  {
    id: 'sunset',
    name: 'Закат',
    description: 'Красный чай с мёдом и имбирём',
    price: 240,
    category: 'tea',
    icon: '🌅',
  },
  // Pastry
  {
    id: 'sand-cookies',
    name: 'Песочная выпечка',
    description: 'Печенье с морской солью',
    price: 180,
    category: 'pastry',
    icon: '🍪',
  },
  {
    id: 'croissant',
    name: 'Круассан',
    description: 'Классический круассан со сливочным маслом',
    price: 160,
    category: 'pastry',
    icon: '🥐',
  },
  {
    id: 'cheesecake',
    name: 'Чизкейк',
    description: 'Классический чизкейк с ягодами',
    price: 320,
    category: 'pastry',
    icon: '🍰',
  },
];

export interface Workshop {
  id: string;
  name: string;
  date: string;
  time: string;
  instructor: string;
  price: number;
  description: string;
}

export const workshops: Workshop[] = [
  {
    id: 'latte-art',
    name: 'Искусство латте-арта',
    date: 'Вторник',
    time: '18:00',
    instructor: 'Александр Чеботарев',
    price: 890,
    description: 'Научитесь создавать красивые узоры на кофе',
  },
  {
    id: 'watercolor',
    name: 'Акварель на берегу',
    date: 'Четверг',
    time: '15:00',
    instructor: 'Мария Волкова',
    price: 1200,
    description: 'Рисуем морские пейзажи акварелью',
  },
  {
    id: 'calligraphy',
    name: 'Каллиграфия & Кофе',
    date: 'Суббота',
    time: '11:00',
    instructor: 'Юлия Петрова',
    price: 750,
    description: 'Основы красивого письма за чашкой кофе',
  },
  {
    id: 'photography',
    name: 'Фотография в кадре',
    date: 'Суббота',
    time: '16:00',
    instructor: 'Иван Морозов',
    price: 950,
    description: 'Мобильная фотография для Instagram',
  },
];
