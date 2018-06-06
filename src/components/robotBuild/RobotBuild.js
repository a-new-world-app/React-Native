import React from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import {merge} from 'lodash';

import {secondsToHms} from '../../util/timeConversion'
import robotTypes from '../../../assets/robots/robotTypes'

export default class RobotBuild extends React.Component < Props > {
  constructor(props) {
    super(props)
    this.state = {
      gameData: props.gameData,
      currentlyBuilding: props.gameData.build
        ? props.gameData.build.robot
        : null,
      lookingAt: 1,
      resources: props.gameData.resources,
      robots: Object.keys(props.gameData.robots)
    }
    this.resourceTypes = ['iron', 'copper', 'aluminum', 'gold', 'titanium'];

    console.log(props)
  }

  componentDidMount() {
    this
      .props
      .getGameData(this.props.sessionToken)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      gameData: newProps.gameData,
      currentlyBuilding: newProps.gameData.build
        ? newProps.gameData.build.robot
        : null,
      lookingAt: 1,
      resources: newProps.gameData.resources,
      robots: Object.keys(newProps.gameData.robots)
    })
  }

  componentWillUnmount() {
    this
      .props
      .updateGameData(this.props.sessionToken, this.state.gameData,)
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
    else if ((this.state.currentlyBuilding !== this.state.lookingAt)) {
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
    const neededRes = robot.buildReq
    const myRes = this.state.resources
    console.log('resources', robot, neededRes, myRes)
    let canBuild = true
    this
      .resourceTypes
      .forEach(resource => {
        if (neededRes[resource] > myRes[resource]) {
          Alert.alert(`Not Enough Resources`, `You do not have enough ${resource}.`)
          canBuild = false;
        }
      })
    if (canBuild)
      this.changeBuild()
  }

  changeBuild = () => {
    newGameData = merge({}, this.state.gameData),
    this
      .resourceTypes
      .forEach((resource) => {
        newGameData.resources[resource] -= robotTypes[this.state.lookingAt].buildReq[resource]
      })
    newBuild = {
      progress: 0,
      needed: robotTypes[this.state.lookingAt].buildReq.work,
      lastCheck: Date.now(),
      robot: this.state.lookingAt
    }
    newGameData.build = newBuild
    this
      .props
      .updateGameData(this.props.sessionToken, newGameData)
  }

  percentProgress = () => Math.floor(100 * (this.state.gameData.build.progress / this.state.gameData.build.needed))

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
        backgroundColor: '#3C9C8A',
        // borderBottomWidth: 1
      },
      name: {
        fontSize: 40,
        color: '#D8C549',
        fontWeight: '700'
      },
      progress: {
        height: 30,
        fontSize: 20
      },
      resource: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 35,
        width: '100%',
        backgroundColor: '#EBE4D1',
        paddingHorizontal: '5%',
        marginHorizontal: '2%',
        marginBottom: '2%',
        // borderBottomWidth: 1
      },
      resourceName: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '700',
        color: 'black'
      },
      resourceAmountRed: {
        fontSize: 20,
        marginRight: 10,
        fontWeight: '700',
        color: '#B95A65'
      },
      resourceAmountGreen: {
        fontSize: 20,
        marginRight: 10,
        color: 'black',
        fontWeight: '700'
      },
      buttonBar: {
        flexDirection: 'row',
        justifyConten: 'space-between',
        flex: 1
      },
      build: {
        height: 40,
        width: '30%',
        borderRadius: 10,
        backgroundColor: '#E7BD16',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginLeft: '10%',
        marginRight: '20%'
      },
      cancel: {
        height: 40,
        width: '30%',
        borderRadius: 10,
        color: '#E7BD16',
        fontWeight: '700',
        backgroundColor: '#2775C3',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginRight: '10%'
      },
      buttonBuildText: {
        fontSize: 20,
        color: '#2775C3',
        fontWeight: '700'
      },
      buttonCancelText: {
        fontSize: 20,
        color: '#E7BD16',
        fontWeight: '700'
      }
    }
    let previous = this.state.gameData.robots[this.state.lookingAt - 1];
    let next = this.state.gameData.robots[this.state.lookingAt + 1];
    const currentRobot = robotTypes[this.state.lookingAt]
    console.log('currentRob', currentRobot, this.resourceTypes)
    const progressElement = (this.state.lookingAt === this.state.currentlyBuilding)
      ? <Text style={styles.progress}>{`${this.percentProgress()}% Completed`}</Text>
      : <Text style={styles.progress}></Text>
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
        {this
          .resourceTypes
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
            <Text style={styles.buttonBuildText}>Build</Text>
          </ TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonCancelText}>Back</Text>
          </ TouchableOpacity>
        </ View>
      </View>

    )
  }
}
