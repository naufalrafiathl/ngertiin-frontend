import { createSlice } from "@reduxjs/toolkit";

const materi = createSlice({
    name: "materi",
    initialState: {
      mapel: undefined,
      modul: undefined
    },
    reducers: {
      setMapel(state, { payload }) {
        state.mapel = payload;
        return state;
      },
      setModul(state, { payload }) {
        state.modul = payload;
        return state;
      },
    },
  });
  
  export const {
      setMapel,
      setModul
  } = materi.actions;
  
  export default materi.reducer;