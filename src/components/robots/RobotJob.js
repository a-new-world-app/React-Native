import React, {Component, Dimensions} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';

export default class RobotInstuctions extends Component <Props> {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
    this.updateWorkers = this
      .updateWorkers
      .bind(this)
    this.changeCount = this.changeCount.bind(this)
  }

  changeCount(input) {
    console.log("changeCount", input)
    this.setState({count: Number(input)})
  }

  updateWorkers(input) {
    this.props.update(this.props.job, input)
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
      numberCont: {
        flexDirection: 'row'
      },

      job: {
        fontSize: 20
      },

      buttonStyle: {
        width: 40,
        height: 40,
        backgroundColor: '#a1c3e6'
      },

      buttonLabel: {
        height: 40,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
      },

      input: {
        backgroundColor: 'white',
        lineHeight: 25,
        fontSize: 25,
        textAlign: 'center'
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.job}>
          {this.props.job}
        </Text>
        <View style={styles.numberCont}>
        <TouchableOpacity title="-"
                style={styles.buttonStyle}
                onPress={() => this.updateWorkers(this.state.count - 1)}
                >
          <Text style={styles.buttonLabel}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={this
          .state
          .count
          .toString()}
          keyboardType={"numeric"}
          onChangeText={(value) => this.changeCount(value)}
          onSubmitEditing={(number) => this.updateWorkers(this.state.count)}/>
          <TouchableOpacity title="+"
                style={styles.buttonStyle}
                onPress={() => this.updateWorkers(this.state.count + 1)}>
            <Text style={styles.buttonLabel}>+</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
}
