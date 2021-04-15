<<<<<<< HEAD
const LOGGED_IN = 'LOGGED_IN';


//Keven: I think Joe is doing the loggin?
//export function login(username) {
//  localStorage.setItem(LOGGED_IN, username);
//}

export function logout() {
    localStorage.setItem(LOGGED_IN, '');
    window.location = './todos';
}

=======
import { getUser } from '../local-storage-utils';



export function renderTodo(todo) {
    //create list element
    const div = document.querySelector('.to-do-display');
    const input = document.createElement('input');
    //writing in that list element
    input.textContent = todo;
    input.type = 'radio';
    div.append(input);
}





function renderTodos() {
    const user = getUser();
    const ul = document.querySelector('ul');

    ul.textContent = '';
    user.todos.forEach(todo => {

        const li = renderLi(todo);

        ul.append(li);
    });
}

function completeTodo() {
    const user = getUser();

    matchingTodo = user.todos.find((todo) => todoMessage === todo.todo);

    matchingTodo.completed = true;

    updateUser(user);
}
>>>>>>> d7b0c06da8bba7705c60a242e861fdd914261ff6
