import React, {Component, Dimensions} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class RobotInstuctions extends Component < Props > {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
    this.updateWorkers = this
      .updateWorkers
      .bind(this)
    this.changeCount = this
      .changeCount
      .bind(this)
  }

  changeCount(input) {
    this.setState({count: Number(input)})
  }

  updateWorkers(input) {
    this
      .props
      .update(this.props.job.toLowerCase(), input)
  }

  render() {
    const styles = {
      container: {
        top: '50%',
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "space-between"
      },
      numberCont: {
        flexDirection: 'row'
      },

      job: {
        color: '#3D8390',
        fontSize: 30,
        fontWeight: '700'
      },
      buttonStyle: {
        width: 40,
        height: 40,
        backgroundColor: '#2DCDA7',
        // backgroundColor: '#3487C4'
      },

      buttonLabel: {
        height: 40,
        fontSize: 30,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center'
      },

      input: {
        // backgroundColor: '#F5CD1D',
        backgroundColor: '#EAEEDF',
        width: 80,
        height: 40,
        // color:'#A71A05',
        color: '#D296A0',
        fontSize: 17,
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center'
      }
    }
    return (

      <View style={styles.container}>
        <Text style={styles.job}>
          {this.props.job}
        </Text>
        <View style={styles.numberCont}>
          <TouchableOpacity
            title="-"
            style={styles.buttonStyle}
            onPress={() => this.updateWorkers(this.state.count - 1)}>
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
          <TouchableOpacity
            title="+"
            style={styles.buttonStyle}
            onPress={() => this.updateWorkers(this.state.count + 1)}>
            <Text style={styles.buttonLabel}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}
