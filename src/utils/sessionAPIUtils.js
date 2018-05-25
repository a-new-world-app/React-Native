export const fetchCurrentUser = token =>
  fetch("https://a-new-world.herokuapp.com/api/current_user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });
