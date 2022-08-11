import axios from 'axios';
import { UserRequest, UserResponse } from './models/user';

export class UserService {
  async getUsers(
    url: string,
    filter: (value: any) => any,
  ): Promise<Array<UserResponse> | null> {
    try {
      const response = await axios.get(url);
      const users: Array<UserRequest> = response.data;

      // This returs the props that are required
      const filteredUsers: Array<UserResponse> = users.map(value =>
        filter(value),
      );

      return filteredUsers;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
