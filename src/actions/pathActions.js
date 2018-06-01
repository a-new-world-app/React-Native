import * as pathAPIUtil from "../utils/pathAPIUtils";

export const RECEIVE_PATH = 'RECEIVE_PATH';
export const RECEIVE_PATH_UPDATE = 'RECEIVE_PATH_UPDATE';
export const CLEAR_PATH = 'CLEAR_PATH';

export const receivePath = payload => ({type: RECEIVE_PATH, payload});

export const receivePathUpdate = payload => ({type: RECEIVE_PATH_UPDATE, payload});

export const clearPath = () => ({type: CLEAR_PATH});

export const endPath = (token, dispatch) => pathAPIUtil
  .endPath(token)
  .then((payload) => dispatch(clearPath(payload)));

export const createPath = (token, path, dispatch) => pathAPIUtil
  .submitPath(token, path)
  .then(res => {
    console.log('hello', res);
    return (res.json());
  })
  .then(payload => dispatch(receivePath(payload)));

export const updatePath = (token, pathId, path, dispatch) => pathAPIUtil
  .updatePath(token, pathId, path)
  .then(res => {
    // console.log('update', res.json());
    return res.json();
  })
  .then(payload => dispatch(receivePathUpdate(payload)));

export const currentPath = (token, dispatch) => pathAPIUtil
  .currentPath(token)
  .then(res => {
    console.log('hello', res);
    return (res.json());
  })
  .then(payload => dispatch(receivePath(payload)));