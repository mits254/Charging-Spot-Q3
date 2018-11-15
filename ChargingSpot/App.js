
//import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import FrontPage from './components/frontPage';
import userLocations from './components/userLocation';
import MainScreen from './components/MainScreen';
//import UsersMap from './components/UsersMap';
import Guide from './components/AppTabNavigator/Guide'
import Profile from './components/AppTabNavigator/Profile';

const App = createStackNavigator({
  FrontPage : {screen : FrontPage},
  //UsersMap : {screen : UsersMap},
  Map : {screen : userLocations},
  Main : {screen : MainScreen},
  Profile: {screen : Profile},
  Guide : {screen : Guide}
  
});

export default App;