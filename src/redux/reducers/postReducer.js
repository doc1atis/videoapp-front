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

    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(x => x._id !== action.payload)
      };

    case actionTypes.CREATE_COMMENT:
      let postIndex = state.posts.findIndex(x => x._id == action.payload.post);
      let stateCopy = { ...state };
      let posts = [...stateCopy.posts];

      posts[postIndex].comments = [
        ...stateCopy.posts[postIndex].comments,
        action.payload
      ];
      console.log(posts);

      return {
        ...state,
        posts: posts
      };

    default:
      return state;
  }
}
