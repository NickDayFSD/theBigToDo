
import { getUser, saveUser, createUser, verifyLogin } from './local-storage-utils.js';
const loginSubmit = document.querySelector('#login-submit');
const signupSubmit = document.querySelector('#signup-submit');

// set event listeners to update state and DOM

loginSubmit.addEventListener('submit', (e) => {
    e.preventDefault;

    const formData = new FormData(loginSubmit);
    const loginUsername = formData.get('username');
    const loginPassword = formData.get('password');
    // saveUser(createdUser);

    if (verifyLogin(loginUsername, loginPassword === false)) {
        alert('User does not exist, please sign up');
    } else {
        window.location = './todo';
    }

});

signupSubmit.addEventListener('submit', (e) => {
    e.preventDefault;

    const formData = new FormData(signupSubmit);

    const newUsername = formData.get('new-username');
    const newPassword = formData.get('new-password');
    // saveUser(createdUser);
    const newUser = createUser(newUsername, newPassword);
    saveUser(newUser);

});