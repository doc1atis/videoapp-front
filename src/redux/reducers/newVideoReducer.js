import { NEW_VIDEO } from "../actionTypes/actionTypes";
const initialState = {
  video: null,
  playVideo: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_VIDEO:
      return { ...state, video: action.payload, playVideo: true };

    default:
      return state;
  }
}
