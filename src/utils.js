import Todo from './todo.js';

class Operation {
    static setData = (item) => localStorage.setItem('todoList', JSON.stringify(item));

    static getData = () => JSON.parse(localStorage.getItem('todoList'));

    // reload the page
    static reloadPage = () => {
      window.location.reload();
      return false;
    }

    // Add task function
    static addTodo = (task) => {
      if (task) {
        // get data from localstorage
        let todoList = this.getData();
        if (todoList == null) {
          todoList = [];
        }

        // increment the value of index
        const index = todoList.length + 1;

        // create an object of index, description and completed
        const todo = new Todo(index, task);

        // push newTask object to the array
        todoList.push(todo);

        // add array to the local storage
        this.setData(todoList);

        // refresh the window
        this.reloadPage();
      }
    }

    // renderTodo function
    static renderTodo = () => {
      // select todo list
      const todoListItems = document.querySelector('#todo-list');

      // clean up tolistItems
      todoListItems.innerHTML = '';

      const list = this.getData();

      // loop through the todo list
      if (list) {
        list.forEach((item) => {
          // check if the task is completed
          const checked = item.completed ? 'checked' : null;

          // create an li element with class="item"
          const li = document.createElement('li');
          li.setAttribute('class', 'item');

          // if task completed then add checked class to the li to cross over the activity
          if (checked === 'checked') {
            li.classList.add('checked');
          }

          // add data, checkbox and delete button to li
          li.innerHTML = `<input type = "checkbox" class="checkbox" ${checked}> ${item.description} <button class="edit"><i class="fa fa-edit" aria-hidden="true"></i></button> <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;

          todoListItems.appendChild(li);
        });
      }

      // select delete from the list
      const deleteTodo = document.querySelectorAll('.delete');
      deleteTodo.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.remove(index);
        });
      });

      // select edit from the list
      const edit = document.querySelectorAll('.edit');
      edit.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.edit(index);
        });
      });

      const checkmarked = document.querySelectorAll('.checkbox');
      checkmarked.forEach((btn, index) => {
        btn.addEventListener('click', () => this.completedCheck(index));
      });
    }

    // remove Todo
    static remove = (index) => {
      const todos = this.getData();
      todos.splice(index, 1);

      todos.forEach((todo, i) => {
        todos[i].index = i + 1;
      });

      this.setData(todos);
      this.reloadPage();
    }

    // edit todo
    static edit = (i) => {
      const todos = this.getData();
      const newDescription = prompt('Please Edit The Activity', todos[i].description);

      // store the edit to local storage
      if (newDescription) {
        todos[i].description = newDescription;
        this.setData(todos);
      }

      // refresh the page
      this.reloadPage();
    }

    // check mark
    static completedCheck = (i) => {
      const todos = this.getData();
      const todo = todos[i];

      todos.forEach((item) => {
        if (item.index === todo.index) {
          if (item.completed === false) {
            item.completed = true;
          } else {
            item.completed = false;
          }
        }
      });
      this.setData(todos);
      this.reloadPage();
    }
}

export default Operation;