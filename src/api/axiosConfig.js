// apiConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsearch.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'f0b25b643dmsh6028a9730ba6fcep19ad0cjsn99a748f3e73f',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com',
  },
});

// 🔄 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response.status);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.status || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
