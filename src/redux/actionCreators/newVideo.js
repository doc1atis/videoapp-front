import { NEW_VIDEO } from "../actionTypes/actionTypes";

export const newVideo = videoLink => {
  return {
    type: NEW_VIDEO,
    payload: videoLink
  };
};
