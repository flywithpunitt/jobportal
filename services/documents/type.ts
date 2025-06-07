export interface getDocResponse {
    data?: (DataEntity)[] | null;
    count: number;
  }
  export interface DataEntity {
    document: string;
    title: string;
  }
  