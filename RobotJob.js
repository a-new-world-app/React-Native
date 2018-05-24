import React, {Component, Dimensions} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class RobotInstuctions extends Component < Props > {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
    this.updateWorkers = this
      .updateWorkers
      .bind(this)
  }

  updateWorkers(string) {
    let number = Number(string)
    if (number % 1 !== 0) {
      alert()
    }
    this.setState({count: Number(string)})
  }

  render() {
    // console.log(Dimensions) let width = Dimensions.get('window').width;
    const styles = {
      container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        justifyContent: "space-between",
        borderBottomColor: 'grey',
        borderBottomWidth: 1
      },

      job: {
        fontSize: 20
      },

      input: {
        backgroundColor: 'white',
        lineHeight: 25
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.job}>
          {this.props.job}
        </Text>
        <TextInput
          style={styles.input}
          value={this
          .state
          .count
          .toString()}
          keyboardType={"numeric"}
          onChangeText={(number) => this.updateWorkers(number)}/>
      </View>
    )
  }
}
