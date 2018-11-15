
import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';
import FrontPage from './components/frontPage';
import userLocations from './components/userLocation';
import MainScreen from './components/MainScreen';
import Guide from './components/AppTabNavigator/Guide'
import Profile from './components/AppTabNavigator/Profile';
import Login from './components/AppTabNavigator/login';
import SignUp from './components/AppTabNavigator/SingnUp';
import Explore from './components/AppTabNavigator/Explore';
import Moretab from './components/AppTabNavigator/Moretab';
import Stations from './components/AppTabNavigator/Stations';

const  StackNavigatorConfig ={
  headerMode: 'none',
}
const ProfileNav = createStackNavigator({
  Pro : {screen : Profile},
  Login : {screen : Login},
  SignUp : {screen : SignUp},
  Explore : {screen: Explore}
}, StackNavigatorConfig);

const MoreTabNav = createStackNavigator({
  More : {screen : Moretab},
  Stations : {screen : Stations},
}, StackNavigatorConfig);

const AppTabNavigator = createBottomTabNavigator({
  Explore : { 
      screen : Explore
  },
  Map : {
    screen : userLocations
  },
  Profile: {screen : ProfileNav, 
      navigationOptions :{
          tabBarLabel: 'Profile',
          tabBarIcon:({tintcolor}) => (
              <Icon name="person" style={{ color: tintcolor }} />
          )     
      } 
  },
  More : {
    screen : MoreTabNav,
    navigationOptions :{
      tabBarLabel: 'More',
      tabBarIcon:({tintcolor}) => (
          <Icon name="ios-more" style={{ color: tintcolor }} />
      )     
  } 
  }
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
      activeTintColor:'#000',
      inactiveTintColor:'#d1cece',
      showIcon: 'true',
      showLabel: 'true',
  }
});

const App = createStackNavigator({
  FrontPage : {screen : FrontPage},
  Map : {screen : userLocations},
  Main : {screen : AppTabNavigator},
  Profile: {screen : Profile},
  Guide : {screen : Guide},
  
});



export default App;