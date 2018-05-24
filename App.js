/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';




export default class App extends Component<{}> {
  constructor(props){
    super(props)

    this.state = {
      initialPos: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markerPos: {
        latitude: 37.78825,
        longitude: -122.4324
      }
    }
  }

  watchID: number = null;



  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion = {this.state.initialPos}>
          <MapView.Marker
             coordinate = {this.state.markerPos}>
             <View style={styles.radius}>
               <View style={styles.marker}></View>
             </View>
          </MapView.Marker>
        </MapView>
      </View>
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
  map: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  radius: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    overflow:'hidden',
    borderWidth:1,
    borderColor: 'rgba(0,112,225,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    borderWidth:3,
    borderColor: 'white',
    backgroundColor:'#007AFF'

  }
});
