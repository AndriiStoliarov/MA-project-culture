export interface UserAuthResponse {
  token: string;
  user: {
    first_name: string;
    last_name: string;
    email: string;
    id: number;
  };
}
