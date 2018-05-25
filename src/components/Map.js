import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  KeyboardAvoidingView,
  PermissionsAndroid,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';


var {height, width} = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


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
      },
      description: "please describe the path"
    }
  }

  watchID: number = null;

  async  requestMapPermission() {
  try {

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}
  async componentDidMount(){
    await navigator.geolocation.getCurrentPosition((pos) => {
      let lat = parseFloat(pos.coords.latitude)
      let lng = parseFloat(pos.coords.longitude)
      console.log('pos', lat, lng)

      let initialRegion = {
        latitude:lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({initialPos: initialRegion,
      markerPos: initialRegion},console.log('state'))

    },
    (error) => console.log(JSON.stringify(error)),
   {enableHighAccuracy: true, timeout:20000, maximumAge:100})



    this.watchID = navigator.geolocation.watchPosition(
      (pos) => {
        let lat = parseFloat(pos.coords.latitude)
        let lng = parseFloat(pos.coords.longitude)
        let currentRegion = {
          latitude:lat,
          longitude: lng,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }

        this.setState({initialPos: currentRegion,
        markerPos: currentRegion})


      }
    )
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId)
  }

  updateDescription = (field) => {
    this.setState({description: field});
  }

  render() {
    console.log('render', this.state.initialPos)
    return (
      <KeyboardAvoidingView
      enabled
      behavior = 'position'
      style={styles.container}>
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
        <TextInput
          multiline = {true}
          numberOfLines = {8}
          editable = {true}
          maxLength = {500}
          style ={styles.input}
          value = {this.state.description}
          onChangeText = { (field) => this.updateDescription(field)}>
        </TextInput>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Submit Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.text}>Submit Description</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}



const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  map: {
    // position: 'absolute',
    // top:0,
    // left:0,
    // right:0,
    // bottom:1/2 * height,
    height: height/2,
    width: width
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
  },
  input:{
    width: width,
    height: height/4,
    textAlignVertical: 'top',
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:'10%'
  },
  button: {
    flexDirection: 'row',
    height: '100%',
    width: '35%',
    margin:'5%',
    backgroundColor:'#a1c3e6',
  },
  text:{
    margin: 'auto',
    fontSize:13,
  }

});
