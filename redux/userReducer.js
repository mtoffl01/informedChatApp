import Fire from '../Fire';

const SET_USER_NAME = 'USER_NAME';
const SET_BIO = "SET_BIO"
const GOT_ALL_USERS = 'GOT_ALL_USERS'

const initialState = {
  name: '',
  bio: '',
  allUsers: []
}

export const setUserName = (name) => {
  return {
    type: SET_USER_NAME,
    name
   }
}

export const setBio = bio => {
  return {
    type: SET_BIO,
    bio
  }
}

const gotAllUsers = allUsers => {
  return {
    type: GOT_ALL_USERS,
    allUsers
  }
}

export const getAllUsers = () =>  dispatch => {
  // const users = Fire.getAllUsers();
  dispatch(gotAllUsers([]));
}

export default userReducer = (state=initialState, action) => {
  switch(action.type){
    case SET_BIO: {
      return {
        ...state,
        bio: action.bio
      }
    }
    case SET_USER_NAME:
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}
