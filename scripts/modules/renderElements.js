import createRow from '/scripts/modules/createElements.js';

// Render elements

export const renderGoods = (arr, list) => {
  let tableRow;
  arr.forEach((item) => {
    tableRow = createRow(item);
    return list.appendChild(tableRow);
  });
};

const renderGoodsId = (min, max, number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = +(Math.floor(Math.random() * (max - min + 1)) + min);

  return number;
};

export default renderGoodsId;
