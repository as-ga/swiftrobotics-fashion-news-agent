export interface News {
  title: string;
  summary: string;
  importance: string;
  source: string;
  url: string;
  category?: string;
  reason?: string;
}

export interface ApiResponse {
  statusCode: number;
  message: string;
  data: News[];
}
