import ngertiApi from "../../../api/endpoints";
import { refreshAccessToken } from "../auth/thunks";

import {
  setMapel
} from "../forum"

export const related_post = ({mapel}) => {
  return (dispatch) => {
    console.log("related_post", mapel)
    dispatch(
      refreshAccessToken(() => {
        ngertiApi.forum
          .related_post(mapel)
          .then((res) => {
            dispatch(setMapel(res.data))
          })
          .catch(() => console.log("error"))
      })
    )
  }
}