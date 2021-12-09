import ngertiApi from "../../../api/endpoints";
import { refreshAccessToken } from "../auth/thunks";

import {
  setPost
} from "../forum"

export const related_post = ({mapel}) => {
  return (dispatch) => {
    console.log("related_post", mapel)
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .related_post(mapel)
          .then((res) => {
            dispatch(setPost(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const create_post = ({topik, isi, pengirim, parent, mapel}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .create_post(topik, isi, pengirim, parent, mapel)
          .then((res) => {
            window.location.assign("/materi/");
          })
          .catch(() => console.log("error"))
      })
    )
  }
}