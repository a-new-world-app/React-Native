import { merge } from 'lodash';

import { RECEIVE_GAME_DATA } from "../actions/gameDataActions";
import { calculateProgress } from '../utils/gameDataUtil';

const defaultState = {
  robots: {
    1: {
      waiting: 0,
      build: 1,
      explore: 1,
    }
  },
  build: {
    robot: 1,
    progress: 99,
    needed: 100,
    lastCheck: 1527621031493,
  },
  gather: [],
  resources: {
    iron: 0,
    copper: 0,
    aluminum: 0,
    gold: 0,
    titanium: 0,
  },
  explore: {
    lastCheck: 1527621031493
  }
};

const gameDataReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  console.log('gdr', oldState, newState);
  switch (action.type) {
    case RECEIVE_GAME_DATA:
      newState = merge(newState, action.payload.gameData);
      break;
    default:
  }
  newState = calculateProgress(newState);
  console.log('newState', newState);
  return newState;
};

export default gameDataReducer;
