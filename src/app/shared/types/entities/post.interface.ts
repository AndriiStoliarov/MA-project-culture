import { Requirement } from './requirement.interface';

export interface Post {
  id: number;
  title: string;
  body: string;
  starts_at: number;
  location?: string;
  category_id: number;
  image_url?: string;
  requests: Requirement[];
  user_id?: number;
  status?: string;
}



