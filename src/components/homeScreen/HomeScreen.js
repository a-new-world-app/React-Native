import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';


export default class HomeScreen extends React.Component<Props> {

  goCreateRoute = () => this.props.navigation.navigate('CreateRoute')

  goRobotBuild = () => this.props.navigation.navigate('RobotBuild')

  goRobotInstructions = () => this.props.navigation.navigate('RobotInstructions')

  render() {
    const robotPic = require('../../../assets/robots/robo1.png');
    const styles = {
      main: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80%'
      },
      welcome: {
        fontSize: 30
      },
      button: {
        backgroundColor: 'lightgreen',
        height: 40,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      },
      buttonLabel: {
        fontSize: 20
      }
    }
    return(
      <View style={styles.main}>
        <Image source={robotPic} />
        <Text style={styles.welcome}>Hello, what do you want to do? </Text>
        <TouchableOpacity style={styles.button}
                          onPress={this.goCreateRoute}>
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
                          onPress={this.goRobotInstructions}>
          <Text>Manage Robots</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
                          onPress={this.goRobotBuild}>
          <Text>Build Robots</Text>
        </TouchableOpacity>
      </View>
    );
  }
}