/**
 * @jest-environment jsdom
 */

import Operation from '../utils.js';

jest.mock('../storage.js');

describe('Test adTodo and remove Functions', () => {
  test('test todo function', () => {
    expect(Operation.addTodo('task 5')).toEqual([
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 2', completed: true },
      { index: 3, description: 'task 3', completed: false },
      { index: 4, description: 'task 4', completed: true },
      { index: 5, description: 'task 5', completed: false },
    ]);
  });


