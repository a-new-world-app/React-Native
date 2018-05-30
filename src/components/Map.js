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
  TouchableOpacity,
  Alert
} from 'react-native';
import {merge} from 'lodash';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import {createPath, updatePath, endPath, currentPath} from '../actions/pathActions';
import * as Submition from '../util/submition';
import {selectedLandmarks} from '../util/landmarks';


var {height, width} = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Map extends Component<{}> {


  constructor(props){
    super(props)
    this.mapRef = null
    this.state = {
      initialPos: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      currentPos: {
        latitude: 0,
        longitude: 0
      },
      description: "",
      landmarkPos: [],
      steps: this.props.path.steps || [],
      pathId: this.props.path.id,
      nextLocation: this.props.path.nextLocation,
      startPoint: this.props.path.start_point,
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
    this.props.currentPath(this.props.sessionToken)
    await navigator.geolocation.getCurrentPosition((pos) => {
      let lat = parseFloat(pos.coords.latitude)
      let lng = parseFloat(pos.coords.longitude)


      let initialRegion = {
        latitude:lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({initialPos: initialRegion,
      currentPos: initialRegion})

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
        currentPos: currentRegion,
        landmarkPos: selectedLandmarks(currentRegion.latitude, currentRegion.longitude)})


      }
    )

  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps)
    if(this.props !== nextProps){
      this.setState({
        steps: nextProps.path.steps || [],
        pathId: nextProps.path.id,
        nextLocation: nextProps.path.nextLocation,
        startPoint: nextProps.path.start_point,
      })
    }
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId)

  }

  updateDescription = (field) => {
    this.setState({description: field});
  }


  chooseLocation = (location) => {
    console.log('chooseLocation', location)
    const nextLocation = {latitude: location.pos.latitude, longitude: location.pos.longitude}
    console.log(this.compilePath(nextLocation))
    if(this.state.pathId) {
      this.props.updatePath(this.props.sessionToken,
                            this.state.pathId,
                            this.compilePath(nextLocation))
    } else {
      this.props.createPath(this.props.sessionToken,
        {path:{
        'start_point': {
          latitude: location.pos.latitude,
          longitude:location.pos.longitude
          }
        }
      })
    }
  }

  compilePath = (nextLocation = this.state.nextLocation, step) =>{
    let steps = this.state.steps;
    if(step){
      steps.push(step)
    };

    return {
    steps: steps,
    nextLocation,
    start_point: this.state.startPoint,
    id: this.state.pathId,
    }
  }

  handleSubmit = () => {
    let curLat = this.state.currentPos.latitude;
    let curLng = this.state.currentPos.longitude;
    let landMarkLat = this.state.landmarkPos[0].pos.latitude;
    let landMarkLng = this.state.landmarkPos[0].pos.longitude;

    if(!Submition.isDescriptionValid(this.state.description) ){
      Alert.alert(
        'Alert',
        'Please write the description of your path.',
        [
          {text: 'OK', onPress: () => {}},
        ],
        { onDismiss: () => {} }
      )
    } else if (!Submition.isCloseToLandmark(curLat,curLng,landMarkLat,landMarkLng)){

      Alert.alert(
        'Alert',
        'Go closer to the Landmark!',
        [
          {text: 'OK', onPress: () => {}},
        ],
        { onDismiss: () => {} }
      )
    }
    else {
    console.log("handleSubmit")
    let endPosition = this.state.nextLocation;
    let nextStep = {end_point: endPosition, description: this.state.description}
    if(this.state.steps.length === 0){
      nextStep.start_point = this.state.startPoint;
    } else {
      nextStep.start_point = this.state.steps[this.state.steps.length - 1].end_point
    }
    this.props.updatePath(this.props.sessionToken, this.state.pathId, this.compilePath(null ,nextStep))
    }
  }

  nextLocation = (steps) => {
    console.log(steps)
    if(!steps) return null;

    let step = steps[steps.length - 1];
    if(step.end_point) {
       return {latitude: step.end_point.latitude, longitude: step.end_point.longitude}
    } else {
      return {latitude: step.start_point.latitude, longitude: step.start_point.longitude}
    }
  }

  endPath = () => {
    this.props.endPath(this.props.sessionToken);
  }


  render() {
    console.log("render", this.state)
    console.log('props', this.props)
    let alertMessage = this.state.startPoint ? "Please choose start location" : 'Please choose next location'
    let markers = null;
    if (this.state.nextLocation) {
      console.log("nextLocatoin", this.state.nextLocation)
      markers = [this.state.nextLocation].map((landmark) => {
        return(
          <MapView.Marker
           coordinate = {{latitude: landmark.latitude, longitude: landmark.longitude}}>

        </MapView.Marker>
        )
      }
      )

    } else {
      markers = this.state.landmarkPos.map((landmark) => {
        console.log('landmarkpos', landmark.pos.latitude)
        let name = landmark.name
        return(
          <MapView.Marker
          key={Math.random()}
           coordinate = {landmark.pos}
           onPress = {() =>
              Alert.alert(
                'Alert',
                `Go to ${name}?`,
                [
                  {text: 'No', onPress: () => {}},
                  {text: 'OK', onPress: () => this.chooseLocation(landmark)},
                ],
                { onDismiss: () => {} }
              )}>

        </MapView.Marker>
        )
      }
      )
    }
    return (
      <KeyboardAvoidingView
      enabled
      behavior = 'position'
      style={styles.container}>
        <MapView
          ref = {(ref) => this.mapRef = ref}
          style={styles.map}
          initialRegion = {this.state.initialPos}>
          <MapView.Marker
             coordinate = {this.state.currentPos}>
             <View style={styles.radius}>
               <View style={styles.marker}></View>
             </View>
          </MapView.Marker>

          {markers}
        </MapView>

        <TextInput
          multiline = {true}
          numberOfLines = {8}
          editable = {true}
          maxLength = {500}
          style ={styles.input}
          value = {this.state.description}
          placeholder = 'Please describe your path'
          onChangeText = { (field) => this.updateDescription(field)}>
        </TextInput>


        <View style={styles.buttons}>
          <View style = {styles.iconContainer}>
          <TouchableOpacity
            style = {styles.button}
            onPress={this.handleSubmit}>
            <Text style={styles.text}>
              <Icon name="paper-plane" size={30} color="#EBBF92" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
              <Icon name="camera" size={30} color="#EBBF92" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}
              onPress = {this.endPath}>
              <Icon name="times" size={32 } color="#EBBF92" />
            </Text>
          </TouchableOpacity>

          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}> Submit</Text>
            <Text style={styles.text}> Add Photo</Text>
            <Text style={styles.text}> End </Text>
          </View>
        </View>


      </KeyboardAvoidingView>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    // backgroundColor:'#FFF033'
  },
  map: {
    height: height/1.7,
    width: width,

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
    height: height/4.5,
    textAlignVertical: 'top',
    padding: 20,
    // marginTop:'3%',
    fontFamily:'serif',
    borderColor: '#6CB397',
    borderWidth:5,
    borderTopRightRadius: 20,
    fontSize:16,
    fontWeight:'700',
    color:'grey',

  },
  buttons:{
    flexDirection:'column',
    justifyContent:'space-between',
    height:'17%',
    // marginTop:'3%',
    paddingTop:'-2%',
    backgroundColor:'#8AC8DD'
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:'60%',
    paddingTop:'2%',
    paddingLeft:'5%',
    paddingRight:'5%',
  },
  button: {
    width: '18%',
    borderRadius: 50,
    backgroundColor:'#0D417A',
    padding: 17
  },
  textContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    top:'-4%',
    paddingLeft:'5%',
    paddingRight:'3%',
  },
  text:{
    color:'white',
    fontWeight:'700',
    fontSize:15,
  }

});




const mapStateToProps = (state) => ({
  sessionToken: state.session.sessionToken,
  path: state.path
})
const mapDispatchToProps = (dispatch) => ({
  createPath: (token, path) => createPath(token, path, dispatch),
  updatePath: (token, pathId, path) => updatePath(token, pathId, path, dispatch),
  currentPath: (token) => currentPath(token, dispatch),
  endPath: (token) => dispatch(endPath(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
