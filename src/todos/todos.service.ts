import axios from 'axios';
import { TaskRequest, TaskResponse } from './models/task';

export class TodoService {
  async getTodos(
    url: string,
  ): Promise<Array<TaskRequest & TaskResponse> | null> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return null;
    }
  }
}
