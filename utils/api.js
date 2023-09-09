import axios from 'axios';
import {Cookies} from "react-cookie";
const cookies = new Cookies();
      const token = cookies.get("token");
      // httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;

export const httpClient = axios.create({
  // baseURL: `http://15.206.144.233:5000/api`,//YOUR_API_URL HERE
  baseURL: `http://localhost:5000/api`, //YOUR_API_URL HERE
  // baseURL: `https://backend-lms-ravibhanawat.vercel.app/api`, //YOUR_API_URL HERE
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
