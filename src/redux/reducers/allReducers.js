import { combineReducers } from "redux";
import newVideoReducer from "./newVideoReducer";
import authReducer from "./authReducer";
export default combineReducers({ newVideoReducer, authReducer });
