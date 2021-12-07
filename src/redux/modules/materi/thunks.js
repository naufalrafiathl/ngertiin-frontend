import ngertiApi from "../../../api/endpoints";
import { refreshAccessToken } from "../auth/thunks";

import {
  setMapel, setModul
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
    console.log("related_modul", mapel)
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