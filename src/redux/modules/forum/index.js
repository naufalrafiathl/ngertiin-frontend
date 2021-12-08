import { createSlice } from "@reduxjs/toolkit";

const forum = createSlice({
    name: "forum",
    initialState: {
      mapel: undefined
    },
    reducers: {
      setMapel(state, { payload }) {
        state.mapel = payload;
        return state;
      },
    },
  });
  
  export const {
      setMapel
  } = forum.actions;
  
  export default forum.reducer;