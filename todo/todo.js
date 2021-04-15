const LOGGED_IN = 'LOGGED_IN';


//Keven: I think Joe is doing the loggin?
//export function login(username) {
//  localStorage.setItem(LOGGED_IN, username);
//}

export function logout() {
    localStorage.setItem(LOGGED_IN, '');
    window.location = './todos';
}

