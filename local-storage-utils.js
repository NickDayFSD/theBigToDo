const USER = 'USER';

export function getUser() {

    return JSON.parse(localStorage.getItem(USER));

}

export function saveUser(account) {

    const stringAccount = JSON.stringify(account);

    localStorage.setItem(USER, stringAccount);
}

export function createUser(username, password) {

    const account = {
        username,
        password,
        todo: []
    };

    return account;
}

export function verifyLogin(username, password) {

    const existingAccounts = getUser();

    if (existingAccounts.username === username && existingAccounts.password === password) {
        return true;
    } else {
        return false;
    }
}