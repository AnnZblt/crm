// Get page elements

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
const modalGoodsCount =
  overlayModal.querySelector('.modal__label_count #count');
const modalGoodsPrice =
  overlayModal.querySelector('.modal__label_price #price');
let goodsIndeces = goodsList.getElementsByClassName('goods__index');

goodsList.classList.add('goods__list');

export default {
  modalTitle,
  overlay,
  overlayModal,
  modalForm,
  modalDiscountCheckBox,
  modalDiscountInput,
  bntAddGoods,
  goodsList,
  goodsItem,
  vendorCodeId,
  vendorCodeNumber,
  goodsTotalPrice,
  modalTotalPrice,
  modalGoodsCount,
  modalGoodsPrice,
  goodsIndeces,
};
