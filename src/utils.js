import Todo from './todo.js';
import LocalStorage from './storage.js';
import Status from './status.js';

class Operation {
  // Add task function
  static addTodo = (task) => {
    let todoList = LocalStorage.getData();

    if (task) {
      // get data from localstorage
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
      LocalStorage.setData(todoList);

      // refresh the window
      LocalStorage.reloadPage();
    }

    return todoList;
  }

  // renderTodo function
  static renderTodo = () => {
    // select todo list
    const todoListItems = document.querySelector('#todo-list');

    // clean up tolistItems
    todoListItems.innerHTML = 'demo';

    const list = LocalStorage.getData();

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
        li.innerHTML = `<input type = "checkbox" class="checkbox" ${checked}> <input type="test" style="border: 0; width: 80%;" class="edit-desc" value="${item.description}"> <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;

        todoListItems.appendChild(li);
      });
    }

    // select delete from the list
    const deleteTodo = document.querySelectorAll('.delete');
    deleteTodo.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.remove(index, list[index].description);
      });
    });

    // select edit from the list
    const edit = document.querySelectorAll('.edit-desc');
    edit.forEach((input, index) => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value) this.edit(input.value, index);
      });
    });

    // select the checkbox
    const checkmarked = document.querySelectorAll('.checkbox');
    checkmarked.forEach((btn, index) => {
      btn.addEventListener('click', () => Status.completedCheck(index));
    });
  }

  // edit todo
  static edit = (newDescription, i) => {
    const todos = LocalStorage.getData();

    // store the edit to local storage
    if (newDescription) {
      todos[i].description = newDescription;
      LocalStorage.setData(todos);
    }

    // refresh the page
    LocalStorage.reloadPage();

    return todos;
  }

  // remove Todo
  static remove = (index) => {
    // get data from local storage
    let todos = LocalStorage.getData();

    // remove the specific item
    todos.splice(index, 1);

    // store back the updated array to local storage
    todos = LocalStorage.updateIndex(todos);
    LocalStorage.setData(todos);

    // refresh the page
    LocalStorage.reloadPage();

    return todos;
  }
}

export default Operation;