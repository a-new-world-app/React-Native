import { RECEIVE_GAME_DATA } from "../actions/gameDataActions";

const gameDataReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_GAME_DATA:
      return action.payload.gameData;
    default:
      return oldState;
  }
};

export default gameDataReducer;
