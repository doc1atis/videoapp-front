import { NEW_VIDEO } from "../actionTypes/actionTypes";
const initialState = {
  videoLink: null,
  playVideo: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_VIDEO:
      return { ...state, videoLink: action.payload, playVideo: true };

    default:
      return state;
  }
}
