import { request } from "./APIUtils";

export const fetchCurrentUser = (token) =>
  request("https://a-new-world.herokuapp.com/api/current_user", token);

export const submitAgreement = (token, agreement) =>
  request("https://a-new-world.herokuapp.com/api/current_user", token, {
    body: JSON.stringify({
      term: {agreement: agreement}
    }),
    method: "POST"
  });
