import * as actionTypes from "../actionTypes/actionTypes";
const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case actionTypes.GET_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}
