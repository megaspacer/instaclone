import firebase from './config';
import Modal from './modal';

const description = document.querySelector('#description');
const imageURL = document.querySelector('#image-url');

const modal = new Modal();

export default (e) => {
    e.preventDefault();
    const ref = firebase.database().ref('posts');
    ref.push({
        description: description.value,
        imageURL: imageURL.value
    });
    modal.closeModal();
};
