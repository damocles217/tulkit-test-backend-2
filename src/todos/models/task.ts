import { UserForTask } from './user';

export class TaskRequest {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class TaskResponse {
  id: number;
  title: string;
  completed: boolean;
  user: UserForTask;
}
