import * as actionTypes from "../actionTypes/actionTypes";
import { register, getUser, login } from "../../axios";

export const Register = data => {
  return async dispatch => {
    try {
      let response = await register(data);
      localStorage.setItem("token", response.data.token);

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

export const Login = data => {
  return async dispatch => {
    try {
      let response = await login(data);
      localStorage.setItem("token", response.data.token);

      dispatch({
        type: actionTypes.LOGIN,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const Logout = () => ({
  type: actionTypes.LOGOUT
});
