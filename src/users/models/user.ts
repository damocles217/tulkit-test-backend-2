import { Task } from './task';

export class UserResponse {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  tasks: Array<Task>;
}

export class UserRequest {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  address: { any: any };
  website: string;
  company: { any: any };
}
