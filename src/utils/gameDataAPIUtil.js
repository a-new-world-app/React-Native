import { request } from "./APIUtils";

export const getGameData = (token) =>
  request("https://a-new-world.herokuapp.com/api/gamedata", token, {
    method: "Get"
  });

export const updateGameData = (token, gameData) =>
  request(`https://a-new-world.herokuapp.com/api/gameData`, token, {
    body: JSON.stringify({
      path: gameData
    }),
    method: "PATCH"
  });