export const openImagePreview = (goodsList) => {
  const imageButtons = goodsList.querySelectorAll('.table__btn_pic');

  imageButtons.forEach(button => {
    button.addEventListener('click', () => {
      const imageUrl = button.getAttribute('data-pic');
      const top = (screen.height - 600) / 2;
      const left = (screen.width - 800) / 2;
      const features = `width=800,height=600,top=${top},left=${left}`;
      open(imageUrl, '', features);
    });
  });
};
