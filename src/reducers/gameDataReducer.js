import { merge } from 'lodash';

import { RECEIVE_GAME_DATA } from "../actions/gameDataActions";
import { calculateProgress } from '../utils/gameDataUtil';

const defaultState = {
  lastCheck: 1527621031493,
  robots: {
    1: {
      waiting: 1,
      build: 1,
      explore: 1,
      gathering: 1,
    },
    2: {
      waiting: 1,
      build: 1,
      explore: 1,
      gathering: 1,
    }
  },
  build: {
    robot: 1,
    progress: 99,
    needed: 100000000,
    lastCheck: 1527621031493,
  },
  gather: [{
      end: 1528631031493,
      start: 1527621031493,
      resource: 'iron',
      amount: 100000,
      robot: 1,
    },
    {
      resource: 'iron',
      amount: 100000,
    },
    {
      resource: 'iron',
      amount: 100000,
    }
],
  resources: {
    iron: 10000000,
    copper: 10000000,
    aluminum: 10000000,
    gold: 10000000,
    titanium: 10000000,
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
      if (!action.gameData){
        console.log('no game data');
        return oldState;
      }
      newState = merge(newState, action.gameData);
      break;
    default:
  }
  newState = calculateProgress(newState);
  console.log('newState', newState);
  return newState;
};

export default gameDataReducer;
