import { User } from '../entities';

export interface AuthResponse {
  token: string;
  user: User;
}
