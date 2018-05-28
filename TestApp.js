import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


import Root from './src/Root';
import RobotInstructions from './src/components/robots/RobotInstructions';
import RobotBuild from './src/components/robotBuild/RobotBuild';
import HomeScreen from './src/components/homeScreen/HomeScreen';
import CreateRoute from './App';
import configureStore from "./src/store";

const RootStack = createStackNavigator(
  {
    Root,
    CreateRoute, 
    RobotInstructions,
    RobotBuild,
    HomeScreen
  },
  {
    initialRouteName: 'Root',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()} >
        <RootStack />
      </ Provider>
    );
  }
}
