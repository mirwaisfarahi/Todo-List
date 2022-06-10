import './style.css';

// select the todo list item
const todoListItems = document.querySelector('#todo-list');

// define an array to add todo tasks
const todoList = [
  {
    index: 1,
    description: 'Complete the Todo list task',
    completed: false,
  },

  {
    index: 2,
    description: 'Attend Morning Session Meeting',
    completed: false,
  },
];

// renderTodo function
const renderTodo = (list) => {
  // clean up tolistItems
  todoListItems.innerHTML = '';

  // loop through the todo list
  list.forEach((item) => {
    // create an li element
    const li = document.createElement('li');

    // add data, checkbox and delete button to li
    li.innerHTML = `<input type = 'checkbox'> ${item.description} <button id="delete"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>`;

    todoListItems.appendChild(li);
  });
};

renderTodo(todoList);
