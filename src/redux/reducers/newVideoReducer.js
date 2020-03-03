const initialState = { videoLink: null };
export default function(state = initialState, action) {
  switch (action.type) {
    case "NEW_VIDEO":
      return { ...state, videoLink: action.payload };

    default:
      return state;
  }
}
