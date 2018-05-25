import React from "react";
import {
  Stylesheet,
  TextInput,
  View,
  Button,
  Linking,
  Text
} from "react-native";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenURL = this.handleOpenURL.bind(this);
  }

  componentDidMount() {
    Linking.addEventListener("url", this.handleOpenURL);

    Linking.getInitialURL().then(url => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleOpenURL);
  }

  handleOpenURL({ url }) {
    const [, token] = url.match(/token=([^#]+)/);
    this.setState({ token });
    this.props.logIn(token);
  }

  handleSubmit() {
    fetch("https://a-new-world.herokuapp.com/api/paths", {
      body: JSON.stringify({
        path: { pathData: { description: this.state.description } }
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      credentials: "include"
    }).then(console.log);
  }

  handleChange(description) {
    this.setState({ description });
  }

  handleLogin() {
    Linking.openURL("https://a-new-world.herokuapp.com/auth/google");
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>{this.props.user.sessionToken}</Text>
        <TextInput
          multiline
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <Button onPress={this.handleSubmit} title="Submit" />
        <Button onPress={this.handleLogin} title="Log In With Google" />
        <Button onPress={this.props.logOut} title="Log Out" />
      </View>
    );
  }
}
