import axios from 'axios';

const http = axios.create({
  baseURL: 'test'
});

export default http;

