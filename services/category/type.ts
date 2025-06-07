export interface jobCategoryResponse {
  messages: string;
  data?: DataEntity[] | null;
  count: number;
}
export interface DataEntity {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by?: null;
  status: string;
  totalListing: string;
}
