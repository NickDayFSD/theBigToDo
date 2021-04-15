
import { getUser, saveUser, createUser, verifyLogin } from './local-storage-utils.js';
const form = document.querySelector('form');

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault;

    const formData = new FormData(form);
    const loginUsername = formData.get('username');
    const loginPassword = formData.get('password');
    const newUsername = formData.get('new-username');
    const newPassword = formData.get('new-password');
    const createdUser = createUser(newUsername, newPassword);

    // saveUser(createdUser);

    if (verifyLogin(loginUsername, loginPassword) === false) {
        alert('User does not exist, please sign up');
        saveUser(createdUser);
    } // else redirect to todo page
    

});