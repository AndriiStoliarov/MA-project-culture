import { UserResponse } from './user-response.interface';

export interface AuthResponse {
  token: string;
  user: UserResponse;
}
