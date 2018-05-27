
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {secondsToHms} from '../../util/timeConversion'

export default class RobotBuild extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      currentlyBuilding: 1,
      resources: {
        steel: 10000,
        gold: 1000,
        titanium: 50,
        aluminum: 5000,
        copper: 50,
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
          copper: 5,
          }
        },
        2: {
          pic: require("../../../assets/robots/robo2.png"),
          time: 1000000,
          name: "Shirley",
          resources:{
          steel: 20,
          gold: 30,
          titanium: 20,
          aluminum: 2000,
          copper: 2,
          }
        }
      }
    }

  }

  buildNext = () => this.setState({currentlyBuilding: this.state.currentlyBuilding + 1})

  buildPrev = () => this.setState({currentlyBuilding: this.state.currentlyBuilding - 1})
  

  render() {
    let previous = this.state.robots[this.state.currentlyBuilding - 1];
    let next = this.state.robots[this.state.currentlyBuilding + 1];
    const currentRobot = this.state.robots[this.state.currentlyBuilding]
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
        alignItems: 'center'
      },
      name: {
        fontSize: 40,
      },
      time: {
        fontSize: 30
      },
      resource: {
        
      }
    }
    return(
      <View>
        <View style={styles.mainPicAndArrows}>
          <TouchableOpacity style={previous ? styles.activeArrow : styles.inactiveArrow}
                            onPress= {previous ? () => this.buildPrev() : null } > 
            <Text style={styles.arrow}>{left}</Text>
          </TouchableOpacity>
          <Image source={this.state.robots[this.state.currentlyBuilding].pic}/>
          <TouchableOpacity style={next ? styles.activeArrow : styles.inactiveArrow}
                            onPress={next ? () => this.buildNext() : null} > 
            <Text style={styles.arrow}>{right}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nameAndTime}>
          <Text style={styles.name}>{currentRobot.name}: 
            <Text style={styles.time}>{secondsToHms(currentRobot.time)}</Text>
          </Text>
        </View>
        {Object.keys(currentRobot.resources).map((resource) => {
          
        })}
      </View>

    )
  }
}