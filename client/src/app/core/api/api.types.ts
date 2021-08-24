export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, unknown>;
}

export interface RequestConfig {
  params?: Record<string, string>;
  headers?: Record<string, string>;
}
