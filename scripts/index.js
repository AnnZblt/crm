'use strict';

const goods = [
  {
    index: 3,
    name: "Смартфон Xiaomi 11T 8/128GB",
    id: 1,
    description: "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    category: "mobile-phone",
    discont: false,
    units: "шт",
    count: 3,
    price: 27000,
    sum: 0,
    images: {
      small: "img/smrtxiaomi11t-m.jpg",
      big: "img/smrtxiaomi11t-b.jpg"
    },
    calculateSum() {
      return this.sum = this.price * this.count;
    }
  },
  {
    index: 4,
    name: "Радиоуправляемый автомобиль Cheetan",
    id: 2,
    description: "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    category: "toys",
    discont: 5,
    units: "шт",
    count: 1,
    price: 4000,
    sum: 0,
    images: {
      small: "img/cheetancar-m.jpg",
      big: "img/cheetancar-b.jpg"
    },
    calculateSum() {
      return this.sum = this.price * this.count;
    }
  },
  {
    index: 5,
    name: "ТВ приставка MECOOL KI",
    id: 3,
    description: "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    category: "tv-box",
    discont: 15,
    units: "шт",
    count: 4,
    price: 12400,
    sum: 0,
    images: {
      small: "img/tvboxmecool-m.jpg",
      big: "img/tvboxmecool-b.jpg"
    },
    calculateSum() {
      return this.sum = this.price * this.count;
    }
  },
  {
    index: 6,
    name: "Витая пара PROConnect 01-0043-3-25",
    id: 4,
    description: "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    category: "cables",
    discont: false,
    units: "v",
    count: 420,
    price: 22,
    sum: 0,
    images: {
      small: "img/lan_proconnect43-3-25.jpg",
      big: "img/lan_proconnect43-3-25-b.jpg"
    },
    calculateSum() {
      return this.sum = this.price * this.count;
    }
  }
];
console.log(goods[0]);

const modalTitle = document.querySelector('.modal__title');
const overlay = document.querySelector('.overlay');
const overlayModal = overlay.querySelector('.overlay__modal');
const modalForm = document.querySelector('.modal__form');
const modalDiscountCheckBox = modalForm.querySelector('.modal__checkbox');
const modalDiscountInput = modalForm.querySelector('.modal__input_discount');
const btnClose = overlayModal.querySelector('.modal__close');
const bntAddGoods = document.querySelector('.panel__add-goods');
const tableBody = document.querySelector('.table__body');


overlay.classList.remove('active');
bntAddGoods.addEventListener('click', () => {
  overlay.classList.add('active');
});

overlayModal.addEventListener('click', event => {
  event.stopPropagation();
});

btnClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});

const createRow = ({ index, id, name, category, units, count, price }) => {
  const row = document.createElement('tr');

  row.innerHTML = `
  <tr>
    <td class="table__cell">${index}</td>
    <td class="table__cell table__cell_left table__cell_name data-id="${id}">
      <span class="table__cell-id">ID: ${id}</span>
      ${name}</td>
    <td class="table__cell table__cell_left">${category}</td>
    <td class="table__cell">${units}</td>
    <td class="table__cell">${count}</td>
    <td class="table__cell">$${price}</td>
    <td class="table__cell">$${count * price}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>
  `;
  return row;
}

const renderGoods = (arr) => {
  let tableRow;
  arr.forEach((item) => {
    tableRow = createRow(item);
    return tableBody.appendChild(tableRow);
  });
}

renderGoods(goods);