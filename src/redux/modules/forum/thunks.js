import ngertiApi from "../../../api/endpoints";
import { refreshAccessToken } from "../auth/thunks";

import {
  setPosts, setPost
} from "../forum"

export const related_post = ({mapel}) => {
  return (dispatch) => {
    console.log("related_post", mapel)
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .related_post(mapel)
          .then((res) => {
            dispatch(setPosts(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const create_post = ({topik, isi, pengirim, parent, mapel, nama_mapel}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .create_post(topik, isi, pengirim, parent, mapel)
          .then((res) => {
            window.location.assign(`/materi/${nama_mapel}/forum`)
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const delete_post = ({id, nama_mapel}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .delete_post(id)
          .then((res) => {
            window.location.assign(`/materi/${nama_mapel}/forum`)
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const update_post = ({id, topik, isi, pengirim, parent, mapel, nama_mapel}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .update_post(id, topik, isi, pengirim, parent, mapel)
          .then((res) => {
            window.location.assign(`/materi/${nama_mapel}/forum`)
          })
          .catch(() => console.log("error"))
      })
    )
  }
}

export const get_post = ({id}) => {
  return (dispatch) => {
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .get_post(id)
          .then((res) => {
            dispatch(setPost(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}