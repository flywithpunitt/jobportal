export interface blogResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    metaTitle: string;
    metaDescription: string;
    metaKeyword: string;
    tags: string;
    status: string;
    cover: string;
    created_by: string;
    updated_by?: string | null;
    created_at: string;
    updated_at: string;
  }
  