import RequestService from './request-service/request-service';
import { ApiResponse, RequestConfig } from '../../core/api/api.types';

export class ApiService {
  private requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  get = async <R>(url: string, config?: RequestConfig): Promise<R> => {
    try {
      const response = await this.requestService.get<ApiResponse<R>>(url, config);
      return this.onResponseSuccess<R>(response);
    } catch (error) {
      return this.onResponseFailure<R>(error);
    }
  };

  post = async <R>(
    url: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<R> => {
    try {
      const response = await this.requestService.post<ApiResponse<R>>(url, data, config);
      return this.onResponseSuccess<R>(response);
    } catch (error) {
      return this.onResponseFailure<R>(error);
    }
  };

  put = async <R>(
    url: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<R> => {
    try {
      const response = await this.requestService.put<ApiResponse<R>>(url, data, config);
      return this.onResponseSuccess<R>(response);
    } catch (error) {
      return this.onResponseFailure<R>(error);
    }
  };

  patch = async <R>(
    url: string,
    data?: Record<string, unknown>,
    config?: RequestConfig,
  ): Promise<R> => {
    try {
      const response = await this.requestService.patch<ApiResponse<R>>(url, data, config);
      return this.onResponseSuccess<R>(response);
    } catch (error) {
      return this.onResponseFailure<R>(error);
    }
  };

  delete = async <R>(url: string, config?: RequestConfig): Promise<R> => {
    try {
      const response = await this.requestService.delete<ApiResponse<R>>(url, config);
      return this.onResponseSuccess<R>(response);
    } catch (error) {
      return this.onResponseFailure<R>(error);
    }
  };

  private onResponseSuccess = <R>(response: ApiResponse<R>): R => response.data;

  private onResponseFailure = <R>(response: ApiResponse<R>): Promise<R> => {
    return Promise.reject(response);
  };
}
