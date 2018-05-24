import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import RobotJob from './RobotJob.js';

export default class RobotInstuctions extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      pic: require("./assets/robots/robo1.png"),
      work: ["Waiting", "Exploring", "Carrying", "Building"]
    }
  };
  

  render() {
    // const picLoc =require(`./assets/robots/${this.state.pic}`)
    // console.log(picLoc)
    // const picLoc =`./assets/robots/robo1.png`
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Image  source={this.state.pic} />
        <Text style={styles.welcome}>
          Good at ... well nothing but tries REALLY hard.
        </Text>
        {
          this.state.work.map((job) => <RobotJob id={job} job={job} count={1}/>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  map: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});