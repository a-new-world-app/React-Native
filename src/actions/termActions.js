import * as sessionAPIUtils from "../utils/sessionAPIUtils";
import {receiveCurrentUser,
RECEIVE_CURRENT_USER}  from "../actions/sessionActions";


export const submitAgreement = (token, dispatch) =>
  sessionAPIUtils
  .submitAgreement(token)
  .then(res => res.json())
  .then(user => dispatch(receiveCurrentUser(user)));
