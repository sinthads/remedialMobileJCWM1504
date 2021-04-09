import {combineReducers} from '@reduxjs/toolkit';
import {catReducer} from './catReducer';
import {userReducer} from './userReducer';

export default combineReducers({
  cat: catReducer,
  user: userReducer,
});
