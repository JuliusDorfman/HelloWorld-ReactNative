import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    // TODO: Get username and password values
    console.log(this._username, this._password);
  }


  render() {
    return (
      <View style={styles.container}>

        <Text>Username</Text>
        <TextInput
          ref={input => this._username = input}
        />
        <Text>Password</Text>
        <TextInput
          ref={input => this._password = input}
        />

        <Button title={"Hello"} onPress={this.buttonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
