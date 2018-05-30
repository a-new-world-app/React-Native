import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { merge } from 'lodash'

import robotTypes from '../../../assets/robots/robotTypes'
import RobotJob from './RobotJob.js';

export default class RobotInstuctions extends Component<Props> {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      lookingAt: 1,
      gameData: props.gameData
    }
    
    this.updateWorkers = this.updateWorkers.bind(this)

  };

  updateWorkers(string, input){
    const number = Number(input)
    const unemployed = this.state.gameData.robots[this.state.lookingAt].waiting 
    let nextUnemployed = unemployed - (input - this.state.gameData.robots[this.state.lookingAt][string])
    if (number % 1 !== 0) {
      Alert.alert("You can't have partial robots")
      // this.setState({jobs: {[string]: this.state.jobs[string]}})
    }else if(Math.sign(number) === -1) {
      Alert.alert("You can't have less than zero workers")
    }else if(Math.sign(nextUnemployed) === -1){
      Alert.alert("You don't have that many robots")
    }else{
      // let newJobs = this.state.jobs.dup
      let nextData = merge({}, this.state.gameData, {robots:
        {[this.state.lookingAt]:
          {[string]: number,
          waiting: nextUnemployed}}})
      console.log(nextData)
      this.setState({gameData: nextData})
    }
  }

  render() {
    const currentRobot = this.state.gameData.robots[this.state.lookingAt]
    this.state.alert ? <AssignmentAlert messsage={this.state.alert} /> : '';
    return (
      <KeyboardAvoidingView 
        enabled
        behavior='padding'
        style={styles.container}>
        {this.state.alert}
        <Image  source={robotTypes[this.state.lookingAt].pic} />
        {/* <TouchableOpacity onPress={() => this.doThing()}
                          style= {styles.nextOpac} >
          <Image  source={this.state.next}
                  style={styles.nextRobot}/>
        </ TouchableOpacity> */}
        <Text style={styles.welcome}>
          {robotTypes[this.state.lookingAt].description}
        </Text>
        <Text style={styles.welcome}>
          Waiting: {currentRobot.waiting}
        </Text>
        <Text style={styles.welcome}>
          Gathering: {currentRobot.gathering}
        </Text>
        {
          ['build', 'explore']
            .map((job) => <RobotJob key={job + currentRobot[job]} 
                                    job={job} 
                                    count={currentRobot[job]}
                                    update={this.updateWorkers}
                                    />
                    )
        }
      </KeyboardAvoidingView>
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
  nextOpac: {
    height: 70,
    width: 70,
    position: 'absolute',
    right: '5%',
    top: '30%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5, 
    borderColor: '#cdcdcd'
  },
  nextRobot: {
    width: 70,
    height: 70
  }
});