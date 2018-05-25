import React from "react";
import { Stylesheet, TextInput, View, Button, Linking, Text } from "react-native";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenURL = this.handleOpenURL.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
    console.log(url);
    const [, token] = url.match(/token=([^#]+)/);
    this.setState({token});
  };


  handleSubmit() {
    fetch("https://a-new-world.herokuapp.com/api/paths", {
      body: JSON.stringify({
        path: { pathData: { description: this.state.description } }
      }),
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this.state.token}` },
      credentials: "include"
    }).then(console.log);
  }

  handleChange(e) {
    this.setState({description: e.target.value})
  }

  handleLogin() {
    Linking.openURL('https://a-new-world.herokuapp.com/auth/google');
  }

  handleLogout() {
    this.setState({token: null})
  }

  render() {
    return (
      <View>
        <Text>{this.state.token}</Text>
        <TextInput
          multiline
          value={this.state.description}
          onChange={this.handleChange}
        />
        <Button onPress={this.handleSubmit} title="Submit" />
        <Button onPress={this.handleLogin} title="Log In With Google" />
        <Button onPress={this.handleLogout} title="Log Out" />
      </View>
    );
  }
}
