import React from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import {secondsToHms} from '../../util/timeConversion'

export default class RobotBuild extends React.Component < Props > {
  constructor(props) {
    super(props)
    this.state = {
      currentlyBuilding: 2,
      lookingAt: 1,
      buildingProgress: 10,
      buildRate: 5,
      resources: {
        steel: 10000,
        gold: 1000,
        titanium: 50,
        aluminum: 5000,
        copper: 50
      },
      robots: {
        1: {
          pic: require("../../../assets/robots/robo1.png"),
          time: 100000,
          name: 'Bob',
          resources: {
            steel: 50,
            gold: 0,
            titanium: 20,
            aluminum: 20,
            copper: 5
          }
        },
        2: {
          pic: require("../../../assets/robots/robo2.png"),
          time: 1000000,
          name: "Shirley",
          resources: {
            steel: 20,
            gold: 30,
            titanium: 20,
            aluminum: 20000,
            copper: 2
          }
        }
      }
    }

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
    const robot = this.state.robots[this.state.lookingAt]
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
    this.setState({currentlyBuilding: this.state.lookingAt, buildingProgress: 0});
  }

  render() {
    let previous = this.state.robots[this.state.lookingAt - 1];
    let next = this.state.robots[this.state.lookingAt + 1];
    const currentRobot = this.state.robots[this.state.lookingAt]
    let timeRemaining = this.state.currentlyBuilding === this.state.lookingAt
      ? currentRobot.time - this.state.buildingProgress
      : currentRobot.time
    timeRemaining /= this.state.buildRate
    timeRemaining = Math.floor(timeRemaining)
    const left = '<';
    const right = '>';

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
      time: {
        fontSize: 30
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
          <Text style={styles.name}>{currentRobot.name}:
            <Text style={styles.time}>{secondsToHms(timeRemaining)}</Text>
          </Text>
        </View>
        {Object
          .keys(currentRobot.resources)
          .map((resource) => {
            let required = currentRobot.resources[resource]
            let owned = this.state.resources[resource]
            let enough = required <= owned
            return (
              <View style={styles.resource} key={resource + currentRobot}>
                <Text style={styles.resourceName}>{resource}</Text>
                <Text
                  style={enough
                  ? styles.resourceAmountGreen
                  : styles.resourceAmountRed}>
                  {currentRobot.resources[resource]}/{this.state.resources[resource]}
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
