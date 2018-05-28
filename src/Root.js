import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


import RobotInstuctionsContainer from './components/robots/RobotInstructionsContainer';
import RobotBuildContainer from './components/robotBuild/RobotBuildContainer';
import HomeScreen from './components/homeScreen/HomeScreen';
import CreateRoute from './App';
import configureStore from "./store";
import LoginContainer from './components/LoginContainer';

const RootStack = createStackNavigator(
  {
    LoginContainer,
    CreateRoute, 
    RobotInstuctionsContainer,
    RobotBuildContainer,
    HomeScreen
  },
  {
    initialRouteName: 'LoginContainer',
    headerMode: 'none'
  }
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={configureStore()} >
        <RootStack />
      </ Provider>
    );
  }
}
