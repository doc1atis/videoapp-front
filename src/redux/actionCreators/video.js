import {
  NEW_VIDEO,
  SHOW_FIRST_VIDEO,
  SEARCH_VIDEO,
  RANDOM_VIDEO,
  RELATED_VIDEOS
} from "../actionTypes/actionTypes";
import _ from "lodash";
import Axios from "axios";

export const newVideo = function(video) {
  return {
    type: NEW_VIDEO,
    payload: video
  };
};

export const showFirstVideo = function(videoLink) {
  return { type: SHOW_FIRST_VIDEO, payload: videoLink };
};

export const searchVideo = function(videos) {
  return { type: SEARCH_VIDEO, payload: videos };
};

export const randomVideo = () => async dispatch => {
  try {
    const response = await Axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "US",
          maxResults: 50,
          key: process.env.REACT_APP_API_KEY
        }
      }
    );

    dispatch({
      type: RANDOM_VIDEO,
      payload: response.data.items[_.random(0, 49)]
    });
  } catch (error) {
    console.dir(error);
  }
};
export const relatedVideos = videoId => {
  return async dispatch => {
    try {
      const response = await Axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            relatedToVideoId: videoId,
            type: "video",
            maxResults: 7,
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
