import axios from 'axios';
import { UserRequest, UserResponse } from './models/user';

export class UserService {
  async getUsers(
    url: string,
  ): Promise<Array<UserRequest & UserResponse> | null> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return null;
    }
  }
}
