import * as robotAPIUtil from "../util/robotUtil";
import * as pathAPIUtil from "../utils/pathAPIUtils";

export const RECEIVE_PATH =  'RECEIVE_PATH';
export const CLEAR_PATH =  'CLEAR_PATH';

export const receivePath = payload => ({
  type: RECEIVE_PATH,
  payload
});

export const clearPath = () => ({
  type: CLEAR_PATH
});

// export const createPath = (token, path) => dispatch =>
//   pathAPIUtil
//     .submitPath(token, path)
//     .then(payload =>
//       dispatch(receivePath(payload))
//     );
//
// export const updatePath = (token, pathId, path) => dispatch =>
//   pathAPIUtil
//     .updatePath(token, pathId, path)
//     .then(payload =>
//       dispatch(receivePath(payload))
//     );
//
// export const endPath = (token) => dispatch =>
//   pathAPIUtil
//     .endPath(token)
//     .then((payload) =>
//     dispatch(clearPath(payload))
//   );

export const createPath = (token, path, dispatch) =>
  pathAPIUtil
    .submitPath(token, path)
    .then(res => {
      console.log('hello', res);
      return(res.json());})
    .then(payload => dispatch(receivePath(payload)));

export const updatePath = (token, pathId, path, dispatch) =>
  pathAPIUtil
    .updatePath(token, pathId, path)
    .then(res => res.json())
    .then(payload => dispatch(receivePath(payload)));
