import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon } from 'native-base';

class Moretab extends Component {
    static navigationOptions = {
       
        tabBarIcon :({tintcolor}) => (
            <Icon name="ios-more" style={{color:tintcolor}} />
        )
    }
   
    render() {
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 15, paddingLeft:10}}>Add Station</Text>
            
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container :{
        flex : 1,
       
        justifyContent : 'flex-start'
    }
});
export default Moretab;