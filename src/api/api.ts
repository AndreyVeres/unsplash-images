import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  headers: {
    'Cache-Control': 'no-cache',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log('request error:', error);
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(undefined, function (error) {
  if (error.response?.status === 401) {
    localStorage.removeItem('token');
  }
  console.log('response error:', error);
  return Promise.reject(error);
});
