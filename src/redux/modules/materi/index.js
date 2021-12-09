import { createSlice } from "@reduxjs/toolkit";

const materi = createSlice({
    name: "materi",
    initialState: {
      mapel: undefined,
      modul: undefined,
      materi_kuis: undefined,
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
      setMateriKuis(state, { payload }) {
        state.materi_kuis = payload;
        return state;
      },
    },
  });
  
  export const {
      setMapel,
      setModul,
      setMateriKuis
  } = materi.actions;
  
  export default materi.reducer;