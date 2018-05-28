import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';

import configureStore from "./store";
import App from "./App";

const Root = () => (
    <App />
);

export default Root;
