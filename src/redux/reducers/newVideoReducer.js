import { NEW_VIDEO } from "../actionTypes/actionTypes";

// let data = await getMostPopularVideos();
// `https://www.youtube.com/watch?v=EAezax2ugQU`
const initialState = {
  videoLink: "",
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
