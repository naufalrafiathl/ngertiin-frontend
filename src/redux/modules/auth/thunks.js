// api
import ngertiApi from "../../../api/endpoints";
import { setAuthToken } from "../../../api/http";

// actions
import {
  setToken,
  setRefreshToken,
  setStudent,
  setErrorMessage,
  clearMessages,
} from "../auth";

// utils
// import { queryParamsFormatter } from "../../../utils/funcs";

// jwt
import jwt_decode from "jwt-decode";

// store
import { persistor } from "../../store";

// redux
// import { toastr } from "react-redux-toastr";

export const login = (username, password) => {
  return (dispatch, _getState) => {
    ngertiApi.auth
      .login(username, password)
      .then((res) => {
        const { data } = res;
        const { access, refresh, student_detail } = data;
        dispatch(setToken(access));
        setAuthToken();
        dispatch(setRefreshToken(refresh));
        dispatch(setStudent(student_detail));
        dispatch(clearErrorMessage());
        window.location.assign("/");
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          console.log("Invalid username/password");
        }
      });
  };
};

export const register = (username, password, email, jurusan) => {
  return (dispatch, _getState) => {
    ngertiApi.auth
      .register(username, password, email, jurusan)
      .then((res) => {
        // const { data } = res;
        dispatch(login(username, password));
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          console.log("Invalid username/password");
        }
      });
  };
};

export const refreshAccessToken = (func) => {
  return (dispatch, _getState) => {
    dispatch(clearMessages());
    const token = _getState().auth.token;
    const refreshToken = _getState().auth.refreshToken;
    if (token) {
      const payload = jwt_decode(token);
      const now = Date.now() / 1000;
      const tokenLifeTime = (payload.exp - now) / 60;
      if (tokenLifeTime <= 5) {
        ngertiApi.auth
          .refreshToken(refreshToken)
          .then((res) => {
            dispatch(setToken(res.data.access));
            setAuthToken();
            func && func();
          })
          .catch(() => {
            logout();
          });
      } else {
        setAuthToken();
        func && func();
      }
    } else logout();
  };
};

export const logout = () => {
  persistor.purge();
  window.location.assign("/");
};

export const clearErrorMessage = () => {
  return (dispatch) => {
    dispatch(setErrorMessage(""));
  };
};
