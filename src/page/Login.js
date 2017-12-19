import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Wallpaper from '../components/Wallpaper';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';

class Home extends Component {
  render() {
    return (
			<View style={styles.container}>
        <Logo />
				<LoginForm />
			</View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
};

export default Home;
