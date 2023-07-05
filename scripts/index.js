import { goods } from '/scripts/modules/database.js';
import { getGoodsIndex } from '/scripts/modules/dataControls.js';
import pageElements from '/scripts/modules/pageElements.js';
import { createGoods } from '/scripts/modules/createElements.js';
import { renderGoods } from '/scripts/modules/renderElements.js';
import findCmsTotalPrice from '/scripts/modules/priceControls.js';
import { modalControl } from '/scripts/modules/modalControls.js';
import { removeGoodsData } from '/scripts/modules/dataControls.js';
import { openImagePreview } from '/scripts/modules/interactionControls.js';


const init = () => {
  getGoodsIndex(goods);
  renderGoods(goods, pageElements.goodsList);
  findCmsTotalPrice(pageElements.goodsTotalPrice, goods);
  modalControl(pageElements.bntAddGoods,
    pageElements.overlay,
    pageElements.vendorCodeId,
    pageElements.vendorCodeNumber,
    pageElements.modalGoodsCount,
    pageElements.modalTotalPrice,
    pageElements.modalGoodsPrice,
    pageElements.modalDiscountInput,
    pageElements.modalDiscountCheckBox,
  );
  createGoods(
    pageElements.modalForm,
    pageElements.goodsList,
    goods,
    pageElements.vendorCodeId,
    pageElements.goodsTotalPrice,
    pageElements.overlay,
    pageElements.modalDiscountInput,
    pageElements.modalTotalPrice);
  removeGoodsData(goods, pageElements.goodsList,
    pageElements.goodsTotalPrice, pageElements.goodsIndeces);
  openImagePreview(pageElements.goodsList);
};

init();
