import React from 'react';
import {View, Image, TouchableOpacity, Text, Alert,
ImageBackground} from 'react-native';
import {merge} from 'lodash';
import Icon from "react-native-vector-icons/FontAwesome";
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
      backgroundImage: {
        flex: 1
      },
      mainPicAndArrows: {
        position:'absolute',
        top: '15%',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        right: '5%',
        width: '50%',
        height: '50%',
        // borderWidth: 2
      },
      arrow: {
        position: 'relative',
        // color: "white",
        margin:'5%',
        left: '55%',
        width: '20%',
        height: '20%',
        justifyContent: 'center'
      },
      // inactiveArrow: {
      //   position: 'relative',
      //   margin:'5%',
      //   left: '55%',
      //   color: "grey",
      //   width: '20%',
      //   height: '20%',
      //   justifyContent: 'center'
      // },
      // arrow: {
      //   fontSize: 40,
      //   textAlign: 'center'
      // },
      nameAndTime: {
        top: '5%',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        // backgroundColor: '#3C9C8A',
        // borderBottomWidth: 1
      },
      name: {
        fontSize: 40,
        color: '#D8C549',
        fontWeight: '700'
      },
      progress: {
        height: '10%',
        fontSize: 20
      },
      resource: {
        // position:'absolute',
        top: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: '13%',
        width: '40%',
        backgroundColor: '#F1FFEE',
        margin: '2%',
        borderWidth: 5,
        borderRadius: 5,
        borderColor:'#32C8A6'
      },
      resourceName: {
        fontSize: 22,
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
        position:'absolute',
        height: '17%',
        width: '100%',
        bottom: '-20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal:'5%',
        // borderWidth: 10
      },
      button: {
        height: '60%',
        width: '30%',
        borderRadius: 10,
        backgroundColor: "#115767",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      },

      buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700'
      },

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
      <ImageBackground source={require('../../../assets/background/buildPage.png')}
      style={styles.backgroundImage}>
      <View>
        <View style={styles.nameAndTime}>
          <Text style={styles.name}>{currentRobot.name}</Text>
          {progressElement}
        </View>
        <View style={styles.mainPicAndArrows}>
          <TouchableOpacity
            style={styles.arrow}
            onPress=
            {previous ? () => this.buildPrev() : null }>
            <Text >
            <Icon
            name="arrow-circle-up"
            size={45}
            color={previous
              ? '#32C8A6'
              : 'grey'}
            />
          </Text>
          </TouchableOpacity>
          <Image style={styles.robotPic} source={currentRobot.pic}/>
          <TouchableOpacity
            style={styles.arrow}
            onPress={next
            ? () => this.buildNext()
            : null}>
            <Text >
            <Icon
            name="arrow-circle-down"
            size={45}
            color={next
            ? '#32C8A6'
            : 'grey'}/>
          </Text>
          </TouchableOpacity>
        </View>

        {this
          .resourceTypes
          .map((resource) => {
            let required = currentRobot.buildReq[resource]
            let owned = this.state.resources[resource]
            let enough = required <= owned
            return (
              <View style={styles.resource} key={resource + currentRobot}>
                <Text style={styles.resourceName}>{resource.toUpperCase()}</Text>
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
          <TouchableOpacity style={styles.button} onPress={() => this.changeBuildCheck()}>
            <Text style={styles.buttonText}>Build</Text>
          </ TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </ TouchableOpacity>
        </ View>
      </View>
      </ImageBackground>

    )
  }
}
