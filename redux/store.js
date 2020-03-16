import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  user: userReducer
});


export default createStore(rootReducer, applyMiddleware(thunkMiddleware));

