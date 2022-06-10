import './style.css';

const toDoList = [
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

const todoTask = document.querySelector('#todo-list');

toDoList.forEach((task) => {
  todoTask.innerHTML += `<li> ${task.description}</li>`;
});