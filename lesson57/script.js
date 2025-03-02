'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const openModal = function () {
  console.log(' button click ');
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i].addEventListener('click', openModal));
}

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModal();
  }
});
