import { request } from "./APIUtils";

export const fetchCurrentUser = token =>
  request("https://a-new-world.herokuapp.com/api/current_user", token);
