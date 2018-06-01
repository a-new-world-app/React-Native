import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import {merge} from 'lodash'

import robotTypes from '../../../assets/robots/robotTypes'
import RobotJob from './RobotJob.js';

export default class RobotInstuctions extends Component < Props > {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      lookingAt: 2,
      gameData: props.gameData,
      robots: Object.keys(props.gameData.robots)
    }

    console.log('RI Props', props)

    this.updateWorkers = this
      .updateWorkers
      .bind(this)

  };

  componentDidMount() {
    this
      .props
      .getGameData(this.props.sessionToken)
  }

  componentWillUnmount() {
    this
      .props
      .updateGameData(this.props.sessionToken, this.state.gameData,)
  }

  updateWorkers(string, input) {
    console.log('update workers', string, input)
    const number = Number(input)
    const unemployed = this.state.gameData.robots[this.state.lookingAt].waiting
    let nextUnemployed = unemployed - (input - this.state.gameData.robots[this.state.lookingAt][string])
    console.log('nextUnemployed', nextUnemployed)
    console.log('number', number)
    if (number % 1 !== 0) {
      Alert.alert("You can't have partial robots")
    } else if (Math.sign(number) === -1) {
      Alert.alert("You can't have less than zero workers")
    } else if (Math.sign(nextUnemployed) === -1) {
      Alert.alert("You don't have that many robots")
    } else {
      let nextData = merge({}, this.state.gameData, {
        robots: {
          [this.state.lookingAt]: {
            [string]: number,
            waiting: nextUnemployed
          }
        }
      })
      console.log(nextData)
      this.setState({gameData: nextData})
    }
  }

  doThing = (num) => {
    console.log('do thing')
    this.setState({
      lookingAt: this.state.lookingAt + num
    })
  }

  render() {
    const currentRobot = this.state.gameData.robots[this.state.lookingAt]
    console.log('RI', this.state, robotTypes[this.state.lookingAt])
    this.state.alert
      ? <AssignmentAlert messsage={this.state.alert}/>
      : <View/>;
    const previous = this
      .state
      .robots
      .includes((this.state.lookingAt - 1).toString())
    const next = this
      .state
      .robots
      .includes((this.state.lookingAt + 1).toString())
    console.log("around", previous, next, this.state.robots, this.state.lookingAt)
    const prevRobot = previous
      ? (
        <TouchableOpacity onPress={() => this.doThing(-1)} style={styles.prevOpac}>
          <Image
            source={robotTypes[this.state.lookingAt - 1].pic}
            style={styles.nextRobot}></Image>
        </ TouchableOpacity>
      )
      : (<View/>)

    const nextRobot = next
      ? (
        <TouchableOpacity onPress={() => this.doThing(1)} style={styles.nextOpac}>
          <Image
            source={robotTypes[this.state.lookingAt + 1].pic}
            style={styles.nextRobot}></Image>
        </ TouchableOpacity>
      )
      : (<View/>)
    return (
      <ImageBackground
        source={require('../../../assets/background/instruction.png')}
        style={styles.backgroundImage}>
        <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
          {this.state.alert}
          {prevRobot}
          <Image source={robotTypes[this.state.lookingAt].pic} style={styles.mainRobot}></Image>
          {nextRobot}

          <View style={styles.jobContainer}>
            <Text style={styles.description}>
              {robotTypes[this.state.lookingAt].description}
            </Text>

            <View style={styles.robotStatus}>
              <Text style={styles.welcome}>
                Waiting: {currentRobot.waiting}
              </Text>
              <Text style={[styles.welcome, styles.border]}>
                Gathering: {currentRobot.gathering}
              </Text>
            </View>
            {['Build', 'Explore'].map((job) => <RobotJob
              key={Math.random()}
              job={job}
              count={currentRobot[job.toLowerCase()]}
              update={this.updateWorkers}/>)
}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },

  jobContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    top: '30%',
    left: '5%',
    width: '90%',
    height: '95%'
  },
  description: {
    top: '20%',
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: '#3D8390',
    paddingBottom: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#7EE6BA'
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: '#7B8A87',
    // borderLeftWidth: 2, borderLeftColor:'#7B8A87',

  },
  border: {
    paddingLeft: '10%',
    borderLeftWidth: 2,
    borderLeftColor: '#7B8A87'
  },
  robotStatus: {
    top: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%'
  },
  mainRobot: {
    position: 'absolute',
    top: '5%',
    height: '40%',
    width: '45%',
    zIndex: 10,
    left: '30%',
    resizeMode: 'contain'
  },
  nextOpac: {
    height: 60,
    width: 60,
    position: 'absolute',
    right: '8%',
    top: '35%',
    backgroundColor: '#D296A0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#A1DBD7',
    elevation: 3,
    zIndex: 20
  },
  nextRobot: {
    width: 60,
    height: 60
  },

  prevOpac: {
    height: 60,
    width: 60,
    position: 'absolute',
    left: '8%',
    top: '35%',
    backgroundColor: '#D296A0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#cdcdcd',
    elevation: 3,
    zIndex: 20

  }
});
