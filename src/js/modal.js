const modalWindow = document.querySelector('.modal');

export default class Modal {
    openModal() {
        modalWindow.classList.remove('modal--close');
        modalWindow.classList.add('modal--open');
    }
    closeModal() {
        modalWindow.classList.remove('modal--open');
        modalWindow.classList.add('modal--close');
    }
}
