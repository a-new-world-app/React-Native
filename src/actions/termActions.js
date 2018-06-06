import * as sessionAPIUtils from "../utils/sessionAPIUtils";
<<<<<<< HEAD
import {receiveCurrentUser}  from "../actions/sessionActions";


export const submitAgreement = (token, dispatch) => {
  sessionAPIUtils
  .submitAgreement(token)
  .then(res =>
    {
    console.log('terms', res.json());
    return res.json();
  })
  .then(user => dispatch(receiveCurrentUser(user)));
};
=======

export const RECEIVE_CURRENT_AGREEMENT = "RECEIVE_CURRENT_AGREEMENT";



const receiveAgreement = term => ({
  type: RECEIVE_CURRENT_AGREEMENT,
  term
});



export const getAgreement = (token, agreement, dispatch) =>
  sessionAPIUtils
  .submitAgreement(token, agreement)
  .then(res => res.json())
  .then(term => dispatch(receiveAgreement(term)));
>>>>>>> master
