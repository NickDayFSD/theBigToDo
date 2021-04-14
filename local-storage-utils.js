const USER = 'USER';

export function getUser() {
    // get user from local storage
    return JSON.parse(localStorage.getItem(USER));
    // parse string
    // return parsed user
}

export function saveUser(account) {
    // stringify account
    const stringAccount = JSON.stringify(account);
    // set to local storage
    localStorage.setItem(USER, stringAccount);
}

export function createUser(username, password) {
    // check if username already exists
    // create username from user input
    const account = {
        username,
        password,
        todo: []
    };
    return account;
}

export function checkPassword() {

}