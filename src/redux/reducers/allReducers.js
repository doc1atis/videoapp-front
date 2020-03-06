import { combineReducers } from "redux";
import newVideoReducer from "./newVideoReducer";
import authReducer from "./authReducer";
import showFirstVideoReducer from "./showFirstVideoReducer";
import searchVideoReducer from "./searchVideoReducer";
import randomVideoReducer from "./randomVideoReducer";
import relatedVideoReducer from "./relatedVideoReducer";
export default combineReducers({
  newVideoReducer,
  showFirstVideoReducer,
  searchVideoReducer,
  authReducer,
  randomVideoReducer,
  relatedVideoReducer
});
