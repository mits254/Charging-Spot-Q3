import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon } from 'native-base';

class Explore extends Component {
    static navigationOptions = {
        header : null,
        tabBarIcon :({tintcolor}) => (
            <Icon name="ios-search" style={{color:tintcolor}} />
        )
       
    }
   
    render() {
        return(
            <View style={styles.container}>
            <Text>Explore</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});
export default Explore;