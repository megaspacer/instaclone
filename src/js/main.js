import Modal from './modal';
import sendRequest from './form';
import getAllPosts from './getAllPosts';

const openModalBtn = document.querySelector('#open-modal');
const closeModalBtn = document.querySelector('#reset');
const sendPostForm = document.querySelector('#send-request');

const modal = new Modal();

getAllPosts().then(data => console.log(data));

openModalBtn.addEventListener('click', modal.openModal);
closeModalBtn.addEventListener('click', modal.closeModal);
sendPostForm.addEventListener('submit', sendRequest);
