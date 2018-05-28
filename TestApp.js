import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


import Root from './src/Root';
import RobotInstructions from './src/components/robots/RobotInstructions';
import RobotBuild from './src/components/robotBuild/RobotBuild';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Test</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Root: Root,
    RobotInstructions: RobotInstructions,
    RobotBuild: RobotBuild
  },
  {
    initialRouteName: 'RobotInstructions',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
