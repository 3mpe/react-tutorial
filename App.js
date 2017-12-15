import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router.js';
import reducers from './src/redux/reducers';

export default class App extends Component {
  render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
   return (
     <Provider store={store}>
       <Router />
     </Provider>
   );
  }
}
