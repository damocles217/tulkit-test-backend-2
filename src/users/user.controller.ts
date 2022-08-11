import { Router } from 'express';
import { UserResponse } from './models/user';
import { UserService } from './user.service';
import { Errors } from '../../types/errors';

const router = Router();
const userService = new UserService();

router.get('/users', async function (req, res) {
  const errors: Array<Errors> = [];
  try {
    const usersAndTasks: Array<UserResponse> | null =
      await userService.getUsers('https://jsonplaceholder.typicode.com/users/');

    // catching the errors
    if (!usersAndTasks) errors.push({ message: "Couldn't get users" });
    if (errors.length > 0) throw errors;

    res.send(usersAndTasks).status(200);
  } catch (e) {
    res.send(e).status(404);
  }
});

export default router;
