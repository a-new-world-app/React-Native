import * as sessionAPIUtils from "../utils/sessionAPIUtils";

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
