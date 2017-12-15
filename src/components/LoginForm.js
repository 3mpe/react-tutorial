import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
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
      <View style={styles.containerStyle}>
          <View style={styles.subContainerStyle}>
            <Text style={styles.textStyle}>E-mail Adresiniz</Text>
          </View>
          <View style={styles.subContainerStyle}>
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
          </View>
          <View style={styles.subContainerStyle}>
            <TextInput
              secureTextEntry
              underlineColorAndroid='transparent'
              style={styles.inputStyle}
              value={this.props.password}
              onChangeText={pass => this.props.passwordChanged(pass)}
            />
          </View>
          <View style={styles.subContainerStyle}>
            {this.renderButton()}
          </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20
  },
  backgroundImg: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'
  },
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
  textStyle: {
    flex: 1,
    padding: 8
  }
};
const mapStateToProps = ({ LoginFormResponse }) => {
  const { email, password, loading } = LoginFormResponse;
  return {
    email: 'test@test.com',
    password: '123456',
    loading
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
