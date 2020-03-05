import * as actionTypes from "../actionTypes/actionTypes";
import { register, getUser } from "../../axios";

export const Register = data => {
  return async dispatch => {
    try {
      let response = await register(data);

      dispatch({
        type: actionTypes.REGISTER,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetUser = () => {
  return async dispatch => {
    try {
      let response = await getUser();

      dispatch({
        type: actionTypes.GET_USER,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
