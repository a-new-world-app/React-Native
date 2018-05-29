import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";

const nullUser = { token: null };

const sessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default sessionReducer;