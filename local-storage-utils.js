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

export function verifyLogin(username, password) {
    // take in a username and password
    const existingAccounts = getUser();
    // use getUser() to get existing accounts 
    if (existingAccounts.username === username && existingAccounts.password === password) {
        return true;
    } else {
        return false;
    }

    // checking if username and password match an existing account
    // if no match throw error, if match pass to Todo page
}