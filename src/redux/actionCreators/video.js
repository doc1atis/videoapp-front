import {
  NEW_VIDEO,
  SHOW_FIRST_VIDEO,
  SEARCH_VIDEO
} from "../actionTypes/actionTypes";
export const newVideo = function(videoLink) {
  return {
    type: NEW_VIDEO,
    payload: videoLink
  };
};
export const showFirstVideo = function(videoLink) {
  console.log("the action called");
  return { type: SHOW_FIRST_VIDEO, payload: videoLink };
};

export const searchVideo = function(videos) {
  return { type: SEARCH_VIDEO, payload: videos };
};
