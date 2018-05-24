import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class RobotInstuctions extends Component<Props> {
  render() {
    const styles = {
      container: {
        flexDirection: 'row',
        height: 100
      }
    }
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.job}
        </Text>
      </View>
    )}
}
