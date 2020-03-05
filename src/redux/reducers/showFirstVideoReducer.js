import { SHOW_FIRST_VIDEO } from "../actionTypes/actionTypes";
const initialState = { videoLink: null };
export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_FIRST_VIDEO:
      return { ...state, videoLink: action.payload, playVideo: false };

    default:
      return state;
  }
}
