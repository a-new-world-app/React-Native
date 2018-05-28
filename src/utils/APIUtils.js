import { merge } from "lodash";

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export const request = (url, token, options = {}) => {
  if (token) {
    merge(options, { headers: { Authorization: `Bearer ${token}` } });
  }
  return fetch(url, merge({}, defaultOptions, options));
};
