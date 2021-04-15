import { getUser } from '../local-storage-utils';

function renderTodo(todo) {
    //create list element
    const input = document.createElement('input');
    //writing in that list element
    input.textContent = todo;
    input.type = 'radio';

    //if the todo is completed line thru the list element
    if (todo.completed) {
        li.style.textDecoration = 'line-through';
    }

    li.addEventListener('click', () => {
        completeTodo(todo.todo);

        renderTodos();
    });
    return li;
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