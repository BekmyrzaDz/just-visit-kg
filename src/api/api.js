import axios from "axios";
import { postToken } from "../redux/reducer";
import Cookies from "js-cookie";

// const { access_token } = postToken();
const token = postToken();
console.log(postToken());

// console.log(access_token);
console.log(token);

const nameFromCookie = Cookies.get("Token");
console.log(nameFromCookie);

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorisation: `Bearer ${nameFromCookie}`,
  },
});

// api.interceptors.request.use(
//   (request) => {
//     request.headers = {
//       Authorisation: `Bearer ${access_token}`,
//     };
//     return request;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
