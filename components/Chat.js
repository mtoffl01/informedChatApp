import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../Fire';

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat',
  });

  constructor(){
    super();
    this.state = {
      name: '',
      messages: []
    }
  }

  componentDidMount(){
    Fire.shared.on(message => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message)
      }))
    })
    // console.log('props', this.props)
  }

  componentWillUnmount(){
    Fire.shared.off();
  }

  get user() {
    // Return our name and our UID for GiftedChat to parse
    return {
      name: this.props.route.params.name,
      _id: Fire.shared.uid,
    };
  }
  // componentDidMount(){
  //   static navigationOptions = ({ navigation }) => ({
  //     title: (navigation.state.params || {}).name || 'Chat!',
  //   });
  //   // this.setState({ name : this.props.route.params.name})
  // }
  render() {
    // console.log('props', this.props)
    return (
      // <View>
      //   <Text>
      //     Hello
      //   </Text>
      // </View>
      <GiftedChat
      messages={this.state.messages}
      onSend={Fire.shared.send}
      user={this.user}
      />
    )
  }
}

const styles = StyleSheet.create({});

export default Chat;
