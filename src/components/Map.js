import React, {Component} from "react";
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
} from "react-native";
import {merge} from "lodash";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import {connect} from "react-redux";
import {createPath, updatePath, endPath, currentPath} from "../actions/pathActions";
import * as Submition from "../util/submition";
import {selectedLandmarks} from "../util/landmarks";
import Camera from "./Camera";
import {updateGameData} from "../actions/gameDataActions";

var {height, width} = Dimensions.get("window");

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component < {} > {
  constructor(props) {
    super(props);
    this.mapRef = null;
    this.state = {
      showCamera: false,
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
      endImageURL: 'null',
      landmarkPos: [],
      steps: this.props.path.steps || [],
      pathId: this.props.path.id,
      nextLocation: this.props.path.nextLocation,
      startPoint: this.props.path.start_point
    };
  }
  watchID: number = null;

  async requestMapPermission() {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: "Cool Photo App Camera Permission",
        message: "Cool Photo App needs access to your camera so you can take awesome pictures."
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
  async componentDidMount() {
    this
      .props
      .currentPath(this.props.sessionToken);
    await navigator
      .geolocation
      .getCurrentPosition(pos => {
        let lat = parseFloat(pos.coords.latitude);
        let lng = parseFloat(pos.coords.longitude);

        let initialRegion = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };
        this.setState({initialPos: initialRegion, currentPos: initialRegion});
      }, error => console.log(JSON.stringify(error)), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 100
      });

    this.watchID = navigator
      .geolocation
      .watchPosition(pos => {
        let lat = parseFloat(pos.coords.latitude);
        let lng = parseFloat(pos.coords.longitude);
        let currentRegion = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };

        this.setState({
          initialPos: currentRegion,
          currentPos: currentRegion,
          landmarkPos: selectedLandmarks(currentRegion.latitude, currentRegion.longitude, this.previousLandmarks())
        });
      });
  }

  previousLandmarks = (theState = this.state) => {
    const previous = [];
    if (this.state.startPoint) {
      console.log('path')
      previous.push(this.state.startPoint.name);
    }
    if (this.state.startPoint) {
      previous.push(this.state.startPoint.name)
    }
    if (this.state.nextLocation) 
      (previous.push(this.state.nextLocation.name))
    this
      .state
      .steps
      .forEach(step => previous.push(step.end_point.name));
    console.log('previous', previous)
    return previous;
  };

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    if (this.props !== nextProps) {
      this.setState({
        steps: nextProps.path.steps || [],
        pathId: nextProps.path.id,
        nextLocation: nextProps.path.nextLocation,
        startPoint: nextProps.path.start_point,
        landmarkPos: selectedLandmarks(this.state.currentPos.latitude, this.state.currentPos.longitude, this.previousLandmarks())
      });
    }
  }

  componentWillUnmount() {
    navigator
      .geolocation
      .clearWatch(this.watchId);
  }

  showCamera = () => {
    this.setState({showCamera: true});
  };

  handlePicture = url => {
    console.log(url);
    this.setState({showCamera: false, endImageURL: url});
  };

  updateDescription = field => {
    this.setState({description: field});
  };

  chooseLocation = location => {
    const nextLocation = {
      resource: location.resource,
      name: location.name,
      latitude: location.pos.latitude,
      longitude: location.pos.longitude
    };
    if (this.state.pathId) {
      this
        .props
        .updatePath(this.props.sessionToken, this.state.pathId, this.compilePath(nextLocation));
    } else {
      this.setState({
        nextLocation: {
          resource: location.resource,
          name: location.name,
          latitude: location.pos.latitude,
          longitude: location.pos.longitude
        }
      });
    }
  };

  compilePath = (nextLocation = this.state.nextLocation, step) => {
    let steps = this.state.steps;
    if (step) {
      steps.push(step);
    }

    return {steps: steps, nextLocation, start_point: this.state.startPoint, id: this.state.pathId};
  };

  resetFields = () => {
    this.setState({description: "", endImageURL: 'null'});
  };

  handleSubmit = () => {
    let curLat = this.state.currentPos.latitude;
    let curLng = this.state.currentPos.longitude;
    let landMarkLat = this.state.landmarkPos[0].pos.latitude;
    let landMarkLng = this.state.landmarkPos[0].pos.longitude;

    if (!this.state.startPoint) {
      // if (!Submition.isCloseToLandmark(curLat, curLng, landMarkLat, landMarkLng)) {
      //   Alert.alert('Alert', 'Go closer to the Landmark!', [     {       text:
      // 'OK',       onPress: () => {}     }   ], {     onDismiss: () => {}   }); }
      // else
      if (!this.state.endImageURL) {
        Alert.alert("Alert", "Please take a picture of the landmark first.", [
          {
            text: "OK",
            onPress: () => {}
          }
        ], {
          onDismiss: () => {}
        });
      } else {
        this
          .props
          .createPath(this.props.sessionToken, {
            path: {
              start_point: this.state.nextLocation
            }
          });
      }
      this.resetFields();
      return;
    }

    if (!Submition.isDescriptionValid(this.state.description)) {
      Alert.alert("Alert", "Please write the description of your path.", [
        {
          text: "OK",
          onPress: () => {}
        }
      ], {
        onDismiss: () => {}
      });
    } else if (!this.state.endImageURL) {
      Alert.alert("Alert", "Please take a picture of the landmark first.", [
        {
          text: "OK",
          onPress: () => {}
        }
      ], {
        onDismiss: () => {}
      });
    } else {
      // } else if (!Submition.isCloseToLandmark(curLat, curLng, landMarkLat,
      // landMarkLng)) {   Alert.alert('Alert', 'Go closer to the Landmark!', [     {
      // text: 'OK',       onPress: () => {}     }   ], {     onDismiss: () => {} });
      // } else {
      console.log("handleSubmit");
      let endPosition = this.state.nextLocation;
      endPosition.images = [this.state.endImageURL];
      let nextStep = {
        end_point: endPosition,
        description: this.state.description
      };
      if (this.state.steps.length === 0) {
        nextStep.start_point = this.state.startPoint;
      } else {
        nextStep.start_point = this.state.steps[this.state.steps.length - 1].end_point;
      }
      this
        .props
        .updatePath(this.props.sessionToken, this.state.pathId, this.compilePath(null, nextStep));

      let duppedData = this.props.gameData
      duppedData
        .gather
        .push({
          resource: endPosition.resource,
          amount: Math.floor(this.state.steps.length * 10 * Math.random())
        })
      console.log('HEEEEEEEERRRRRRRREEEEEEEEEEE', duppedData, this.props)
      this
        .props
        .updateGameData(this.props.sessionToken, duppedData);

      this.setState({
        landmarkPos: selectedLandmarks(endPosition.latitude, endPosition.longitude, this.previousLandmarks())
      })
      this.resetFields();
    }
  };

  endPath = () => {
    this
      .props
      .endPath(this.props.sessionToken);
  };

  awaitingGPS = () => {
    console.log(this.state.currentPos.latitude);
    return parseInt(this.state.currentPos.latitude) === 0;
  };

  noPath = () => !this.state.pathId;

  numberSteps = () => this.state.steps.length;

  needNextLocation = () => !this.state.nextLocation;

  needPicture = () => !this.state.endImageURL;

  needDescription = () => !this.state.description;

  closeToNextLocation = () => {
    if (this.needNextLocation) 
      return false;
    const currentLat = this.state.currentPos.latitude;
    const currentLng = this.state.currentPos.longitude;
    const targetLat = this.state.nextLocation.latitude;
    const targetLng = this.state.nextLocation.longitude;
    return Submition.isCloseToLandmark(currentLat, currentLng, targetLat, targetLng);
  };

  generatePrompt = () => {
    console.log("prompt", this.state);
    if (this.awaitingGPS()) {
      return "One sec, getting GPS";
    } else if (this.noPath() && !this.needNextLocation()) {
      return "We should go to the starting location";
    } else if (this.noPath()) {
      return "Where should we start?";
    } else if (this.needNextLocation()) {
      return "Where to next?";
    } else if (!this.closeToNextLocation()) {
      return "Let's go to next location";
    } else if (this.needPicture()) {
      return "Mind taking a picture?";
    } else if (this.needDescription()) {
      return "Please describe how we got here";
    } else {
      return "Please submit";
    }
  };

  enableTakePicture = () => {
    return this.state.nextLocation && this.closeToNextLocation();
  };

  enableSubmit = () => {
    return (this.enableTakePicture() && !this.needDescription() && !this.needPicture());
  };

  render() {
    console.log(this.enableTakePicture());
    let markers;
    if (this.state.nextLocation) {
      markers = [this.state.nextLocation].map(landmark => {
        return (<MapView.Marker
          key={landmark
          .latitude
          .toString() + landmark
          .longitude
          .toString()}
          coordinate={{
          latitude: landmark.latitude,
          longitude: landmark.longitude
        }}/>);
      });
    } else {
      markers = this
        .state
        .landmarkPos
        .map(landmark => {
          console.log("landmarkpos", landmark.pos.latitude);
          let name = landmark.name;
          return (<MapView.Marker
            key={Math.random()}
            coordinate={landmark.pos}
            onPress={() => Alert.alert("Alert", `Go to ${name}?`, [
            {
              text: "No",
              onPress: () => {}
            }, {
              text: "OK",
              onPress: () => this.chooseLocation(landmark)
            }
          ], {
            onDismiss: () => {}
          })}/>);
        });
    }
    return (
      <KeyboardAvoidingView enabled behavior="position" style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.prompt}>{this.generatePrompt()}</Text>

          <MapView
            ref={ref => (this.mapRef = ref)}
            style={styles.map}
            initialRegion={this.state.initialPos}>
            <MapView.Marker coordinate={this.state.currentPos}>
              <View style={styles.radius}>
                <View style={styles.marker}/>
              </View>
            </MapView.Marker>

            {markers}
          </MapView>

          {this.needNextLocation()
            ? (<View/>)
            : (<TextInput
              multiline={true}
              numberOfLines={8}
              editable={true}
              maxLength={500}
              style={styles.input}
              value={this.state.description}
              placeholder="Please describe your path"
              onChangeText={field => this.updateDescription(field)}/>)}

          <View style={styles.buttons}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={this.enableSubmit()
                ? styles.button
                : styles.buttonDisable}
                onPress={this.handleSubmit}>
                <Text style={styles.text}>
                  <Icon name="paper-plane" size={30} color="#EBBF92"/>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={this.enableTakePicture()
                ? styles.button
                : styles.buttonDisable}
                onPress={this.showCamera}>
                <Text style={styles.text}>
                  <Icon name="camera" size={30} color="#EBBF92"/>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.text} onPress={this.endPath}>
                  <Icon name="times" size={32} color="#EBBF92"/>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Submit</Text>
              <Text style={styles.text}>Add Photo</Text>
              <Text style={styles.text}>End</Text>
            </View>
          </View>
          {this.state.showCamera && (<Camera handlePicture={this.handlePicture}/>)}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: height
  },

  wrapper: {
    height: height
  },

  prompt: {
    height: 50,
    textAlignVertical: "center",
    textAlign: "center",
    position: "relative"
  },
  map: {
    // height: height / 1.8,
    flex: 10,
    width: width
  },
  radius: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0,112,225,0.3)",
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "#007AFF"
  },

  input: {
    width: width,
    height: height / 4.5,
    textAlignVertical: "top",
    padding: 20,
    // marginTop:'3%',
    fontFamily: "serif",
    borderColor: "#6CB397",
    borderWidth: 5,
    borderTopRightRadius: 20,
    fontSize: 16,
    fontWeight: "700",
    color: "grey"
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "17%",
    // marginTop:'3%',
    paddingTop: "-2%",
    backgroundColor: "#8AC8DD"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "60%",
    paddingTop: "2%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  button: {
    width: "18%",
    borderRadius: 50,
    backgroundColor: "#0D417A",
    padding: 17
  },

  buttonDisable: {
    width: "18%",
    borderRadius: 50,
    backgroundColor: "grey",
    padding: 17
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "-4%",
    paddingLeft: "5%",
    paddingRight: "3%"
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 15
  }
});

const mapStateToProps = state => ({sessionToken: state.session.sessionToken, path: state.path, gameData: state.gameData});
const mapDispatchToProps = dispatch => ({
  createPath: (token, path) => createPath(token, path, dispatch),
  updatePath: (token, pathId, path) => updatePath(token, pathId, path, dispatch),
  currentPath: token => currentPath(token, dispatch),
  endPath: token => endPath(token, dispatch),
  updateGameData: (token, gameData) => updateGameData(token, gameData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
