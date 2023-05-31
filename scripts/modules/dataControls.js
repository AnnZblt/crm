import createRow from '/scripts/modules/createElements.js';
import findCmsTotalPrice from '/scripts/modules/priceControls.js';


// Data controls

export const addGoodsData = (item, data) => {
  data.push(item);
};

export const addGoodsItemPage = (goodsItem, goodsList) => {
  goodsList.append(createRow(goodsItem));
};

export const getGoodsIndex = (data) => {
  data.reduce((acc, item, index) => {
    item.index = index + 1;
  }, 1);
};

const setGoodsIndex = (indeces) => {
  let itemIndex = 1;
  for (let index of indeces) {
    index.textContent = itemIndex;
    itemIndex++;
  }
};

export const removeGoodsData = (data, goodsList, pageTotalPrice, indeces) => {
  goodsList.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.table__btn_del')) {
      const goodsItemId = +(target.closest('.goods__item').dataset.id);
      data.forEach((item, i) => {
        if (+item.id === goodsItemId) {
          data.splice(i, 1);
        }
      });

      target.closest('.goods__item').remove();
      findCmsTotalPrice(pageTotalPrice, data);
      setGoodsIndex(indeces);
    }
  });
};

export default {
  setGoodsIndex,
};
