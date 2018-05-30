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
      gameData: props.gameData,
      robots: Object.keys(props.gameData.robots)
    }
    
    this.updateWorkers = this.updateWorkers.bind(this)

  };

  // componentWillUnmount(){
  //   this.props.updateGameData(this.props.sessionToken, this.state.gameData, )
  // }

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

  doThing = (num) => {
    this.setState({lookingAt: this.state.lookingAt + num})
  }

  render() {
    const currentRobot = this.state.gameData.robots[this.state.lookingAt]
    this.state.alert ? <AssignmentAlert messsage={this.state.alert} /> : '';
    const previous = this.state.robots.includes((this.state.lookingAt - 1).toString())
    const next = this.state.robots.includes((this.state.lookingAt + 1).toString())
    console.log("around", previous, next, this.state.robots, this.state.lookingAt)
    const prevRobot = previous ? 
      (<TouchableOpacity onPress={() => this.doThing(-1)}
                         style= {styles.prevOpac} >
        <Image  source={robotTypes[this.state.lookingAt - 1].pic}
                style={styles.nextRobot}/>
      </ TouchableOpacity>) : (<View />)

    const nextRobot = next ? 
      (<TouchableOpacity onPress={() => this.doThing(1)}
                         style= {styles.nextOpac} >
        <Image  source={robotTypes[this.state.lookingAt + 1].pic}
                style={styles.nextRobot}/>
      </ TouchableOpacity>) : (<View />)
    return (
      <KeyboardAvoidingView 
        enabled
        behavior='padding'
        style={styles.container}>
        {this.state.alert}
        {prevRobot}
        <Image  source={robotTypes[this.state.lookingAt].pic} />
        {nextRobot}
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
  },

  prevOpac: {
    height: 70,
    width: 70,
    position: 'absolute',
    left: '5%',
    top: '30%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5, 
    borderColor: '#cdcdcd'
  }
});