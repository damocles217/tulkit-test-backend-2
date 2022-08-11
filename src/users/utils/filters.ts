import { UserRequest, UserResponse } from '../models/user';

export function returnWantedValues(user: UserRequest): UserResponse {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    phone: user.phone,
    username: user.username,
    tasks: [],
  };
}
