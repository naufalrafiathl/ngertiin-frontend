import axios from "axios";
import { store } from "../redux/store";

export const setAuthToken = () => {
  const token = store.getState().auth.token;
  axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "None";
};