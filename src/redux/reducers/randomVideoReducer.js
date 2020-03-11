import { RANDOM_VIDEO } from "../actionTypes/actionTypes";

const initialState = { video: {} };

export default function(state = initialState, action) {
  switch (action.type) {
    case RANDOM_VIDEO:
      return { ...state, video: action.payload };

    default:
      return state;
  }
}
