import axios from 'axios';

const token = localStorage.getItem('token');
//console.log('Token after refresh:', token);

const DataService = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  // headers: {
  //   "Content-Type": "application/json",
  //   "X-Requested-With": "XMLHttpRequest",
  //   'Authorization': `Bearer ${token}`,
  // },
});

DataService.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default DataService;
