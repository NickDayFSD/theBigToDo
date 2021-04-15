
import { getUser, saveUser, createUser, verifyLogin } from './local-storage-utils.js';
const form = document.querySelector('form');
const errorMsg = document.querySelector('.error-msg');

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault;

    const formData = new FormData(form);
    const loginUsername = formData.get('login-username');
    const loginPassword = formData.get('login-password');
    const signupUsername = formData.get('signup-username');
    const signupPassword = formData.get('signup-password');

    if (verifyLogin(loginUsername, loginPassword) === false) {
        alert('User does not exist, please sign up');
    }
});