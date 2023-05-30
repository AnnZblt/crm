import renderGoodsId from '/scripts/modules/renderElements.js';
import { discountAvailable } from '/scripts/modules/priceControls.js';


// Modal controls

const openModal = (id, number, count, totalPrice, goodsPrice, discount,
  checkbox, overlay) => {
  overlay.classList.add('active');
  number = renderGoodsId(1, 100000, number);
  id.textContent = number;

  discountAvailable(count, totalPrice, goodsPrice, discount, checkbox);
  return {
    id,
    number,
  };
};

export const closeModal = (overlay) => {
  overlay.classList.remove('active');
};

export const modalControl = (btn, overlay, id, number, count, totalPrice,
  goodsPrice, discount, checkbox) => {
  btn.addEventListener('click', event => {
    openModal(id, number, count, totalPrice, goodsPrice, discount, checkbox,
      overlay);
  });

  overlay.addEventListener('click', event => {
    if (event.target === overlay || event.target.closest('.modal__close')) {
      closeModal(overlay);
    }
  });
};
/*
export default {
  closeModal,
};
*/
