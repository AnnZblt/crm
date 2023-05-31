// Price controls

export const findCmsTotalPrice = (pageTotalPrice, data) => {
  let itemsSum = 0;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let price = item.price;
    if (item.discount === true || item.discount === 'on') {
      price *= ((100 - item.discountCount) / 100);
    }
    if (price && item.count) {
      item.sum = price * item.count;
      itemsSum += item.sum;
    }
  }

  pageTotalPrice.textContent = '$ ' + Math.floor(itemsSum);
};

export const findModalTotalPrice = (sum, count, price, discount) => {
  sum.textContent =
    `$ ${Math.floor(count * (price * ((100 - discount) / 100)))}`;
};

export const discountAvailable =
  (count, totalPrice, goodsPrice, discount, checkbox) => {
    count.addEventListener('blur', event => {
      findModalTotalPrice(totalPrice, count.value, goodsPrice.value,
        discount.value);
    });

    goodsPrice.addEventListener('blur', event => {
      findModalTotalPrice(totalPrice, count.value, goodsPrice.value,
        discount.value);
    });

    discount.addEventListener('input', event => {
      findModalTotalPrice(totalPrice, count.value, goodsPrice.value,
        discount.value);
    });

    checkbox.addEventListener('change', event => {
      if (event.target.checked) {
        discount.disabled = false;
        discount.setAttribute('required', true);
      } else {
        discount.disabled = true;
        discount.value = '';
      }
      findModalTotalPrice(totalPrice, count.value, goodsPrice.value,
        discount.value);
    });
  };

export default findCmsTotalPrice;
