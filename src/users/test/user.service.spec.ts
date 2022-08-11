import { UserService } from '../user.service';
import { dataMocked } from './__mocks__/users';

jest.mock('axios', () => ({
  get: jest.fn(() => dataMocked),
}));

describe('User Service', () => {
  const userService = new UserService();
  it('Must return the filtered users', async () => {
    const users = await userService.getUsers('');
    expect(users).toHaveLength(2);
  });

  it('Must check if an user exists', async () => {
    const users = await userService.getUsers('');
    expect(users![0].id).toBe(1);
  });
});
