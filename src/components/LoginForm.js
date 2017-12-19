import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../redux/actions';

import Button from '../AdditionComponent/Button';
import Spinner from '../AdditionComponent/Spinner';

class LoginForm extends Component {
  state = { email: '', password: '', loading: false };

  clickLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (!this.props.loading) {
      return (<Button style={styles.buttonStyle} onpress={() => this.clickLogin()}>
        Oturum Aç
      </Button>);
    }
    return <Spinner size="small" />;
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerStyle} behavior="padding" keyboardVerticalOffset={180}>
        <View style={styles.subContainerStyle}>
          <Text style={styles.textStyle}>E-mail Adresiniz</Text>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.inputStyle}
            value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}
            placeHolder="e-mail"
          />
        </View>
        <View style={styles.subContainerStyle}>
          <Text style={styles.textStyle}>Şifreniz</Text>
          <TextInput
            secureTextEntry
            underlineColorAndroid='transparent'
            style={styles.inputStyle}
            value={this.props.password}
            onChangeText={pass => this.props.passwordChanged(pass)}
          />
        </View>
        <View style={styles.buttonStyle}>
          {this.renderButton()}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    width: '90%'
  },
  subContainerStyle: {
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  },
  buttonStyle: {
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  inputStyle: {
    width: '100%',
    height: 50,
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  textStyle: {
    color: '#fff',
    padding: 3
  }
};
const mapStateToProps = ({ LoginFormResponse }) => {
  const { email, password, loading } = LoginFormResponse;
  return {
    email,
    password,
    loading
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
