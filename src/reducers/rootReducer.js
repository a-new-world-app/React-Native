import { combineReducers } from "redux";

import session from "./sessionReducer";
import { LOG_OUT } from "../actions/sessionActions";

const rootReducer = combineReducers({
  session
});

export default (state, action) => {
  console.log(action);
  console.log(state);
  if (action.type === LOG_OUT) {
    state = undefined;
  }
  console.log(rootReducer(state, action));
  return rootReducer(state, action);
};
