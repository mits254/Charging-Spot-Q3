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

export default MainScreen;