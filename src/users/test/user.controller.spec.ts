import supertest from 'supertest';
import application from '../../index';
import { dataMocked } from './__mocks__/users';

const api = supertest(application.app);

jest.mock(
  'axios',
  jest.fn(() => {
    return {
      get: jest.fn(() => dataMocked),
    };
  }),
);

afterAll(() => {
  application.server.close();
});

describe('Users endpoints', () => {
  it('/users get a json', async () => {
    await api
      .get('/users')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  it('/user return two users', async () => {
    const response = await api.get('/users');
    expect(response.body).toHaveLength(2);
  });
});
