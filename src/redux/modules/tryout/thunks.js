import ngertiApi from "../../../api/endpoints";
import { refreshAccessToken } from "../auth/thunks";

import {
    setTryOut,
    setAllTryOut,
    setid
} from "../tryout"

export const get_all_tryout = ({}) => {
    return (dispatch) => {
      dispatch(
        refreshAccessToken(() => {
          ngertiApi.tryout
            .get_all_tryout()
            .then((res) => {
              dispatch(setAllTryOut(res.data))
            })
            .catch(() => console.log("error"))
        })
      )
    }
}

export const get_tryout = ({id}) => {
    return (dispatch) => {
      dispatch(
        refreshAccessToken(() => {
          ngertiApi.tryout
            .get_tryout(id)
            .then((res) => {
              dispatch(setTryOut(res.data))
            })
            .catch(() => console.log("error"))
        })
      )
    }
}

export const create_tryout = ({paket_try_out, file_soal, durasi_pengerjaan}) => {
    return (dispatch) => {
      dispatch(
        refreshAccessToken(() => {
          ngertiApi.tryout
            .create_tryout(paket_try_out, file_soal, durasi_pengerjaan)
            .then((res) => {
              dispatch(get_tryout(res.data))
            })
            .catch(() => console.log("error"))
        })
      )
    }
}

export const update_tryout = ({id, paket_try_out, file_soal, durasi_pengerjaan}) => {
    return (dispatch) => {
      dispatch(
        refreshAccessToken(() => {
          ngertiApi.tryout
            .update_tryout(id, paket_try_out, file_soal, durasi_pengerjaan)
            .then((res) => {
              dispatch(get_tryout(res.data))
            })
            .catch(() => console.log("error"))
        })
      )
    }
}

export const delete_paket = ({id}) => {
    return (dispatch) => {
      dispatch(
        refreshAccessToken(() => {
          ngertiApi.tryout
            .delete_tryout(id)
            .then((res) => {
              dispatch(get_tryout(res.data))
            })
            .catch(() => console.log("error"))
        })
      )
    }
}