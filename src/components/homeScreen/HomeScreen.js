import React from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity,
ImageBackground} from 'react-native';


export default class HomeScreen extends React.Component<Props> {

  goCreateRoute = () => this.props.navigation.navigate('Map')

  goRobotBuild = () => this.props.navigation.navigate('RobotBuildContainer')

  goRobotInstructions = () => this.props.navigation.navigate('RobotInstuctionsContainer')

  render() {
    const robotPic = require('../../../assets/robots/robo1.png');

    return(
      <ImageBackground source={require('../../../assets/background/homeScreen.jpeg')}
                style={styles.backgroundImage}>
      <View style={styles.main}>
        <Image source={robotPic} style={styles.Bob} />
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
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({

  backgroundImage: {
       flex: 1,
       resizeMode: 'center'
   },
   main: {
     justifyContent: 'space-around',
     alignItems: 'center',
     height: '80%'
   },
   Bob: {
     top: '10%',
     width: '40%',
     height: '43%'
   },
   welcome: {
     top: '3%',
     fontSize: 25,
     color:'white',
     fontWeight:'700',
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
})
