import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {request} from '../utils/APIUtils';

class TakePicture extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
          this.camera = ref;
        }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}/>
        <View
          style={{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TouchableOpacity
            onPress={this
            .takePicture
            .bind(this)}
            style={styles.capture}>
            <Text style={{
              fontSize: 14
            }}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function () {
    if (this.camera) {
      console.log('taking picture');
      const options = {
        quality: 0.5,
        base64: true
      };
      const data = await this
        .camera
        .takePictureAsync(options);
      console.log(data);

      var xhr = new XMLHttpRequest();
      var picture = {
        uri: data.uri,
        type: 'image/jpeg',
        name: 'picture.jpg'
      };

      var body = new FormData();
      body.append('picture', picture);

      xhr.open('POST', "https://a-new-world.herokuapp.com/api/paths/images");
      xhr.send(body);
      xhr.onload = () => this
        .props
        .handlePicture(xhr.response);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

const mapStateToProps = state => ({user: state.session});

export default connect(mapStateToProps)(TakePicture);
