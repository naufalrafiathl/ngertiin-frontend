import ngertiApi from "../../../api/endpoints";
import { refreshAccessToken } from "../auth/thunks";

import {
  setMapel, setModul, setMateri
} from "../materi"

export const related_mapel = ({jurusan}) => {
    return (dispatch) => {
      dispatch(
        refreshAccessToken(() => {
          ngertiApi.materi
            .related_mapel(jurusan)
            .then((res) => {
              dispatch(setMapel(res.data))
            })
            .catch(() => console.log("error"))
        })
      )
    }
  }

export const related_modul = ({mapel}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.materi
          .related_modul(mapel)
          .then((res) => {
            dispatch(setModul(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const get_materi = ({materi_id}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.materi
          .get_materi(materi_id)
          .then((res) => {
            console.log(res.data)
            dispatch(setMateri(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const get_try_out = ({try_out_id}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.try_out
          .get_try_out(materi_id)
          .then((res) => {
            console.log(res.data)
            dispatch(setMateri(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const create_try_out = ({
  try_out_id,
  materi,
  jawaban
}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.try_out
          .get_try_out(materi_id)
          .then((res) => {
            console.log(res.data)
            dispatch(setMateri(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}