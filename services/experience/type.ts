export interface createExpRequest {
    position: string;
    company_name: string;
    duration: string;
    job_responsibility: string;
  }
  
  export interface getExpResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    id: string;
    candidate_id: string;
    position: string;
    company_name: string;
    duration: string;
    job_responsibility: string;
    created_at: string;
    updated_at: string;
  }
  