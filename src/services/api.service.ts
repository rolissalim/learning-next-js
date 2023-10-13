import axios from 'axios';
import { pick, replace } from 'lodash';

const requestApi = (responseFields: any = null, baseUrl = undefined, token = false) => {
  let sourceRequest: any = {};

  /** CREATE AXIOS INSTANCE */
  const axiosInstance = axios.create({
    baseURL: baseUrl ? baseUrl : process.env.API_BASE_URL,
  });

  /** HANDLE AXIOS REQUEST */
  axiosInstance.interceptors.request.use(async (config: any) => {
    return config;
  });

  axiosInstance.interceptors.request.use((request: any) => {
    // // If the application exists cancel
    if (sourceRequest[request.url]) {
      sourceRequest[request.url].cancel('Automatic cancellation');
    }

    return request;
  });

  /** HANDLE AXIOS RESPONSE */
  axiosInstance.interceptors.response.use(
    (resp) => {
      if (responseFields) return pick(resp, responseFields);
      return resp?.data;
    },
    async (error) => {
      const originalConfig = error.config;
      if (
        originalConfig?.url !== process.env.API_MAIN_SERVICE + '/auth/login' &&
        error.response
      ) {
        // Access Token was expired
      
      }

      return Promise.reject(error);
    }
  );
  return axiosInstance;
};


export default requestApi;
