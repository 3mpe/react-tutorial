import React, { Component } from 'react';

import Wallpaper from '../components/Wallpaper';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';

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

export default Home;
