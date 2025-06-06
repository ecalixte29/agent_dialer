import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; 