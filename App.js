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



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}>
           <MapView.Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
            />
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
});
