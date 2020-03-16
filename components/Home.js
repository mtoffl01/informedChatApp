import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux'
import { getAllUsers } from '../redux/userReducer'
import Fire from '../Fire';

class Home extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    Fire.shared.on('usersMode')
    this.props.getAllUsers();
  }

  componentWillUnmount(){
    Fire.shared.off();
  }

  render(){
    return(
      <View>
        <Text style={styles.greeting}>Helloooo, {this.props.name}!</Text>
        <Text style={styles.bio}>{this.props.bio}</Text>
          <Text>Your fellow users:</Text>
          {this.props.allUsers.map((user)=>{
            return (
              <View>
                <Text style={styles.nameTitle}>{user.name}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
              </View>
            )
          })}
      </View>
    )
  }
}

const offset = 24;
const styles = StyleSheet.create({
  greeting: {
    marginTop: offset,
    textAlign: 'center',
    fontSize: offset,
    fontWeight: 'bold'
  },
  nameTitle: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  bio: {
    marginLeft: offset,
    fontSize: offset,
    color: 'pink'
  }
})

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    bio: state.user.bio,
    allUsers: state.user.allUsers
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
