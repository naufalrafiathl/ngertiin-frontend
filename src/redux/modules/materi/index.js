import { createSlice } from "@reduxjs/toolkit";

const materi = createSlice({
    name: "jurusan",
    initialState: {
      mapel: undefined,
      modul: undefined,
      materi_kuis: undefined,
      materi: undefined
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
      },
      setMateri(state, { payload }) {
        state.materi = payload;
        return state;
      },
    },
  });
  
  export const {
      setMapel,
      setModul,
      setMateriKuis,
      setMateri
  } = materi.actions;
  
  export default materi.reducer;