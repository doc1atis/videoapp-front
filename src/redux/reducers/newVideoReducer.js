import { NEW_VIDEO } from "../actionTypes/actionTypes";
import _ from "lodash";
import Axios from "axios";

async function getMostPopularVideos() {
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
    console.log(response.data.items[_.random(0, 4)]);
    return response.data.items[_.random(0, 4)];
  } catch (error) {
    console.dir(error);
  }
}

const initialState = {
  currentPlayingLink: `https://www.youtube.com/watch?v=EAezax2ugQU`
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_VIDEO:
      return { ...state, currentPlayingLink: action.payload, playVideo: true };

    default:
      return state;
  }
}
