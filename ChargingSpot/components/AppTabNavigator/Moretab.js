import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon } from 'native-base';

class Moretab extends Component {
    static navigationOptions = {
        header : null,
        tabBarIcon :({tintcolor}) => (
            <Icon name="ios-more" style={{color:tintcolor}} />
        )
    }
   
    render() {
        return(
            <View style={styles.container}>
            <Text>Moretab</Text>
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
export default Moretab;