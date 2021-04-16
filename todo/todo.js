
import { addTodo, getUser } from '../local-storage-utils.js';
const form = document.querySelector('form');
const newTodo = document.getElementById('new-to-do');
const ul = document.querySelector('ul');



export function renderTodo(todo) {

    //create list element
    const label = document.createElement('li');
    label.textContent = todo;
    const input = document.createElement('input');
    //writing in that list element
    input.type = 'checkbox';

    label.append(input);
   // label.append(todo);
    ul.append(label);
}

const user = getUser();
if (user.todo) {
    for (let item of user.todo) {
        console.log(item);
        renderTodo(item);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const newTodo = formData.get('new-to-do');
    console.log(newTodo);
    addTodo(newTodo);

    renderTodo(newTodo);
    
});
