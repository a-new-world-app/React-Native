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
import {saveDescription} from '../actions/Description'


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
        latitude: null,
        longitude: null
      },
      description: "please describe the path",
      landmarkPos: [
      {pos: {latitude: 37.78825, longitude: -122.4224}, name: 1},
      {pos: {latitude: 37.78725, longitude: -122.4124}, name: 2},
      {pos: {latitude: 37.78625, longitude: -122.4424}, name: 3},
      {pos: {latitude: 37.78925, longitude: -122.4524}, name: 4},
      {pos: {latitude: 37.79025, longitude: -122.4624}, name: 5},
    ],
      path:null,
      currentStep: {}
      steps:[],
      nextLocation:null,
      pathID: null,
    }
    this.handleDescription = this.handleDescription.bind(this);
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
        currentPos: currentRegion})


      }
    )

  }


  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId)

  }

  updateDescription = (field) => {
    this.setState({description: field});
  }

  handleDescription(e) {
    e.preventDefault();
    this.props.saveDescription(this.state.description);
  }

  handleSubmit = () => {
    if(this.state.pathID){

    } else {
      
    }
  }

  chooseLocation = (location) => {
    if(this.state.path) {
      this.setState({nextLocation: location})
    } else {
      this.setState({path:{
        'start_point':location.pos}
      },
      {currentStep:{
        'start_point': location.pos
      }})
    }
  }

  render() {
    console.log("render", this.state)
    let alertMessage = this.state.path ? "please choose next step" : 'please choose starting location'
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

          {this.state.landmarkPos.map((landmark) => {
            return(
              <MapView.Marker
              key={Math.random()}
               coordinate = {landmark.pos}
               onPress = {() =>
                  Alert.alert(
                    'Alert',
                    'Go to this location?',
                    [
                      {text: 'No', onPress: () => {}},
                      {text: 'OK', onPress: () => this.chooseLocation(landmark)},
                    ],
                    { onDismiss: () => {} }
                  )}>

            </MapView.Marker>
            )
          }
          )}
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
          <View style = {styles.iconContainer}>
          <TouchableOpacity
            style = {styles.button}
            onPress={this.handleDescription}>
            <Text style={styles.text}>
              <Icon name="paper-plane" size={30} color="#EBBF92" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
              <Icon name="camera" size={30} color="#EBBF92" />
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}> Submit</Text>
            <Text style={styles.text}> Add Photo</Text>
          </View>
        </View>

        {  this.state.currentStep ? '' :
          Alert.alert(
          'Next Location',
          alertMessage,

          [
            {text: 'OK', onPress: () => {}},
          ],
          { onDismiss: () => {} }
        )}>
        }

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
    padding: 16
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





const mapDispatchToProps = (dispatch) => ({
  saveDescription: (description) => dispatch(saveDescription(description))
});

export default connect(null, mapDispatchToProps)(Map);
