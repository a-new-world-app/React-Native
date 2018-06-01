import { combineReducers } from "redux";

import session from "./sessionReducer";
import gameData from "./gameDataReducer";
import path from "./pathReducer";
import term from "./termReducer";
import { LOG_OUT } from "../actions/sessionActions";

const rootReducer = combineReducers({
  session,
  gameData,
  path,
  term
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
