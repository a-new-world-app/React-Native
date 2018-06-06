import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TutorialButton extends React.Component{
  render(){
    return(

      <TouchableOpacity style={styles.tutorialButton}>
        <Icon name="question-circle" size={30} color="#F8F6E7"/>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  tutorialButton: {
    position: 'absolute',
    top: '2%',
    left: '5%',
    width: 40,
    height: 40,
  }
});

export default TutorialButton;
