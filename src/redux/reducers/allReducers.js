import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import newVideoReducer from "./newVideoReducer";
import showFirstVideoReducer from "./showFirstVideoReducer";
import searchVideoReducer from "./searchVideoReducer";
import randomVideoReducer from "./randomVideoReducer";
import relatedVideoReducer from "./relatedVideoReducer";

export default combineReducers({
  newVideoReducer,
  showFirstVideoReducer,
  searchVideoReducer,
  authReducer,
  postReducer,
  randomVideoReducer,
  relatedVideoReducer
});
