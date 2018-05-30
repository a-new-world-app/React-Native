import { request } from "./APIUtils";

export const getGameData = (token) =>{
  console.log('token', token);
  return (request("https://a-new-world.herokuapp.com/api/gamedata", token, {
    method: "GET"
  }));};

export const updateGameData = (token, gameData) =>{
  console.log("updateAPI", token, gameData);
  return (request(`https://a-new-world.herokuapp.com/api/gamedata`, token, {
    body: JSON.stringify({
      gameData: gameData
    }),
    method: "PATCH"
  }));};