import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import userReducer from "./userReducer";
import { RESET_STATE } from "../types";
import rootReducer from "./commonReducer";


export default combineReducers({
  sampleData: sampleReducer,
  authUser: userReducer,
 

});


