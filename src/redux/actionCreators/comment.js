import * as actionTypes from "../actionTypes/actionTypes";
import { createComment, deleteComment } from "../../axios";

export const CreateComment = data => {
  return async dispatch => {
    try {
      let response = await createComment(data);

      dispatch({
        type: actionTypes.CREATE_COMMENT,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteComment = (id, postId) => {
  return async dispatch => {
    try {
      let response = await deleteComment(id, postId);

      dispatch({
        type: actionTypes.DELETE_COMMENT,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// request header not set on login
