import { request } from "./APIUtils";

export const submitPath = (token, description) =>
  request("https://a-new-world.herokuapp.com/api/paths", token, {
    body: JSON.stringify({
      path: { pathData: { description: description } }
    }),
    method: "POST"
  });
