import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setBio } from '../redux/userReducer'
import {
  StyleSheet,
  TextInput, // 1. <- Add this
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class Bio extends React.Component {

  constructor(props){
    super(props)
    this.state = { bio: '' }
  }
  render() {
    return (
      <View>
        <Text style={styles.prompt}>Thanks. Now, tell us about yourself.</Text>
        <Text style={styles.example}>Ex: I'm new to the app. I'm here to connect.</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="I'm new to the app. I'm here to connect."
          value={this.state.bio}
          onChangeText={(bio) => {this.setState({ bio })}}
        />
        <TouchableOpacity>
          <Text
          style={styles.buttonText}
          onPress={()=> {
            this.props.setBio(this.state.bio);
            this.props.navigation.navigate('Tabs');
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
  example: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: 13,
    fontStyle: "italic"
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    color: 'pink'
  }
});

const mapStateToProps = (state) => ({
  bio: state.user.bio,
  name: state.user.name
})

const mapDispatchToProps = dispatch => ({
  setBio: (bio) => { dispatch(setBio(bio)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Bio);
