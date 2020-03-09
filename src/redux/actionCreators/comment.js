import * as actionTypes from "../actionTypes/actionTypes";
import { createComment } from "../../axios";

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

// request header not set on login
