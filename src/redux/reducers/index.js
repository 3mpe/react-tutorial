import { combineReducers } from 'redux';
import LoginFormReducers from './LoginFormReducers';

export default combineReducers({
  LoginFormResponse: LoginFormReducers,
});
