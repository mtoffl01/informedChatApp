import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../Fire';
import { connect } from 'react-redux'

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat',
  });

  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    Fire.shared.on('messagesMode', message => {
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
      name: this.props.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    console.log('chat props', this.props)
    return (
      <View style={{flex: 1}}>
        <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  name: state.user.name
})

export default connect(mapStateToProps)(Chat);
