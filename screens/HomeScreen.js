import * as React from 'react';
import { Component } from 'react'
import { Image, Platform, StyleSheet, Text,
  TouchableOpacity, View, Button, Modal, TouchableHighlight } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
// import { Post }  from '../components/Post'
import Main from '../components/Main'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component{
  constructor(){
    super();
    this.state = {
      modalVisible: false
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Chat />
        {/* <ScrollView>
          <Button title="Create Post"/>
          <Post />
          <Post />
          <Post />
          <ModalExample modalVisible={this.state.modalVisible}/>
        </ScrollView> */}
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

class ModalExample extends Component {
  constructor(){
    super()
    this.state = {
      modalVisible: false,
      text: ''
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <TextInput style={{marginTop:22, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({ text })}
              value={this.state.text}/>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use useful development
//         tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
