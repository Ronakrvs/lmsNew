import axios from 'axios';

export const httpClient = axios.create({
  // baseURL: `http://localhost:4001/api`, //YOUR_API_URL HERE
  baseURL: `http://15.206.144.233:5000/api`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin':'*',
        // credentials: 'include',
        // 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
        // 'Access-Control-Allow-Credentials':true,
  },
});
