import axios from 'axios';
import {Cookies} from "react-cookie";
const cookies = new Cookies();
      const token = cookies.get("token");
      // httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;

export const httpClient = axios.create({
  // baseURL: `http://localhost:4001/api`, //YOUR_API_URL HERE
  baseURL: `http://localhost:4002/api`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin':'*',
        // credentials: 'include',
        // 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
        // 'Access-Control-Allow-Credentials':true,
        Authorization: 'Bearer ' + token,   
  },
});
