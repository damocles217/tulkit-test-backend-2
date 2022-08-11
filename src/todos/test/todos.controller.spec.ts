import supertest from 'supertest';
import application from '../../index';
import { tasksMock } from './__mocks__/data';

const api = supertest(application.app);

jest.mock(
  'axios',
  jest.fn(() => {
    return {
      get: jest.fn(() => tasksMock),
    };
  }),
);

afterAll(() => {
  application.server.close();
});

describe('Todos controller', () => {
  it('Must get the tasks without userId', async () => {
    const response = await api.get('/todos').expect(200);

    expect(response.body[0].userId).toBeUndefined();
  });

  it('Must get 5 tasks', async () => {
    const response = await api.get('/todos').expect(200);

    expect(response.body).toHaveLength(5);
  });

  it('Must get an specific task', async () => {
    const response = await api.get('/todos').expect(200);

    expect(response.body[0].id).toBe(1);
  });
});
