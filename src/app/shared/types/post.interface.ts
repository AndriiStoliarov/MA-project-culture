export interface Post {
  id: number;
  title: string;
  body: string;
  starts_at?: number;
  location?: string;
  category_id: number;
  image_url?: string;
  requests: [
    {
      id: number,
      description: string
    },
    {
      id: number,
      description: string
    }
  ];
}
