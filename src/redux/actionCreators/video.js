import {
  NEW_VIDEO,
  SHOW_FIRST_VIDEO,
  SEARCH_VIDEO,
  RANDOM_VIDEO,
  RELATED_VIDEOS
} from "../actionTypes/actionTypes";
import _ from "lodash";
import Axios from "axios";
export const newVideo = function(videoLink) {
  return {
    type: NEW_VIDEO,
    payload: videoLink
  };
};
export const showFirstVideo = function(videoLink) {
  return { type: SHOW_FIRST_VIDEO, payload: videoLink };
};

export const searchVideo = function(videos) {
  return { type: SEARCH_VIDEO, payload: videos };
};
export const randomVideo = () => async (dispatch, getState) => {
  try {
    const response = await Axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "US",
          maxResults: 5,
          key: process.env.REACT_APP_API_KEY
        }
      }
    );

    dispatch({
      type: RANDOM_VIDEO,
      payload: response.data.items[_.random(0, 4)]
    });
  } catch (error) {
    console.dir(error);
  }
};
export const relatedVideos = watchedVidId => {
  console.log("realted video action creator runs olgy");
  return async dispatch => {
    try {
      const response = await Axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            relatedToVideoId: watchedVidId,
            type: "video",
            maxResults: 5,
            key: process.env.REACT_APP_API_KEY
          }
        }
      );

      dispatch({ type: RELATED_VIDEOS, payload: response.data.items });
    } catch (error) {
      console.dir(error);
    }
  };
};
