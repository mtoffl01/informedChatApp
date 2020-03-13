import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  TextInput, // 1. <- Add this
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = { name: '' }
  }
  render() {
    return (
      <View>
        <Text style={styles.prompt}>Hello. What's your name?</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Guest"
          value={this.state.name}
          onChangeText={(name) => {this.setState({ name })}}
        />
        <TouchableOpacity>
          <Text
          style={styles.buttonText}
          onPress={()=> this.props.navigation.navigate('Chat', { name: this.state.name })}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  prompt: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    color: 'pink'
  }
});

export default Main;
