import constant from "../constant";
import axios from "axios";

const { API_BASE_URL } = constant;

const auth = {
  login: (username, password) =>
    axios.post(`${API_BASE_URL}/auth/login`, {
      username: username,
      password: password,
    }),
  register: (email, username, password, jurusan, first_name, last_name, no_hp) => axios.post(`${API_BASE_URL}/auth/register/`, {
    email: email,
    username: username,
    password: password,
    jurusan: jurusan,
    first_name: first_name,
    last_name: last_name,
    no_hp: no_hp,
  }),
  verifyToken: (token) =>
    axios.post(`${API_BASE_URL}/auth/token/verify/`, {
      token: token,
    }),
  refreshToken: (refreshToken) =>
    axios.post(`${API_BASE_URL}/auth/token/refresh/`, {
      refresh: refreshToken,
    }),
  // Get All Users
  getAllUsers: (queryParams) =>
    axios.get(`${API_BASE_URL}/users/${queryParams}`),
  // get Single User
  getSingleUser: (id) => axios.get(`${API_BASE_URL}/users/${id}/`),
};

export default auth;
