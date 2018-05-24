import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./store";
import App from "./App";

const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

export default Root;
