import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Linking,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  Alert,
} from "react-native";

import { submitPath } from "../utils/pathAPIUtils";
import { submitAgreement } from "../utils/sessionAPIUtils";

// import {submitPath} from "../utils/pathAPIUtils";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       description: "",
       openModal: false,
       hasUserAgreed: this.props.term};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenURL = this.handleOpenURL.bind(this);

  }

  componentDidMount() {
    Linking.addEventListener("url", this.handleOpenURL);

    Linking
      .getInitialURL()
      .then(url => {
        if (url) {
          this.handleOpenURL({url});
        }
      });
  }

  componentDidUpdate() {
    if (this.props.user.sessionToken ) {
      this.props.navigation.navigate("HomeScreen");
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleOpenURL);
  }

  handleOpenURL({url}) {
    const [,
      token] = url.match(/token=([^#]+)/);
    this.setState({token});
    this
      .props
      .logIn(token);
  }

  handleSubmit() {
    this.props.submitAgreement(this.props.user.sessionToken, this.state.hasUserAgreed);
  }

  handleChange(description) {
    this.setState({description});
  }

  handleLogin() {
    Linking.openURL("https://a-new-world.herokuapp.com/auth/google");
  }



  render() {
    console.log('modal',this.state);
    console.log('userInfo', this.props.user);
    return (
      <ImageBackground source={require('../../assets/background/login.png')}
                style={styles.backgroundImage}>
      <Image source={require('../../assets/background/landing.png')}
        style = {styles.robots}>
      </Image>
      <Image source={require('../../assets/background/logo.png')}
        style = {styles.logo}>
      </Image>
      <View style={{marginTop: '30%', alignItems: 'center'}} >

        <TouchableOpacity style = {styles.button}
          onPress={this.handleLogin}

          >
          <Text style = {styles.label}>Log In With Google </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress={this.props.logOut} >
          <Text style = {styles.label}>Log Out </Text>
        </TouchableOpacity>

        

        <TouchableOpacity style = {styles.button} onPress={() => this.setState({openModal:true})} >
          <Text style = {styles.label}> Agreement </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

// <Text>{this.props.user.sessionToken}</Text> <TextInput   multiline
// value={this.state.description}   onChangeText={description => this.setState({
// description })} /> <Button onPress={this.handleSubmit} title="Submit" />
const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1
  },
  robots: {
    top: '5%',
    height: '20%',
    width: '100%'
  },
  logo: {
    top: '15%',
    left: '12%',
    width: '80%',
    height: '30%'
  },
  button: {
    paddingTop: '2%',
    height: 50,
    width: '50%',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#dd4b39'
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
  }
});
