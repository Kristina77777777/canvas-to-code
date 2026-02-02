export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'non-coffee' | 'seasonal' | 'waffles' | 'desserts';
}

export const menuItems: MenuItem[] = [
  // Кофе
  {
    id: 'espresso',
    name: 'Эспрессо',
    description: 'Классический эспрессо',
    price: 150,
    category: 'coffee',
  },
  {
    id: 'americano',
    name: 'Американо',
    description: 'Эспрессо с горячей водой',
    price: 180,
    category: 'coffee',
  },
  {
    id: 'cappuccino',
    name: 'Капучино',
    description: 'Эспрессо с молочной пеной',
    price: 220,
    category: 'coffee',
  },
  {
    id: 'latte',
    name: 'Латте',
    description: 'Эспрессо с большим количеством молока',
    price: 250,
    category: 'coffee',
  },
  {
    id: 'flat-white',
    name: 'Флэт-уайт',
    description: 'Двойной эспрессо с молоком',
    price: 270,
    category: 'coffee',
  },
  {
    id: 'raf',
    name: 'Раф',
    description: 'Эспрессо со сливками и ванилью',
    price: 290,
    category: 'coffee',
  },
  // Напитки без кофе
  {
    id: 'cocoa',
    name: 'Какао',
    description: 'Горячее какао на молоке',
    price: 200,
    category: 'non-coffee',
  },
  {
    id: 'matcha-latte',
    name: 'Матча-латте',
    description: 'Японский зелёный чай с молоком',
    price: 280,
    category: 'non-coffee',
  },
  {
    id: 'tea',
    name: 'Чай',
    description: 'Чёрный, зелёный или травяной',
    price: 150,
    category: 'non-coffee',
  },
  // Сезонные
  {
    id: 'summer-lemonade',
    name: 'Лимонад',
    description: 'Освежающий домашний лимонад',
    price: 220,
    category: 'seasonal',
  },
  {
    id: 'winter-spice',
    name: 'Пряный латте',
    description: 'Латте с корицей и специями',
    price: 290,
    category: 'seasonal',
  },
  // Гонконгские вафли
  {
    id: 'waffle-classic',
    name: 'Классические вафли',
    description: 'С сахарной пудрой',
    price: 250,
    category: 'waffles',
  },
  {
    id: 'waffle-fruits',
    name: 'Вафли с фруктами',
    description: 'С сезонными фруктами и сиропом',
    price: 350,
    category: 'waffles',
  },
  {
    id: 'waffle-chocolate',
    name: 'Вафли с шоколадом',
    description: 'С горячим шоколадом и бананом',
    price: 380,
    category: 'waffles',
  },
  {
    id: 'waffle-ice-cream',
    name: 'Вафли с мороженым',
    description: 'С шариком ванильного мороженого',
    price: 400,
    category: 'waffles',
  },
  // Десерты
  {
    id: 'cheesecake',
    name: 'Чизкейк',
    description: 'Классический нью-йоркский',
    price: 280,
    category: 'desserts',
  },
  {
    id: 'brownie',
    name: 'Брауни',
    description: 'Шоколадный брауни с орехами',
    price: 220,
    category: 'desserts',
  },
];

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  format: string;
  audience: string;
  needsRegistration: boolean;
  description?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 'latte-art',
    title: 'Мастер-класс по латте-арту',
    date: '15 февраля',
    time: '14:00',
    format: 'Мастер-класс',
    audience: 'Для всех',
    needsRegistration: true,
    description: 'Научитесь рисовать на кофе. Материалы включены.',
  },
  {
    id: 'book-club',
    title: 'Книжный клуб',
    date: '18 февраля',
    time: '18:00',
    format: 'Встреча',
    audience: 'Любители чтения',
    needsRegistration: false,
    description: 'Обсуждаем современную прозу.',
  },
  {
    id: 'wwg',
    title: 'Что? Где? Когда?',
    date: '22 февраля',
    time: '19:00',
    format: 'Игра',
    audience: 'Для всех',
    needsRegistration: true,
    description: 'Любительская игра без призов. Просто для удовольствия.',
  },
  {
    id: 'watercolor',
    title: 'Акварель для начинающих',
    date: '25 февраля',
    time: '15:00',
    format: 'Мастер-класс',
    audience: 'Для всех',
    needsRegistration: true,
    description: 'Рисуем простой пейзаж. Материалы включены.',
  },
];

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const pastEvents: PastEvent[] = [
  {
    id: 'past-1',
    title: 'Встреча книжного клуба',
    date: '10 января 2026',
    description: 'Обсуждали «Дом, в котором…» Мариам Петросян. Было 8 человек.',
  },
  {
    id: 'past-2',
    title: 'Мастер-класс по каллиграфии',
    date: '5 января 2026',
    description: 'Учились писать кистью. 6 участников.',
  },
];

export const cafeInfo = {
  name: 'Magic Coffee',
  city: 'Анапа',
  address: 'ул. Горького, 42',
  district: 'центр города',
  landmarks: 'напротив кинотеатра «Мир», рядом с остановкой «Центральный рынок»',
  directions: 'Если идёте со стороны набережной — поверните на ул. Горького, кофейня будет слева через 100 метров.',
  phone: '+7 (988) 123-45-67',
  email: 'hello@magiccoffee.ru',
  hours: {
    weekdays: '8:00–21:00',
    weekends: '9:00–22:00',
  },
  seasonNote: 'В летний сезон (июнь–август) работаем до 23:00',
  features: [
    'Можно прийти с детьми',
    'Удобно зайти одному',
    'Подходит для спокойных встреч',
    'Можно посидеть с ноутбуком',
    'Можно просто взять кофе с собой',
  ],
  mapLinks: {
    yandex: 'https://yandex.ru/maps/-/CDQJ4Q~g',
    google: 'https://maps.google.com/?q=Анапа+ул+Горького+42',
    '2gis': 'https://2gis.ru/anapa',
  },
  delivery: {
    yandex: 'https://eda.yandex.ru',
    deliveryClub: 'https://www.delivery-club.ru',
    ownDelivery: {
      available: true,
      areas: 'центр Анапы и ближайшие районы',
      time: '30–50 минут',
      minOrder: 500,
    },
  },
};
