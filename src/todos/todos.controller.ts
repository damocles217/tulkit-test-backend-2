import { Router } from 'express';
import { UserRequest } from 'src/users/models/user';
import { UserService } from '../users/user.service';
import { TaskRequest, TaskResponse } from './models/task';
import { TodoService } from './todos.service';
import { returnFilteredTasks } from './utils/filters';

import { Errors } from '../../types/errors';

const router = Router();
const todoService = new TodoService();
const userService = new UserService();

router.get('/todos', async function (req, res) {
  const urlDefault = 'https://jsonplaceholder.typicode.com';
  const errors: Array<Errors> = [];

  try {
    const tasks: Array<TaskRequest & TaskResponse> = await todoService.getTodos(
      `${urlDefault}/todos`,
    );

    const users: Array<UserRequest> = await userService.getUsers(
      `${urlDefault}/users`,
    );

    if (!tasks) errors.push({ message: "Couldn't get tasks" });
    if (!users) errors.push({ message: "Couldn't get users" });

    if (errors.length > 0) throw errors;

    res.send(returnFilteredTasks(tasks, users)).status(200);
  } catch (e) {
    res.send(e).status(404);
  }
});

export default router;
