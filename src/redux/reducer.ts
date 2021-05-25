import tabReducer from "@/appReducer";
import wantReducer from "@/pages/wants/reducer";
import { combineReducers } from "redux";


export default combineReducers({
  tabReducer,
  wantReducer
})