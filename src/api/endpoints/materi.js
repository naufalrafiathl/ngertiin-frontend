import constant from "../constant";
import axios from "axios";

const { API_BASE_URL } = constant;

const materi = {
  related_mapel: (jurusan) =>
    axios.get(`${API_BASE_URL}/belajar/jurusan/${jurusan}/`),
  related_modul: (mapel) => 
    axios.get(`${API_BASE_URL}/belajar/mapel/${mapel}/`),
  related_soal: (materi_kuis) => 
    axios.get(`${API_BASE_URL}/belajar/materi/${materi_kuis}/`),
  get_materi: (materi_id) => 
    axios.get(`${API_BASE_URL}/belajar/materi/${materi_id}/`),
}

export default materi;
