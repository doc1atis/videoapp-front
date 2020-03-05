import * as actionTypes from "../actionTypes/actionTypes";
const initialState = { isAuth: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER:
      return { ...state, isAuth: action.payload.user };

    case actionTypes.GET_USER:
      return { ...state, isAuth: action.payload };

    case actionTypes.LOGIN:
      return { ...state, isAuth: action.payload.user };

    case actionTypes.LOGOUT:
      return { ...state, isAuth: null };

    default:
      return state;
  }
}
