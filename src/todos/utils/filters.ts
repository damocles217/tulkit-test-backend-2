import { UserRequest } from 'src/users/models/user';
import { TaskRequest, TaskResponse } from '../models/task';

export function returnFilteredTasks(
  tasks: Array<TaskRequest & TaskResponse>,
  users: Array<UserRequest>,
): Array<TaskResponse> {
  for (const index in tasks)
    for (const uIndex in users) {
      const user = users[uIndex];
      if (tasks[index].userId == user.id) {
        tasks[index].user = {
          email: user.email,
          id: user.id,
          name: user.name,
          username: user.username,
        };

        delete tasks[index].userId;
      }
    }

  return tasks;
}
