import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
// import {merge} from 'lodash'

import RobotJob from './RobotJob.js';

export default class RobotInstuctions extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      id: 1,
      pic: require("../../../assets/robots/robo1.png"),
      next: require("../../../assets/robots/robo2.png"),
      jobs: {
        Waiting: 100,
        Exploring: 1,
        Carrying: 1,
        Building: 1,
      },
      alert: false,
    }
    
    this.updateWorkers = this.updateWorkers.bind(this)
  };

  updateWorkers(string, input){
    console.log("input", input)
    const number = Number(input)
    console.log("jobs", this.state.jobs)
    const unemployed = this.state.jobs.Waiting 
    let nextUnemployed = unemployed - (input - this.state.jobs[string])
    console.log("number", number)
    if (number % 1 !== 0) {
      Alert.alert("You can't have partial robots")
      // this.setState({jobs: {[string]: this.state.jobs[string]}})
    }else if(Math.sign(number) === -1) {
      Alert.alert("You can't have less than zero workers")
    }else if(Math.sign(nextUnemployed) === -1){
      Alert.alert("You don't have that many robots")
    }else{
      // let newJobs = this.state.jobs.dup
      // console.log("newjobs", newJobs, this.state.jobs)
      jobs = Object.assign({},this.state.jobs, {[string]: Number(input), Waiting: nextUnemployed} )
      console.log("else", jobs)
      this.setState({jobs: jobs})
    }
  }

  componentDidMount(){
    
  }

  render() {
    // const picLoc =require(`./assets/robots/${this.state.pic}`)
    // console.log(picLoc)
    // const picLoc =`./assets/robots/robo1.png`
    console.log("render", this.state)
    this.state.alert ? <AssignmentAlert messsage={this.state.alert} /> : '';
    return (
      <KeyboardAvoidingView 
        enabled
        behavior='padding'
        style={styles.container}>
        {this.state.alert}
        <Image  source={this.state.pic} />
        <TouchableOpacity onPress={() => console.log('hello')}
                          style= {styles.nextOpac} >
          <Image  source={this.state.next}
                  onClick= {() => console.log('hello')} 
                  style={styles.nextRobot}/>
        </ TouchableOpacity>
        <Text style={styles.welcome}>
          Good at ... well nothing but tries REALLY hard.
        </Text>
        <Text style={styles.welcome}>
          Waiting: {this.state.jobs.Waiting}
        </Text>
        {
          Object.keys(this.state.jobs)
                .slice(1)
                .map((job) => <RobotJob key={job + this.state.jobs[job]} 
                                        job={job} 
                                        count={this.state.jobs[job]}
                                        update={this.updateWorkers}
                                        />
                    )
        }
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  nextOpac: {
    height: 70,
    width: 70,
    position: 'absolute',
    right: '5%',
    top: '30%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5, 
    borderColor: '#cdcdcd'
  },
  nextRobot: {
    width: 70,
    height: 70
  }
});