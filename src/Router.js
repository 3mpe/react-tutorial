import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Login from './page/Login';

const RouterComponent = () => (
      <Router sceneStyle={{ marginTop: 20 }}>
        <Scene key="kimlik">
          <Scene key="loginScreen" component={Login} title="" />
        </Scene>
      </Router>
    );

export default RouterComponent;
