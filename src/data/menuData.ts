export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  prices: number[]; // Array for different sizes (small, medium, large)
  category: 'coffee' | 'tea' | 'author-tea' | 'hot-drinks' | 'cold-drinks' | 'waffles-sweet' | 'waffles-savory';
}

export interface MenuAddOn {
  id: string;
  name: string;
  price: number;
}

export const menuAddOns: MenuAddOn[] = [
  { id: 'espresso-shot', name: 'Эспрессо шот', price: 50 },
  { id: 'milk', name: 'Молоко / сливки', price: 50 },
  { id: 'honey', name: 'Мёд', price: 50 },
  { id: 'marshmallow', name: 'Маршмеллоу', price: 50 },
  { id: 'decaf', name: 'Без кофеина', price: 50 },
  { id: 'alt-milk', name: 'Альтернативное молоко', price: 50 },
  { id: 'lemon', name: 'Лимон', price: 50 },
  { id: 'topping', name: 'Посыпка', price: 50 },
];

export const menuItems: MenuItem[] = [
  // Кофе
  { id: 'cappuccino', name: 'Капучино', prices: [240, 280, 320], category: 'coffee' },
  { id: 'latte', name: 'Латте', prices: [320, 350], category: 'coffee' },
  { id: 'espresso', name: 'Эспрессо', prices: [220], category: 'coffee' },
  { id: 'americano', name: 'Американо', prices: [220, 250], category: 'coffee' },
  { id: 'raf', name: 'Раф', prices: [280, 320, 350], category: 'coffee' },
  { id: 'raf-lavender', name: 'Раф лавандовый', prices: [350, 370, 390], category: 'coffee' },
  { id: 'raf-oreo', name: 'Раф орео / халва', prices: [350, 370, 390], category: 'coffee' },
  { id: 'flat-white', name: 'Флэт уайт', prices: [320], category: 'coffee' },
  { id: 'bumble', name: 'Бамбл', prices: [350], category: 'coffee' },
  { id: 'vienna', name: 'Кофе по-венски', prices: [370, 390], category: 'coffee' },
  { id: 'mint-mocha', name: 'Мятный мокко', prices: [370, 390], category: 'coffee' },
  { id: 'caramel-macchiato', name: 'Карамель макиато', prices: [370, 390], category: 'coffee' },
  
  // Чай классический
  { id: 'black-assam', name: 'Чёрный ассам', prices: [200, 350], category: 'tea' },
  { id: 'black-bergamot', name: 'Чёрный с бергамотом', prices: [200, 350], category: 'tea' },
  { id: 'black-thyme', name: 'Чёрный с чабрецом', prices: [200, 350], category: 'tea' },
  { id: 'black-orlov', name: 'Чёрный «Граф Орлов»', prices: [200, 350], category: 'tea' },
  { id: 'green-gunpowder', name: 'Зелёный порох', prices: [200, 350], category: 'tea' },
  { id: 'green-jasmine', name: 'Зелёный с жасмином', prices: [200, 350], category: 'tea' },
  { id: 'milk-oolong', name: 'Молочный улун', prices: [200, 350], category: 'tea' },
  
  // Авторский чай
  { id: 'currant-lingonberry', name: 'Смородиновый с брусничным листом', prices: [260, 390], category: 'author-tea' },
  { id: 'honey-apple', name: 'Медовое яблоко с имбирём', prices: [260, 390], category: 'author-tea' },
  { id: 'ginger-lemongrass', name: 'Имбирный лимонник', prices: [260, 390], category: 'author-tea' },
  { id: 'mint-raspberry', name: 'Мятная малина', prices: [260, 390], category: 'author-tea' },
  { id: 'passionfruit-cranberry', name: 'Маракуйя клюква', prices: [260, 390], category: 'author-tea' },
  { id: 'masala', name: 'Масала', prices: [260, 390], category: 'author-tea' },
  
  // Горячие напитки
  { id: 'hot-chocolate', name: 'Горячий шоколад', prices: [380], category: 'hot-drinks' },
  { id: 'mochaccino', name: 'Моккачино', prices: [380], category: 'hot-drinks' },
  { id: 'cocoa', name: 'Какао', prices: [380], category: 'hot-drinks' },
  { id: 'matcha-latte', name: 'Матча латте', prices: [350], category: 'hot-drinks' },
  { id: 'mulled-wine', name: 'Глинтвейн', prices: [400], category: 'hot-drinks' },
  
  // Холодные напитки
  { id: 'milkshake', name: 'Милк шейк', prices: [350], category: 'cold-drinks' },
  { id: 'fresh', name: 'Фрэш', description: 'Грейпфрут / Апельсин / Яблоко', prices: [450], category: 'cold-drinks' },
  { id: 'lemonade', name: 'Лимонад', prices: [300], category: 'cold-drinks' },
  { id: 'mojito', name: 'Мохито', prices: [300], category: 'cold-drinks' },
  { id: 'mors', name: 'Морс', prices: [300], category: 'cold-drinks' },
  
  // Гонконгские вафли — сладкие
  { id: 'waffle-ice-cream', name: 'С шариком мороженого', description: '+50₽ доп. шарик', prices: [200], category: 'waffles-sweet' },
  { id: 'waffle-topping', name: 'С топпингом', prices: [50], category: 'waffles-sweet' },
  
  // Гонконгские вафли — сытные
  { id: 'waffle-ham-cheese', name: 'С ветчиной и сыром', prices: [300], category: 'waffles-savory' },
  { id: 'waffle-salmon', name: 'С лососем и творожным сыром', prices: [350], category: 'waffles-savory' },
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
  address: 'ул. Гребенская, 95А',
  district: 'центр города',
  landmarks: 'недалеко от южного рынка и Церкви Серафима Саровского',
  directions: 'Если идёте от улицы Чехова — поверните на ул. Гребенскую в сторону набережной, недалеко от школы № 4.',
  phone: '+7(988) 318-53-98',
  email: 'hello@magiccoffee.ru',
  hours: {
    weekdays: '9:00–21:00',
    weekends: '9:00–21:00',
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
