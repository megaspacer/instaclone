import moment from 'moment';
import firebase from './config';
import Modal from './modal';
import getAllPosts from './getAllPosts';
import renderAllPosts from './renderAllPosts';

const description = document.querySelector('#description');
const imageURL = document.querySelector('#image-url');

const modal = new Modal();

export default (e) => {
    e.preventDefault();
    const ref = firebase.database().ref('posts');
    const createdAt = moment().format('DD-MM-YYYY HH:mm:ss');
    ref.push({
        description: description.value,
        imageURL: imageURL.value,
        createdAt: createdAt
    });
    getAllPosts().then(data => {
        renderAllPosts(data);
    });
    modal.closeModal();
};
