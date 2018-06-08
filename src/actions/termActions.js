import * as sessionAPIUtils from "../utils/sessionAPIUtils";
import {receiveCurrentUser}  from "../actions/sessionActions";


export const submitAgreement = (token, dispatch) => {
  sessionAPIUtils
  .submitAgreement(token)
  .then(res =>
    {
    console.log('terms', res.json());
    return res.json();
  })
  .then(user => {
    console.log('receiveUser', user);
    dispatch(receiveCurrentUser(user));
  });
};
