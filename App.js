/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { connect, Provider } from "react-redux";
import { NavigationContainer } from './app/navigation'
import configureStore from "./configureStore.js";
const store = configureStore();

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );

  }
}
