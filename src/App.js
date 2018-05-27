import React, { Component } from "react";
// import RobotInstructions from './components/robots/RobotInstructions';
import { createStackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';

import Login from "./components/LoginContainer";

// const App =  () => (
//   // <Login />
//   <View></View>
// );

// const RootStack = createStackNavigator(
//   {
//     Home: App,
//     // Robots: RobotInstructions,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
// console.log('RootStack', RootStack);
// class TheApp extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

// export default TheApp;

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
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}