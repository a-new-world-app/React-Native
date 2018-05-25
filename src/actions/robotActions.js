import * as robotAPIUtil from "../util/robotUtil";
import { RECEIVE_ROUTE_ERRORS } from "./route_actions";

export const RECEIVE_ROBOT = "RECEIVE_ROBOT";
export const RECEIVE_ROBOTS = "RECEIVE_ROBOTS";
export const RECEIVE_ROBOT_ERRORS = "RECEIVE_ROBOT_ERRORS";

export const receiveRobots = payload => ({
  type: RECEIVE_ROBOTS,
  payload
});

export const receiveRobot = payload => ({
  type: RECEIVE_ROBOT,
  payload
});

export const receiveRobotErrors = errors => ({
  type: RECEIVE_ROBOT_ERRORS,
  errors
});

export const updateRobot = robotUpdate => dispatch =>
  robotAPIUtil
    .updateRobot(robotUpdate)
    .then(run =>
      dispatch(receiveRobot(run), errors => dispatch(receiveRobotErrors(errors)))
    );

export const retrieveRobots = () => dispatch =>
  robotAPIUtil
    .retrieveRobots()
    .then(payload =>
      dispatch(receiveRobots(payload), errors =>
        dispatch(receiveRobotErrors(errors))
      )
    );

export const retrieveRobot = robotId => dispatch =>
  robotAPIUtil
    .retrieveRobot(robotId)
    .then(payload =>
      dispatch(receiveRobot(payload), errors =>
        dispatch(receiveRobotErrors(errors))
      )
    );
