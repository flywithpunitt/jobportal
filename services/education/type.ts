export interface createEducationRequest {
    degree: string;
    university: string;
    duration: string;
    project: string;
    bio: string;
  }

  export interface getEducationResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    id: string;
    candidate_id: string;
    degree: string;
    university: string;
    duration: string;
    project: string;
    bio: string;
    created_at: string;
    updated_at: string;
  }
  
  