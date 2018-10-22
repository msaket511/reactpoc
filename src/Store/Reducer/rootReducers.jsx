import signInReducer from "./signInReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  signIn: signInReducer,
  user: userReducer
});

export default rootReducer;
