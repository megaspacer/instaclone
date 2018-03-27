import Modal from './modal';
const openModalBtn = document.querySelector('#open-modal');
const closeModalBtn = document.querySelector('#reset');

const modal = new Modal();

openModalBtn.addEventListener('click', modal.openModal);
closeModalBtn.addEventListener('click', modal.closeModal);
