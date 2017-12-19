import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER } from './types';

export const emailChanged = (email) => (dispatch) => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email
    });
  };

export const passwordChanged = (password) => (dispatch) => {
    dispatch({
      type: PASSWORD_CHANGED,
      payload: password
    });
  };

export const loginUser = ({ email, password }) => (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if (email === '' || password === '') {
      Alert.alert(
        'Mesaj',
        'Her iki alanda Dolu olmalı!',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
    } else {
      // giris islemleri
      // Actions.Home();
      console.log('okee');
    }
  };
