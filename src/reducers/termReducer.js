import { RECEIVE_CURRENT_AGREEMENT } from "../actions/termActions";


const termReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_AGREEMENT:
     return action.term;
    default:
      return oldState;
  }
};

export default termReducer;
