import * as sessionAPIUtils from "../utils/sessionAPIUtils";
import {receiveCurrentUser}  from "../actions/sessionActions";


export const submitAgreement = (token, dispatch) =>
  sessionAPIUtils
  .submitAgreement(token)
  .then(res => res.json())
  .then(user => dispatch(receiveCurrentUser(user)));
