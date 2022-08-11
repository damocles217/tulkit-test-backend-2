import { TodoService } from '../todos.service';
import { tasksMock } from './__mocks__/data';

jest.mock(
  'axios',
  jest.fn(() => {
    return {
      get: jest.fn(() => tasksMock),
    };
  }),
);

const todoService = new TodoService();
describe('Todos Service', () => {
  it('Return the todos', async () => {
    const tasks = await todoService.getTodos('');
    expect(tasks).toHaveLength(5);
  });
  it('Get a todo', async () => {
    const tasks = await todoService.getTodos('');
    expect(tasks[0].id).toBe(1);
  });
});
