const modalWindow = document.querySelector('.modal');
let inputDesc = document.querySelector('#description');
let inputImg = document.querySelector('#image-url');

export default class Modal {
    openModal() {
        modalWindow.classList.remove('modal--close');
        modalWindow.classList.add('modal--open');
        inputImg.value = '';
        inputDesc.value = '';
    }
    closeModal() {
        modalWindow.classList.remove('modal--open');
        modalWindow.classList.add('modal--close');
    }
}
