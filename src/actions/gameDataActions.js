import * as gameDataAPIUtil from "../utils/gameDataAPIUtil";
// import { RECEIVE_ROUTE_ERRORS } from "./route_actions";

export const RECEIVE_GAME_DATA = "RECEIVE_GAME_DATA";
export const RECEIVE_GATHER = "RECEIVE_GATHER";

export const receiveGameData = payload => ({type: RECEIVE_GAME_DATA, gameData: payload});

export const addGather = (gather) => ({type: RECEIVE_GATHER, gather});

export const updateGameData = (token, gameData, dispatch) => gameDataAPIUtil
  .updateGameData(token, gameData)
  .then(res => {
    console.log('update res', res, gameData);
    return res.json();
  })
  .then(payload => dispatch(receiveGameData(payload)));

export const getGameData = (token, dispatch) => gameDataAPIUtil
  .getGameData(token)
  .then(res => res.json())
  .then(payload => dispatch(receiveGameData(payload)));