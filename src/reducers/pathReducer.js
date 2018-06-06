import {merge} from 'lodash';

import {RECEIVE_PATH, CLEAR_PATH, RECEIVE_PATH_UPDATE} from "../actions/pathActions";

const pathReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let path;
  switch (action.type) {
    case RECEIVE_PATH:
      if (!action.payload) 
        return {};
      path = action.payload.pathData;
      console.log('path', path);
      // path.id = action.payload.;
      return path;
    case RECEIVE_PATH_UPDATE:
      path = action.payload.pathData;
      return path;
    case CLEAR_PATH:
      return {};
    default:
      return oldState;
  }
};

export default pathReducer;
