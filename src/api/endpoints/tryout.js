import constant from "../constant";
import axios from "axios";

const { API_BASE_URL } = constant;

const tryout = {
    create_tryout: (paket_try_out, file_soal, durasi_pengerjaan) => 
        axios.post(`${API_BASE_URL}/to/tryout/`, {
            paket_try_out : paket_try_out,
            file_soal : file_soal,
            durasi_pengerjaan : durasi_pengerjaan
        }),
    get_tryout: (id) => 
        axios.get(`${API_BASE_URL}/to/tryout/${id}/`),
    get_all_tryout: () => 
        axios.get(`${API_BASE_URL}/to/tryout/`),
    update_tryout: (id, paket_try_out, file_soal, durasi_pengerjaan) =>
        axios.put(`${API_BASE_URL}/to/tryout/${id}/`, {
            paket_try_out : paket_try_out,
            file_soal : file_soal,
            durasi_pengerjaan : durasi_pengerjaan
        }),
    delete_paket: (id) =>
        axios.put(`${API_BASE_URL}/to/tryout/${id}/`),
}

export default tryout;