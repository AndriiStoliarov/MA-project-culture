import { Category } from './category.interface';
import { Requirement } from './requirement.interface';

export interface Post {
  id: number;
  title: string;
  body: string;
  starts_at: number;
  location?: string;
  category_id: number;
  category: Category;
  image_url?: string;
  requests: Requirement[];
  user_id?: number;
  status?: string;
}



