import Status from '../status.js';

jest.mock('../storage.js');

describe('test complted task check', () => {
  test('completed status as true for task 3', () => {
    expect(Status.completedCheck(2)).toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 2', completed: true },
      { index: 3, description: 'task 3', completed: true },
      { index: 4, description: 'task 4', completed: true },
    ]);
  });

  test('completed status as false for task 2', () => {
    expect(Status.completedCheck(1)).toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 2', completed: false },
      { index: 3, description: 'task 3', completed: false },
      { index: 4, description: 'task 4', completed: true },
    ]);
  });

  test('clear all tasks where completed is equal to true', () => {
    expect(Status.clearCompleted()).toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 3', completed: false },
    ]);
  });
});
