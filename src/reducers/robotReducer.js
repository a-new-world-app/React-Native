import { RECEIVE_ROBOT, RECEIVE_ROBOTS } from "../actions/robotActions";

const robotReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ROBOTS:
      return action.payload.robots;
    case RECEIVE_ROBOT:
      return Object.assign({}, oldState, action.payload.robots);
    default:
      return oldState;
  }
};

export default robotReducer;
