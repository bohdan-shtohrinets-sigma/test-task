export default abstract class RequestService {
  abstract get<T>(url: string, config?: unknown): Promise<T>;

  abstract post<T>(url: string, data?: Record<string, unknown>, config?: unknown): Promise<T>;

  abstract put<T>(url: string, data?: Record<string, unknown>, config?: unknown): Promise<T>;

  abstract patch<T>(url: string, data?: Record<string, unknown>, config?: unknown): Promise<T>;

  abstract delete<T>(url: string, config?: unknown): Promise<T>;
}
