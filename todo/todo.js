
import { addTodo, getUser } from '../local-storage-utils.js';
const button = document.querySelector('button');
const newTodo = document.getElementById('new-to-do');
const ul = document.querySelector('ul');



export function renderTodo(todo) {
    //create list element
    const label = document.createElement('label');

    const input = document.createElement('input');
    //writing in that list element
    input.textContent = todo.value;
    console.log('This is the todo' + todo);
    console.log('this is the todo.value' + todo.value);
    input.type = 'radio';
    label.append(input);
    label.append(todo.value);
    ul.append(label);

}



const user = getUser();
if (user.todo) {
    for (let item of user.todo) {
        renderTodo(item);
    }
}

button.addEventListener('click', () => {
    addTodo(newTodo);

    renderTodo(newTodo);
    //On click
});




