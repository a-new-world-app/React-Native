import * as sessionAPIUtils from "../utils/sessionAPIUtils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT = "LOGOUT";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});




export const logOut = () => ({
  type: LOG_OUT
});



export const logIn = (token, dispatch) =>
  sessionAPIUtils
    .fetchCurrentUser(token)
    .then(res => res.json())
    .then(user => dispatch(receiveCurrentUser(user)));
