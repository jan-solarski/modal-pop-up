'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// usuwam classes hidden zeby wyswietlic modal window & overlay kiedy klikam na show modal buttons

btnsOpenModal.forEach(el => {
  el.addEventListener('click', openModal);
});

// dodaje z powrotem classes hidden zeby schowac modal window & overlay kiedy klikam na x button w modal window

btnCloseModal.addEventListener('click', hideModal);

// dodaje z powrotem classes hidden zeby schowac modal window & overlay kiedy klikam na overlay

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log(e);
    hideModal();
  }
});
