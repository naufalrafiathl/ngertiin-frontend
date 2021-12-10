import constant from "../constant";
import axios from "axios";

const { API_BASE_URL } = constant;

const forum = {
    related_post: (mapel) =>
        axios.get(`${API_BASE_URL}/belajar/mapel/${mapel}/get_related_post/`),
    create_post: (topik, isi, pengirim, parent, mapel) => 
        axios.post(`${API_BASE_URL}/forum/post/`, {
            topik: topik,
            isi: isi, 
            pengirim: pengirim,
            parent_post: parent,
            mata_pelajaran: mapel
        }),
    get_post: (id) => 
        axios.get(`${API_BASE_URL}/forum/post/${id}/`),
    update_post: (id, topik, isi, pengirim, parent, mapel) =>
        axios.put(`${API_BASE_URL}/forum/post/${id}/`, {
            topik: topik,
            isi: isi, 
            pengirim: pengirim,
            parent: parent,
            mapel: mapel
        }),
    delete_post: (id) =>
        axios.delete(`${API_BASE_URL}/forum/post/${id}/`),
}

export default forum;
