import axios from "axios";
// import Cookies from "js-cookie";

// const nameFromCookie = Cookies.get("Token");
// console.log(nameFromCookie);
// process.env.REACT_APP_BASE_URL

// const baseURL = "http://just-visit.herokuapp.com/";

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
