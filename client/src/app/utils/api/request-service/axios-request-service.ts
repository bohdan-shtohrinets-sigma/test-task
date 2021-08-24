import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import RequestService from './request-service';
import { RequestConfig } from '../../../core/api/api.types';

export default class AxiosRequestService extends RequestService {
  private readonly apiInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    super();
    this.apiInstance = axios.create(config);
  }

  get = <T>(url: string, config: RequestConfig): Promise<T> => this.apiInstance.get(url, config);

  post = <T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<T> => this.apiInstance.post(url, data, config);

  put = <T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> =>
    this.apiInstance.put(url, data, config);

  patch = <T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<T> => this.apiInstance.patch(url, data, config);

  delete = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    this.apiInstance.delete(url, config);

  setAuthToken = (token: string): void => {
    this.apiInstance.defaults.headers.common.Authorization = token;
  };
}
