import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AgreementModal from "../agreementModal.js";
import TutorialButton from "../tutorialButton.js";

export default class HomeScreen extends React.Component < Props > {

  goCreateRoute = () => this
    .props
    .navigation
    .navigate('Map')

  goRobotBuild = () => this
    .props
    .navigation
    .navigate('RobotBuildContainer')

  goRobotInstructions = () => this
    .props
    .navigation
    .navigate('RobotInstuctionsContainer')

  goRobotGather = () => this
    .props
    .navigation
    .navigate('RobotGatherContainer')

  render() {
    const robotPic = require('../../../assets/robots/robo1.png');

    return (
      <ImageBackground
        source={require('../../../assets/background/homeScreen.jpeg')}
        style={styles.backgroundImage}>
        <TutorialButton />
        
        <View style={styles.main}>
          <Image source={robotPic} style={styles.Bob}/>
          <Text style={styles.welcome}>Hello, what do you want to do?
          </Text>
          <TouchableOpacity
            style={[styles.explore, styles.button]}
            onPress={this.goCreateRoute}>
            <View style={styles.buttonLabel}>
              <Icon name="map" size={28} color="white"/>
              <Text style={styles.label}>
                Explore
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.manage, styles.button]}
            onPress={this.goRobotInstructions}>
            <View style={styles.buttonLabel}>
              <Icon name="edit" size={30} color="white"/>
              <Text style={styles.label}>Manage Robots</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.build, styles.button]}
            onPress={this.goRobotBuild}>
            <View style={styles.buttonLabel}>
              <Icon name="wrench" size={30} color="white"/>
              <Text style={styles.label}>
                Build Robots</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gather, styles.button]}
            onPress={this.goRobotGather}>
            <View style={styles.buttonLabel}>
              <Icon name="shopping-basket" size={30} color="white"/>
              <Text style={styles.label}>Gather</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    // resizeMode: 'center'
  },
  main: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%'
  },
  Bob: {
    top: '10%',
    width: '48%',
    height: '43%',
    marginBottom: '20%'
  },
  welcome: {
    top: '3%',
    fontSize: 25,
    color: 'white',
    fontWeight: '700',
    marginBottom: '20%'
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    marginBottom: '10%',
  },
  explore: {
    backgroundColor: '#D3687A'
  },
  manage: {
    backgroundColor: '#55B3DD'
  },
  build: {
    backgroundColor: '#EEA440'
  },
  gather: {
    backgroundColor: '#aee575'
  },
  label: {
    // position:'absolute',

    textAlignVertical: 'center',
    // right: 0,
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
  },

  buttonLabel: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  }
})
