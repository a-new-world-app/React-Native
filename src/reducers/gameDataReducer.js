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
    },
    2: {
      waiting: 2,
      build: 0,
      explore: 0,
      gathering: 0
    },
    3: {
      waiting: 2,
      build: 0,
      explore: 0,
      gathering: 0
    },
    4: {
      waiting: 2,
      build: 0,
      explore: 0,
      gathering: 0
    },
    5: {
      waiting: 2,
      build: 0,
      explore: 0,
      gathering: 0
    }
  },
  build: {},
  gather: [
    // {   end: 1527773625378,   start: 1527763624377,   resource: 'iron',   amount:
    // 100000,   robot: 1,   latitude: 37.76416667,   longitude: -122.4266667 }, {
    // end: 1527773625379,   start: 1527763624377,   resource: 'copper',   amount:
    // 100000,   robot: 4,   latitude: 37.79527778,   longitude: -122.3936111 }, {
    // end: 1527773625377,   start: 1527763624377,   resource: 'gold',   amount:
    // 100000,   robot: 5,   latitude: 37.75638889,   longitude: -122.4188889 }
  ],
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
