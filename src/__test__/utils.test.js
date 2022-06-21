import Operation from '../utils.js';

jest.mock('../storage.js');

// test addTodo function
describe('Test addTodo function', () => {
  it('add task 5 to the todos list', () => {
    expect(Operation.addTodo('task 5')).toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 2', completed: true },
      { index: 3, description: 'task 3', completed: false },
      { index: 4, description: 'task 4', completed: true },
      { index: 5, description: 'task 5', completed: false },
    ]);
  });

  it('add task 5 to the todos list and do not increment the index value', () => {
    expect(Operation.addTodo('task 5')).not.toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 2', completed: true },
      { index: 3, description: 'task 3', completed: false },
      { index: 4, description: 'task 4', completed: true },
      { index: 4, description: 'task 5', completed: false },
    ]);
  });
});

// test remove function
describe('Test remove function', () => {
  it('remove task 2 from the list', () => {
    expect(Operation.remove(1)).toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 3', completed: false },
      { index: 3, description: 'task 4', completed: true },
    ]);
  });

  it('remove task 3 from the list', () => {
    expect(Operation.remove(2)).toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 2', completed: true },
      { index: 3, description: 'task 4', completed: true },
    ]);
  });

  it('remove task 1 from the list and do not update the index', () => {
    expect(Operation.remove(2)).not.toEqual([
      { index: 2, description: 'task 2', completed: true },
      { index: 3, description: 'task 3', completed: false },
      { index: 4, description: 'task 4', completed: true },
    ]);
  });
});
