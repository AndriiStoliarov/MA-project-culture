export interface Event {
  title: string;
  category: string;
  description: string;
  requirement: string;
  starts_at?: string;
  place?: string;
  file?: File;
}
