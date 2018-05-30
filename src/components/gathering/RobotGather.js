import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, Alert, Button} from 'react-native';
// import { merge } from 'lodash';

import {secondsToHms} from '../../util/timeConversion';
import robotTypes from '../../../assets/robots/robotTypes';

export default class RobotGather extends Component < Props > {
  constructor(props){
    super(props);
    this.state = {
      gameData: props.gameData,
      gather: props.gameData.gather,
      robots: props.gameData.robots,
      modal: false
    };

    this.capitalize = {
      iron: "Iron",
      copper: "Copper",
      aluminum: "Aluminum",
      gold: "Gold",
      titanium: "Titanium",
    }
  }

  componentDidMount(){
    this.props.getGameData(this.props.sessionToken)
  }

  componentWillUnmount(){
    this.props.updateGameData(this.props.sessionToken, this.state.gameData, )
  }

  generateList = () => {
    console.log('gherate list state', this.state)
    let list = this
      .state
      .gather
      .map((gatherable, idx) => {
        if (gatherable.start) {
          return this.startedGather(gatherable)
        } else {
          return this.notStartedGather(gatherable, idx)
        }
      })
    console.log('the list ', list)
    return list;
  }

  startedGather = (gatherable) => (
    <View style={styles.listItem} key={Math.random()}>
      <View style={styles.textContainer}>
        <Text style={styles.resource}>{this.capitalize[gatherable.resource]}</Text>
        <Text style={styles.amount}>{gatherable.amount}</Text>
      </View>
      <Image source={robotTypes[gatherable.robot].pic}
             style={styles.gatherer}></Image>
    </View>
  )

  notStartedGather = (gatherable, idx) => (
    <View style={styles.startGather}>
      <View style={styles.listItem}>
        <View style={styles.textContainer}>
          <Text style={styles.resource}>{this.capitalize[gatherable.resource]}</Text>
          <Text style={styles.amount}>{gatherable.amount}</Text>
        </View>
        <View style={styles.gatherer}/>
      </View>
      <View style={styles.yayDivs}>
        <Text style={styles.assign}>Assign someone to gather?</Text>
        <View style={styles.possibleRobots}>
          {this.waitingRobots().map(robot => (
            <TouchableOpacity onPress={ () => this.assignRobot(idx, robot.robot)}>
              <Image source={robotTypes[robot.robot].pic}
                    style={styles.gatherer}></Image>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )

  assignRobot = (gatherIdx, robotIdx) => {
    console.log('assign', gatherIdx, robotIdx )
    const gathers = this.state.gather;
    const currentGath = gathers[gatherIdx]
    currentGath.start = Date.now()
    const duration = 1000 * 60 * 60 * 2 / robotTypes[robotIdx].gather
    currentGath.end = currentGath.start + duration
    currentGath.robot = robotIdx

    const robots = this.state.robots
    robots[robotIdx].waiting -= 1
    robots[robotIdx].gathering += 1

    this.setState({
      gather: gathers,
      robots: robots
    })
  }
  

  waitingRobots = () => {
    possibleRobots = [];
    Object.keys(this.state.robots).forEach( robotKey => {
      robot = this.state.robots[robotKey];
      if (robot.waiting > 0 ) {
        possibleRobots.push({
          robot: robotKey,
          number: robot.waiting
        })
      }
    })
    return possibleRobots
  }

  render() {
    const list = this.generateList()
    let modal = this.state.modal ? this.generateModal() : <View />
    console.log("modal", this.state.modal, modal)
    return (
      <View>
        {list}
        {modal}
      </View>
    );
  }
}

const styles = {
  listItem: {
    borderTopWidth: 1,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gatherer : {
    borderRadius: 5,
    width: 70,
    height: 70,
    borderWidth:1,
    backgroundColor: 'white',
    marginRight: 20,
  },
  textContainer: {
    marginLeft: 20,
  },
  resource: {
    fontSize: 30,

  },
  amount: {
    fontSize: 20,
  },

  yayDivs:{
    alignItems: 'center',
  },
  
  possibleRobots: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  assign: {
    fontSize: 20,
    paddingBottom: 5
  },
}