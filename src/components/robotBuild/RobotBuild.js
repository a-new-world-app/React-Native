import React from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import { merge } from 'lodash';

import {secondsToHms} from '../../util/timeConversion'
import robotTypes from '../../../assets/robots/robotTypes'

export default class RobotBuild extends React.Component < Props > {
  constructor(props) {
    super(props)
    this.state = {
      gameData: props.gameData,
      currentlyBuilding: props.gameData.build.robot,
      lookingAt: 1,
      resources: props.gameData.resources,
      robots: Object.keys(props.gameData.robots)
    }
    this.resourceTypes = [
      'iron',
      'copper',
      'aluminum',
      'gold',
      'titanium',
    ];

    console.log(props)
  }

  componentDidMount(){
    this.props.getGameData(this.props.sessionToken)
  }

  componentWillUnmount(){
    this.props.updateGameData(this.props.sessionToken, this.state.gameData, )
  }

  buildNext = () => this.setState({
    lookingAt: this.state.lookingAt + 1
  })

  buildPrev = () => this.setState({
    lookingAt: this.state.lookingAt - 1
  })

  changeBuildCheck = () => {
    if (this.state.currentlyBuilding === null) 
      this.checkResources()
    else if (this.state.currentlyBuilding !== this.state.lookingAt) {
      Alert.alert("Change Build", "This will reset your progress, are you sure?", [
        {
          text: "Nevermind"
        }, {
          text: "I'm sure",
          onPress: () => this.checkResources()
        }
      ])
    }
  }

  checkResources = () => {
    const robot = robotTypes[this.state.lookingAt]
    const neededRes = robot.resources
    const myRes = this.state.resources
    for (resource in neededRes) {
      if (neededRes[resource] > myRes[resource]) {
        Alert.alert(`Not Enough Resources`, `You do not have enough ${resource}.`)
        return false;
      }
    }
    this.changeBuild()
  }

  changeBuild = () => {
    newGameData = merge({}, this.state.gameData),
    this.resourceTypes.forEach((resource) => {
      newGameData.resources[resource] -= robotTypes[this.state.lookingAt].buildReq[resource]
    })
    newBuild = {
      progress: 0,
      needed: robotTypes[this.state.lookingAt].buildReq.work,
      lastCheck: Date.now(),
      robot: this.state.lookingAt
    }
    newGameData.build = newBuild
    this.props.updateGameData(this.props.sessionToken, newGameData)
  }

  render() {
    const styles = {
      mainPicAndArrows: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 300,
        borderWidth: 1
      },
      activeArrow: {
        backgroundColor: "white",
        width: '10%',
        height: '100%',
        justifyContent: 'center'
      },
      inactiveArrow: {
        backgroundColor: "grey",
        width: '10%',
        height: '100%',
        justifyContent: 'center'
      },
      arrow: {
        fontSize: 40,
        textAlign: 'center'
      },
      nameAndTime: {
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1
      },
      name: {
        fontSize: 40
      },
      progress: {
        height: 30,
        fontSize: 20
      },
      resource: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        width: '100%',
        borderBottomWidth: 1
      },
      resourceName: {
        fontSize: 20,
        marginLeft: 10
      },
      resourceAmountRed: {
        fontSize: 20,
        marginRight: 10,
        color: 'red'
      },
      resourceAmountGreen: {
        fontSize: 20,
        marginRight: 10,
        color: 'green'
      },
      buttonBar: {
        flexDirection: 'row'
      },
      build: {
        height: 40,
        width: '50%',
        borderRadius: 5,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      },
      cancel: {
        height: 40,
        width: '50%',
        borderRadius: 5,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        fontSize: 30
      }
    }
    let previous = this.state.gameData.robots[this.state.lookingAt - 1];
    let next = this.state.gameData.robots[this.state.lookingAt + 1];
    const currentRobot = robotTypes[this.state.lookingAt]
    console.log('currentRob', currentRobot, this.resourceTypes)
    const percentProgress = Math.floor(100 * (this.state.gameData.build.progress / this.state.gameData.build.needed))
    console.log('progress', percentProgress)
    const progressElement = (this.state.lookingAt === this.state.currentlyBuilding) ?
      <Text style={styles.progress}>{`${percentProgress}% Completed`}</Text> : 
      <Text style={styles.progress}></Text>
    const left = '<';
    const right = '>';

    
    return (
      <View>
        <View style={styles.mainPicAndArrows}>
          <TouchableOpacity
            style={previous
            ? styles.activeArrow
            : styles.inactiveArrow}
            onPress=
            {previous ? () => this.buildPrev() : null }>
            <Text style={styles.arrow}>{left}</Text>
          </TouchableOpacity>
          <Image source={currentRobot.pic}/>
          <TouchableOpacity
            style={next
            ? styles.activeArrow
            : styles.inactiveArrow}
            onPress={next
            ? () => this.buildNext()
            : null}>
            <Text style={styles.arrow}>{right}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nameAndTime}>
          <Text style={styles.name}>{currentRobot.name}</Text>
          {progressElement}
        </View>
        {this.resourceTypes
          .map((resource) => {
            let required = currentRobot.buildReq[resource]
            let owned = this.state.resources[resource]
            let enough = required <= owned
            return (
              <View style={styles.resource} key={resource + currentRobot}>
                <Text style={styles.resourceName}>{resource}</Text>
                <Text
                  style={enough
                  ? styles.resourceAmountGreen
                  : styles.resourceAmountRed}>
                  {currentRobot.buildReq[resource]}/{this.state.resources[resource]}
                </Text>
              </View>
            )
          })}
        <View style={styles.buttonBar}>
          <TouchableOpacity style={styles.build} onPress={() => this.changeBuildCheck()}>
            <Text style={styles.buttonText}>Build</Text>
          </ TouchableOpacity>
          <TouchableOpacity style={styles.cancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </ TouchableOpacity>
        </ View>
      </View>

    )
  }
}
