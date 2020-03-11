import * as actionTypes from "../actionTypes/actionTypes";
import {
  createComment,
  deleteComment,
  likeComment,
  dislikeComment
} from "../../axios";

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

export const LikeComment = id => {
  return async dispatch => {
    try {
      let response = await likeComment(id);

      dispatch({
        type: actionTypes.LIKE_COMMENT,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DislikeComment = id => {
  return async dispatch => {
    try {
      let response = await dislikeComment(id);

      dispatch({
        type: actionTypes.DISLIKE_COMMENT,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
