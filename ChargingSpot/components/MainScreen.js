import React, { Component } from 'react';
//import { View, Text, StyleSheet} from 'react-native';
//import { Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Profile from './AppTabNavigator/Profile';
import Moretab from './AppTabNavigator/Moretab';
import Explore from './AppTabNavigator/Explore';

class MainScreen extends Component {
    
    // static navigationOptions = {

    // }
    render() {
        return(
            <AppTabNavigator />
        )
    }
}

const AppTabNavigator = createBottomTabNavigator({
    Explore : { 
        screen : Explore
    },
    // Map : {
    //     screen : Map
    // },
    Profile : {
       screen : Profile
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