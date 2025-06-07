export interface getJobResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    id: string;
    title: string;
    description: string;
    requirements: string;
    industry: string;
    location: string;
    salary_range_min: string;
    salary_range_max: string;
    deadline: string;
    created_at: string;
    updated_at: string;
    view: string;
    name: string;
    logo: string;
    website: string;
    size: string;
    category: string;
    slug: string;
    experience: string;
    job_type: string;
  }
  
  export interface getJobDetailResponse {
    id: string;
    title: string;
    description: string;
    requirements: string;
    industry: string;
    location: string;
    salary_range_min: string;
    salary_range_max: string;
    deadline: string;
    created_at: string;
    updated_at: string;
    view: string;
    name: string;
    logo: string;
    website: string;
    size: string;
    category: string;
    slug: string;
    experience: string;
    job_type: string;
  }
  