import {merge} from 'lodash';

import {RECEIVE_GAME_DATA, RECEIVE_GATHER} from "../actions/gameDataActions";
import {calculateProgress} from '../utils/gameDataUtil';

const defaultState = {
  lastCheck: 1527621031493,
  robots: {
    1: {
      waiting: 2,
      build: 0,
      explore: 0,
      gathering: 0
    }
  },
  build: {},
  gather: [],
  resources: {
    iron: 0,
    copper: 0,
    aluminum: 0,
    gold: 0,
    titanium: 0
  },
  explore: {
    lastCheck: Date.now()
  }
};

const gameDataReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_GAME_DATA:
      if (!action.gameData) {
        return oldState;
      }
      newState = merge(newState, action.gameData);
      newState = calculateProgress(newState);
      return newState;
    case RECEIVE_GATHER:
      newState
        .gather
        .push(action.gather);
      return newState;
    default:
  }
  newState = calculateProgress(newState);
  return newState;
};

export default gameDataReducer;
