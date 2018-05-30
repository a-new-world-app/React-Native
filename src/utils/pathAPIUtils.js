import { request } from "./APIUtils";

export const submitPath = (token, path) =>
  request("https://a-new-world.herokuapp.com/api/paths", token, {
    body: JSON.stringify({
      path: {pathData: path}
    }),
    method: "POST"
  });

export const updatePath = (token, pathId, path) =>
  request(`https://a-new-world.herokuapp.com/api/paths/${pathId}`, token, {
    body: JSON.stringify({
      path: { pathData: path }
    }),
    method: "PATCH"
  });

  export const currentPath = (token) =>
  request("https://a-new-world.herokuapp.com/api/current_path", token, {
    method: "Get"
  });

export const endPath = (token) =>
  request("https://a-new-world.herokuapp.com/api/paths/complete", token, {
    method: "POST"
  });
