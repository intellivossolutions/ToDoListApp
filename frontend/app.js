document.getElementById('add-todo').addEventListener('click', () => {
    const todoText = document.getElementById('new-todo').value;
    if (todoText) {
        addTodo(todoText);
        document.getElementById('new-todo').value = '';
    }
});

function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(button);
    document.getElementById('todo-list').appendChild(li);
}
