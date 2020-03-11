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

      return {
        ...state,
        posts
      };

    case actionTypes.DELETE_COMMENT:
      let postIndex2 = state.posts.findIndex(x => x._id == action.payload.post);
      let stateCopy2 = { ...state };
      let posts2 = [...stateCopy2.posts];

      posts2[postIndex2].comments = stateCopy2.posts[
        postIndex2
      ].comments.filter(x => x._id !== action.payload._id);

      return {
        ...state,
        posts: posts2
      };

    case actionTypes.LIKE_COMMENT:
      let postIndex5 = state.posts.findIndex(x => x._id == action.payload.post);

      let stateCopy5 = { ...state };
      let posts5 = [...stateCopy5.posts];

      let commentIdx = posts5[postIndex5].comments.findIndex(
        x => x._id == action.payload._id
      );

      posts5[postIndex5].comments[commentIdx] = action.payload;

      return {
        ...state,
        posts: posts5
      };

    case actionTypes.DISLIKE_COMMENT:
      let postIndex6 = state.posts.findIndex(x => x._id == action.payload.post);

      let stateCopy6 = { ...state };
      let posts6 = [...stateCopy6.posts];

      let commentIdx2 = posts6[postIndex6].comments.findIndex(
        x => x._id == action.payload._id
      );

      posts6[postIndex6].comments[commentIdx2] = action.payload;

      return {
        ...state,
        posts: posts6
      };

    case actionTypes.LIKE_POST:
      let postIndex3 = state.posts.findIndex(x => x._id == action.payload._id);

      let stateCopy3 = { ...state };
      let posts3 = [...stateCopy3.posts];

      posts3[postIndex3] = action.payload;

      return {
        ...state,
        posts: posts3
      };

    case actionTypes.DISLIKE_POST:
      let postIndex4 = state.posts.findIndex(x => x._id == action.payload._id);

      let stateCopy4 = { ...state };
      let posts4 = [...stateCopy4.posts];

      posts4[postIndex4] = action.payload;

      return {
        ...state,
        posts: posts4
      };

    // case actionTypes.DISLIKE_POST:
    //   let postIndex4 = state.posts.findIndex(x => x._id == action.payload._id);

    //   let stateCopy4 = { ...state };
    //   let posts4 = [...stateCopy4.posts];

    //   posts4[postIndex4] = action.payload;

    //   return {
    //     ...state,
    //     posts: posts4
    //   };

    default:
      return state;
  }
}
