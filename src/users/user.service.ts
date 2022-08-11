import axios from 'axios';
import { UserRequest, UserResponse } from './models/user';
import { returnWantedValues } from './utils/filters';

export class UserService {
  async getUsers(url: string): Promise<Array<UserResponse> | null> {
    try {
      const response = await axios.get(url);
      const users: Array<UserRequest> = response.data;

			// This returs the props that are required
      const filteredUsers: Array<UserResponse> = users.map(value =>
        returnWantedValues(value),
      );

      return filteredUsers;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
