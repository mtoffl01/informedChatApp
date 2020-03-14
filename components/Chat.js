import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../Fire';
import Tabs from '../navigation/myBottomTabNavigator'

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
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

  render() {
    console.log('iser', this.user)
    return (
      <View style={{flex: 1}}>
        <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
        />
        <Tabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({});

export default Chat;
