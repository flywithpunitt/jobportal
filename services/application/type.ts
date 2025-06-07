export interface createAppRequest {
    job_listing_id: number;
    document_id: number;
  }

  export interface applicationResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    id: string;
    company_id: string;
    title: string;
    description: string;
    requirements: string;
    category: string;
    industry: string;
    location: string;
    salary_range_min: string;
    salary_range_max: string;
    deadline: string;
    experience?: null;
    status: string;
    job_type: string;
    view_count: string;
    remarks?: string | null;
    created_at: string;
    updated_at: string;
    name: string;
    document?: null;
    document_id:string
  }
  
  