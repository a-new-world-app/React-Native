import { RECEIVE_PATH, CLEAR_PATH } from "../actions/pathActions";

const pathReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PATH:
      return action.payload.pathData.path;
    case CLEAR_PATH:
      return {};
    default:
      return oldState;
  }
};

export default pathReducer;
