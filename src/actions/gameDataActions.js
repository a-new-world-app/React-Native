import * as gameDataAPIUtil from "../utils/gameDataAPIUtil";
// import { RECEIVE_ROUTE_ERRORS } from "./route_actions";

export const RECEIVE_GAME_DATA = "RECEIVE_GAME_DATA";

export const receiveGameData = payload => ({type: RECEIVE_GAME_DATA, gameData: payload});

export const updateGameData = (token, gameData, dispatch) => gameDataAPIUtil
  .updateGameData(token, gameData)
  .then(res => {
    console.log('update res', res);
    return res.json();
  })
  .then(payload => dispatch(receiveGameData(payload)).then(res => console.log(res), errors => console.error(errors)));

export const getGameData = (token, dispatch) => gameDataAPIUtil
  .getGameData(token)
  .then(res => res.json())
  .then(payload => dispatch(receiveGameData(payload)).then(res => console.log(res), errors => console.error(errors)));
