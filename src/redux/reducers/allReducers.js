import { combineReducers } from "redux";
import newVideoReducer from "./newVideoReducer";
import authReducer from "./authReducer";
import showFirstVideoReducer from "./showFirstVideoReducer";
import searchVideoReducer from "./searchVideoReducer";
export default combineReducers({
  newVideoReducer,
  showFirstVideoReducer,
  searchVideoReducer,
  authReducer
});
