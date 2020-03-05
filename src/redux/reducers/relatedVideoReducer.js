import { RELATED_VIDEOS } from "../actionTypes/actionTypes";
const initialState = { videos: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case RELATED_VIDEOS:
      return { ...state, videos: action.payload };

    default:
      return state;
  }
}
