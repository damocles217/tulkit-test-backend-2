import { Router } from 'express';
import { UserRequest, UserResponse } from './models/user';
import { UserService } from './user.service';
import { Errors } from '../../types/errors';
import { TodoService } from '../todos/todos.service';
import { TaskRequest } from '../todos/models/task';
import { returnUsersWithTasks } from './utils/filters';

const router = Router();
const userService = new UserService();
const todoService = new TodoService();

router.get('/users', async function (req, res) {
  const urlDefault = 'https://jsonplaceholder.typicode.com/';
  const errors: Array<Errors> = [];
  try {
    const users: Array<UserRequest & UserResponse> | null =
      await userService.getUsers(urlDefault + 'users');

    const tasks: Array<TaskRequest> = await todoService.getTodos(
      urlDefault + 'todos',
    );

    // catching the errors
    if (!users) errors.push({ message: "Couldn't get users" });
    if (!tasks) errors.push({ message: "Couldn't get tasks" });
    if (errors.length > 0) throw errors;
    res.send(returnUsersWithTasks(users, tasks)).status(200);
  } catch (e) {
    res.send(e).status(404);
  }
});

export default router;
