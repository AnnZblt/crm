// Goods database

export const goods = [
  {
    name: 'Смартфон Xiaomi 11T 8/128GB',
    id: 1,
    description: `Смартфон Xiaomi 11T – это представитель флагманской линейки, 
    выпущенной во второй половине 2021 года. И он полностью соответствует 
    такому позиционированию, предоставляя своим обладателям возможность 
    пользоваться отличными камерами, ни в чем себя не ограничивать при запуске 
    игр и других требовательных приложений.`,
    category: 'mobile-phone',
    discount: false,
    discountCount: 0,
    units: 'шт',
    count: 3,
    price: 27000,
    sum: 0,
    image: '../img/xiaomi11t.jpeg',
  },
  {
    name: 'Радиоуправляемый автомобиль Cheetan',
    id: 2,
    description: `Внедорожник на дистанционном управлении. 
    Скорость 25км/ч. Возраст 7 - 14 лет`,
    category: 'toys',
    discount: true,
    discountCount: 5,
    units: 'шт',
    count: 1,
    price: 4000,
    sum: 0,
    image: '../img/cheetah-car.jpeg',
  },
  {
    name: 'ТВ приставка MECOOL KI',
    id: 3,
    description: `Всего лишь один шаг сделает ваш телевизор умным, 
    Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает 
    в себе прочный процессор Cortex-A53 с чипом Amlogic S905D`,
    category: 'tv-box',
    discount: true,
    discountCount: 15,
    units: 'шт',
    count: 4,
    price: 12400,
    sum: 0,
    image: '../img/mecool-ki.jpeg',
  },
  {
    name: 'Витая пара PROConnect 01-0043-3-25',
    id: 4,
    description: `Витая пара Proconnect 01-0043-3-25 является сетевым кабелем 
    с 4 парами проводов типа UTP, в качестве проводника в которых 
    используется алюминий, плакированный медью CCA. Такая неэкранированная 
    витая пара с одножильными проводами диаметром 0.50 мм широко применяется 
    в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить 
    развертывание локальной сети в домашних условиях или на предприятии, 
    объединить все необходимое вам оборудование в единую сеть.`,
    category: 'cables',
    discount: false,
    discountCount: 0,
    units: 'v',
    count: 420,
    price: 22,
    sum: 0,
    image: '../img/pro-connect-010043325.jpeg',
  },
];

