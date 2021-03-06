import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setUserName } from '../redux/userReducer'
import { Tabs } from '../navigation/myBottomTabNavigator'
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
          onPress={()=> {
            this.props.setUserName(this.state.name);
            this.props.navigation.navigate('Bio');
          }}
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

const mapStateToProps = (state) => ({
  name: state.user.name
})

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => { dispatch(setUserName(name)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
