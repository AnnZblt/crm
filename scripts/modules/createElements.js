
import findCmsTotalPrice from '/scripts/modules/priceControls.js';
import { addGoodsItemPage } from '/scripts/modules/dataControls.js';
import { addGoodsData } from '/scripts/modules/dataControls.js';
import * as modalControls from '/scripts/modules/modalControls.js';

// Create elements

const createRow = (
  {
    index, id, name, category, discount, discountCount,
    units, count, price, image,
  }) => {
  const row = document.createElement('tr');
  row.classList.add('table__row', 'goods__item');
  row.dataset.id = id;
  if (+discount === 1 || discount === 'on') {
    price *= ((100 - discountCount) / 100);
  }

  row.innerHTML = `
  <tr>
    <td class="table__cell goods__index">${index}</td>
    <td class="table__cell table__cell_left table__cell_name data-id="${id}">
      <span class="table__cell-id">ID: ${id}</span>
      ${name}</td>
    <td class="table__cell table__cell_left">${category}</td>
    <td class="table__cell">${units}</td>
    <td class="table__cell">${+count}</td>
    <td class="table__cell goods__price">$${Math.floor(+price)}</td>
    <td class="table__cell goods__sum">$${Math.floor(+count * +price)}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic" data-pic="${image}"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>
  `;

  return row;
};

export const createGoods = (form, list, data, id, pageTotalPrice, overlay,
  discountInput, modalTotalPrice,
) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('index', data.length + 1);
    formData.append('id', id.textContent);
    const newGoodsItem = Object.fromEntries(formData);

    console.log(newGoodsItem);

    addGoodsItemPage(newGoodsItem, list);
    addGoodsData(newGoodsItem, data);

    form.reset();
    discountInput.disabled = true;
    modalTotalPrice.textContent = `$ 0`;
    modalControls.closeModal(overlay);
    findCmsTotalPrice(pageTotalPrice, data);
  });
};

export default createRow;
