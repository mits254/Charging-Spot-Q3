import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';

class Moretab extends Component {
    
    render() {
        const {navigate} =this.props.navigation;
        return(
            <View style={styles.container}>
            <Text style={{paddingTop:5 ,paddingLeft:2, justifyContent:'flex-start'}}> Add Station</Text>
            <TouchableOpacity onPress= {()=> navigate('Stations')}>
            <Tab name='Add a Public station' icon='ios-add' />
            </TouchableOpacity>
            <TouchableOpacity onPress= {()=> navigate('Stations')}>
            <Tab name='Share your Home station' icon ='ios-home-outline' />
            </TouchableOpacity>
            <Text style={{paddingTop: 20}}> Profile</Text>
            <Tab icon='ios-heart-outline' name='Bookmarks'/>
            <Tab name='Notifications' icon ='ios-alarm-outline' />
            <Text style={{paddingTop: 20}}>
              App Information
            </Text>
            <Tab name='Charging Guide' icon ='ios-book-outline' />
            <Tab name='Give Feedback' icon ='ios-chatboxes-outline' />
            <Tab name='More Info' icon='ios-information-circle-outline'/>
            </View>
        )
    }
}

class Tab extends Component{
    render() {
        return (
            <View style={styles.clickContainer} >
            <Icon name={this.props.icon} size={28} color={'black'}/>
                <Text style={{paddingTop:5,fontSize:16,paddingLeft:10}}>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container :{
        flex : 1,
    },
    clickContainer :{
        borderColor:'lightgrey',
        borderWidth:1,
        paddingLeft: 2,
        paddingTop:3,
        paddingBottom:3,
        flexDirection:'row',
        backgroundColor:'rgba(255, 255, 255, 1)'


    }

});
export default Moretab;