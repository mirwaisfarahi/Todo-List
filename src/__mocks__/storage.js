class LocalStorage {
    // stora array data to local storage
    static setData = (item = 'task 4') => [{ index: 1, description: 'task 1', completed: false }, { index: 2, description: 'task 2', completed: true }, { index: 3, description: 'task 3', completed: false }, { index: 4, description: item, completed: true }];;

    // get local storage data
    static getData = () => [{ index: 1, description: 'task 1', completed: false }, { index: 2, description: 'task 2', completed: true }, { index: 3, description: 'task 3', completed: false }, { index: 4, description: 'task 4', completed: true }];

    // reload the page
    static reloadPage = () => false

    // update the index
    static updateIndex = (todos) => {
      todos.forEach((todo, i) => {
        todos[i].index = i + 1;
      });

      return todos;
    }
}

export default LocalStorage;