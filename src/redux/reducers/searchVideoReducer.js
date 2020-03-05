import { SEARCH_VIDEO } from "../actionTypes/actionTypes";
const initialState = { videos: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_VIDEO:
      return { ...state, videos: action.payload };

    default:
      return state;
  }
}
