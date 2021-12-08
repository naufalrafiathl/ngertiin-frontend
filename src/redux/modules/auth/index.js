import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    refreshToken: undefined,
    student: undefined,
    allUsers: undefined,
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    setToken(state, { payload }) {
      state.token = payload;
      return state;
    },
    setRefreshToken(state, { payload }) {
      state.refreshToken = payload;
      return state;
    },
    clearToken(state, { payload }) {
      state.token = undefined;
      state.refreshToken = undefined;
      return state;
    },
    setStudent(state, { payload }) {
      state.student = payload;
      return state;
    },
    clearStudent(state, { payload }) {
      state.student = undefined;
      return state;
    },
    setErrorMessage(state, { payload }) {
      state.successMessage = "";
      state.errorMessage = payload;
      return state;
    },
    setSuccessMessage(state, { payload }) {
      state.errorMessage = "";
      state.successMessage = payload;
      return state;
    },
    setAllUsers(state, { payload }) {
      state.allUsers = payload;
      return state;
    },
    clearMessages(state, { payload }) {
      state.successMessage = "";
      state.errorMessage = "";
      return state;
    },
  },
});

export const {
  setToken,
  clearToken,
  setStudent,
  clearStudent,
  setErrorMessage,
  setRefreshToken,
  setAllUsers,
  setSuccessMessage,
  clearMessages,
} = auth.actions;

export default auth.reducer;
