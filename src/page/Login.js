import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';

import Wallpaper from '../components/Wallpaper';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import bgSrc from '../image/bg.jpg';

class Home extends Component {
  render() {
    return (
			<Wallpaper>
        <Logo />
				<LoginForm />
			</Wallpaper>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Home;
