export interface notificationResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    id: string;
    user_id: string;
    user_type: string;
    title: string;
    content: string;
    image?: null;
    created_at: string;
    updated_at: string;
    created_by?: null;
    status: string;
  }
  