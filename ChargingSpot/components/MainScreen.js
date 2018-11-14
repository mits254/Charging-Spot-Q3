import React, { Component } from 'react';
//import { View, Text, StyleSheet} from 'react-native';
//import { Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation';
import Profile from './AppTabNavigator/Profile';
import Moretab from './AppTabNavigator/Moretab';
import Explore from './AppTabNavigator/Explore';
import Login from './AppTabNavigator/login';
import userLocations from '../components/userLocation';
import { Icon } from 'native-base';
import SingUp from './AppTabNavigator/SingnUp';
import SignUp from './AppTabNavigator/SingnUp';

class MainScreen extends Component {
    
    // static navigationOptions = {

    // }
    render() {
        return(
            <AppTabNavigator />
        )
    }
}
const  StackNavigatorConfig ={
    headerMode: 'none',
}
const ProfileNav = createStackNavigator({
    Pro : {screen : Profile},
    Login : {screen : Login},
    SingUp : {screen : SignUp}
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
      screen : Moretab
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
})


export default MainScreen;