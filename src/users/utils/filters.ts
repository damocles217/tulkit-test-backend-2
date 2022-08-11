import { TaskRequest } from '../../todos/models/task';
import { UserRequest, UserResponse } from '../models/user';

export function returnUsersWithTasks(
  users: Array<UserRequest & UserResponse>,
  tasks: Array<TaskRequest>,
): Array<UserResponse> {
  for (const index in users) {
    const user = users[index];
    delete user.company;
    delete user.address;
    for (const tIndex in tasks) {
      if (user.id == tasks[tIndex].userId) {
        if (user.tasks != undefined)
          user.tasks.push({
            id: tasks[tIndex].id,
            title: tasks[tIndex].title,
          });
        else {
          user.tasks = [
            {
              id: tasks[tIndex].id,
              title: tasks[tIndex].title,
            },
          ];
        }
      }
    }
  }

  return users;
}
