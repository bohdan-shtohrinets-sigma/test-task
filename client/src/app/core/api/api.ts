import { AxiosRequestConfig } from 'axios';

import AxiosRequestService from '../../utils/api/request-service/axios-request-service';
import { ApiService } from '../../utils/api/api-service';

const api: AxiosRequestConfig = {
  baseURL: 'http://localhost:4000',
};

export default new ApiService(new AxiosRequestService(api));
