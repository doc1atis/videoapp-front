import { NEW_VIDEO } from "../actionTypes/actionTypes";
export default function(videoLink) {
  return {
    type: NEW_VIDEO,
    payload: videoLink
  };
}
