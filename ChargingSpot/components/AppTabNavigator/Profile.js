import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon } from 'native-base';

class Profile extends Component {
    static navigationOptions = {
        tabBarIcon :({tintcolor}) => (
            <Icon name="person" style={{color:tintcolor}} />
        )
    }
   
    render() {
        return(
            <View style={styles.container}>
            <Text>Profile</Text>
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
export default Profile;