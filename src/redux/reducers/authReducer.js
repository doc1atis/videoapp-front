import * as actionTypes from "../actionTypes/actionTypes";
const initialState = { isAuth: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER:
      return { ...state, isAuth: action.payload };

    case actionTypes.GET_USER:
      return { ...state, isAuth: action.payload };

    default:
      return state;
  }
}
