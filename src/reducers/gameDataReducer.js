import { merge } from 'lodash';

import { RECEIVE_GAME_DATA } from "../actions/gameDataActions";
import { calculateProgress } from '../utils/gameDataUtil';

const gameDataReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_GAME_DATA:
      newState = merge(newState, oldState, action.payload.gameData);
      break;
    default:
      newState = merge(newState, oldState);
  }
  newState = calculateProgress(newState);
  return newState;
};

export default gameDataReducer;
