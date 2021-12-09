import { createSlice } from "@reduxjs/toolkit";

const to = createSlice({
    name: "tryout",
    initialState: {
        tryout: undefined,
        all_tryout: undefined,
        id_temp: undefined
    },
    reducers: {
      setTryOut(state, { payload }) {
        state.tryout = payload;
        return state;
      },
      setAllTryOut(state, { payload }) {
        state.all_tryout = payload;
        return state;
      },
      setid(state, { payload }) {
        state.id_temp = payload;
        return state;
      }
    },
  });
  
  export const {
      setTryOut,
      setAllTryOut,
      setid
  } = to.actions;
  
  export default to.reducer;