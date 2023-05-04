'use strict';

//Goods database

const goods = [
  {
    index: 1,
    name: "Смартфон Xiaomi 11T 8/128GB",
    id: 1,
    description: "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    category: "mobile-phone",
    discount: false,
    discount_count: 0,
    units: "шт",
    count: 3,
    price: 27000,
    sum: 0,
    images: {
      small: "img/smrtxiaomi11t-m.jpg",
      big: "img/smrtxiaomi11t-b.jpg"
    },
  },
  {
    index: 2,
    name: "Радиоуправляемый автомобиль Cheetan",
    id: 2,
    description: "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    category: "toys",
    discount: true,
    discount_count: 5,
    units: "шт",
    count: 1,
    price: 4000,
    sum: 0,
    images: {
      small: "img/cheetancar-m.jpg",
      big: "img/cheetancar-b.jpg"
    },
  },
  {
    index: 3,
    name: "ТВ приставка MECOOL KI",
    id: 3,
    description: "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    category: "tv-box",
    discount: true,
    discount_count: 15,
    units: "шт",
    count: 4,
    price: 12400,
    sum: 0,
    images: {
      small: "img/tvboxmecool-m.jpg",
      big: "img/tvboxmecool-b.jpg"
    },
  },
  {
    index: 4,
    name: "Витая пара PROConnect 01-0043-3-25",
    id: 4,
    description: "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    category: "cables",
    discount: false,
    discount_count: 0,
    units: "v",
    count: 420,
    price: 22,
    sum: 0,
    images: {
      small: "img/lan_proconnect43-3-25.jpg",
      big: "img/lan_proconnect43-3-25-b.jpg"
    },
  }
];

const modalTitle = document.querySelector('.modal__title');
const overlay = document.querySelector('.overlay');
const overlayModal = overlay.querySelector('.overlay__modal');
const modalForm = document.querySelector('.modal__form');
const modalDiscountCheckBox = modalForm.querySelector('.modal__checkbox');
const modalDiscountInput = modalForm.querySelector('.modal__input_discount');
const bntAddGoods = document.querySelector('.panel__add-goods');
const goodsList = document.querySelector('.table__body');
const goodsItem = document.querySelectorAll('.table__body tr').forEach(tr => {
  tr.classList.add('table__row', 'goods__item');
});
const vendorCodeId = overlayModal.querySelector('.vendor-code__id');
let vendorCodeNumber = 0;
const goodsTotalPrice = document.querySelector('.cms__total-price');
const modalTotalPrice = overlayModal.querySelector('.modal__total-price');
const modalGoodsCount = overlayModal.querySelector('.modal__label_count #count');
const modalGoodsPrice = overlayModal.querySelector('.modal__label_price #price');

overlay.classList.remove('active');
goodsList.classList.add('goods__list');


//Goods creating

const createRow = ({ index, id, name, category, discount, discount_count, units, count, price }) => {
  const row = document.createElement('tr');
  row.classList.add('table__row', 'goods__item');
  row.dataset.id = id;
  if (+discount === 1 || discount === 'on') {
    price = price * ((100 - discount_count) / 100);
  };

  row.innerHTML = `
  <tr>
    <td class="table__cell">${index}</td>
    <td class="table__cell table__cell_left table__cell_name data-id="${id}">
      <span class="table__cell-id">ID: ${id}</span>
      ${name}</td>
    <td class="table__cell table__cell_left">${category}</td>
    <td class="table__cell">${units}</td>
    <td class="table__cell">${count}</td>
    <td class="table__cell goods__price">$${Math.floor(price)}</td>
    <td class="table__cell goods__sum">$${Math.floor(count * price)}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>
  `;
  return row;
};

const renderGoods = (arr) => {
  let tableRow;
  arr.forEach((item) => {
    tableRow = createRow(item);
    return goodsList.appendChild(tableRow);
  });
};

renderGoods(goods);


// Find CMS total price 

let allGoodsSum = document.getElementsByClassName('goods__sum');

const findCmsTotalPrice = () => {
  let itemsSum = 0;

  for (let oneGoodsSum of allGoodsSum) {
    let itemSum = oneGoodsSum.textContent.slice(1);
    itemsSum += +itemSum;
  }

  goodsTotalPrice.textContent = '$ ' + Math.floor(itemsSum);

};

findCmsTotalPrice();


// Modal control

modalGoodsCount.addEventListener('blur', event => {
  findModalTotalPrice(
    modalTotalPrice,
    modalGoodsCount.value,
    modalGoodsPrice.value,
    modalDiscountInput.value);
});

modalGoodsPrice.addEventListener('blur', event => {
  findModalTotalPrice(
    modalTotalPrice,
    modalGoodsCount.value,
    modalGoodsPrice.value,
    modalDiscountInput.value);
});

modalDiscountInput.addEventListener('input', event => {
  findModalTotalPrice(
    modalTotalPrice,
    modalGoodsCount.value,
    modalGoodsPrice.value,
    modalDiscountInput.value);
});

const discountAvailable = () => {
  modalDiscountCheckBox.addEventListener('change', event => {
    if (event.target.checked) {
      modalDiscountInput.disabled = false;
    } else {
      modalDiscountInput.disabled = true;
      modalDiscountInput.value = '';
    }
    findModalTotalPrice(
      modalTotalPrice,
      modalGoodsCount.value,
      modalGoodsPrice.value,
      modalDiscountInput.value);
  })
};

const renderGoodsId = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  vendorCodeNumber = + Math.floor(Math.random() * (max - min + 1)) + min;

  return vendorCodeNumber;
};

const findModalTotalPrice = (sum, count, price, discount) => {
  sum.textContent = `$ ${Math.floor(count * (price * ((100 - discount) / 100)))}`;
};


// Buttons behavior

const openModal = () => {
  overlay.classList.add('active');
  renderGoodsId(1, 10000000);
  vendorCodeId.textContent = vendorCodeNumber;
  discountAvailable();

  return { vendorCodeNumber, vendorCodeId };
};


const closeModal = () => {
  overlay.classList.remove('active');

}

bntAddGoods.addEventListener('click', openModal);

overlay.addEventListener('click', event => {
  if (event.target === overlay || event.target.closest('.modal__close')) {
    closeModal();
  }
});




// Add goods on page from modal

const addGoodsData = item => {
  goods.push(item);
};

const addGoodsItemPage = (goodsItem, goodsList) => {
  goodsList.append(createRow(goodsItem));
};

const createGoods = (form, list, arr, id) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('index', arr.length + 1);
    formData.append('id', id.textContent);
    const newGoodsItem = Object.fromEntries(formData);

    addGoodsItemPage(newGoodsItem, list);
    addGoodsData(newGoodsItem);

    form.reset();
    modalDiscountInput.disabled = true;
    modalTotalPrice.textContent = `$ 0`;
    closeModal();
    findCmsTotalPrice();
  });
};

createGoods(modalForm, goodsList, goods, vendorCodeId);



// Remove item

goodsList.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.table__btn_del')) {
    const goodsItemId = +(target.closest('.goods__item').dataset.id);
    goods.forEach((item, i) => {
      if (+item.id === goodsItemId) {
        goods.splice(i, 1);
      }
    });

    target.closest('.goods__item').remove();
    findCmsTotalPrice();

    console.log(goods);
  }
});
