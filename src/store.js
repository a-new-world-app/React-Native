import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState);

export default configureStore;