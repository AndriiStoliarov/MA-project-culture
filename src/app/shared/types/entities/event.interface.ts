export interface Event {
  title: string;
  body: string;
  category_id: number;
  starts_at: string;
  location?: string;
  requests_attributes: string;
  image?: File;
}
