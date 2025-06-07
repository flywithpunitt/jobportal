export interface createSkillrequest {
    skill: string;
  }

  export interface getSkillsResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    id: string;
    candidate_id: string;
    skill_name: string;
    created_at: string;
  }
  
  