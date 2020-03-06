import * as actionTypes from "../actionTypes/actionTypes";
import { createPost } from "../../axios";

export const CreatePost = data => {
  return async dispatch => {
    try {
      console.log(data)
      let response = await createPost(data);
      console.log(response.data)

      dispatch({
        type: actionTypes.CREATE_POST,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
