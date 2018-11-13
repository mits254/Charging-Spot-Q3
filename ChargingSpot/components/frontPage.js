import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

class FrontPage extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
    static navigationOptions ={
        header : null,
    }
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex : 1}}>
           <ImageBackground
           source={require('./front.jpg')}
           style={{ flex: 1}}>

           <View style={{flex :1, justifyContent:"flex-start", alignItems : 'center',paddingTop:40}}>
           <View style={{backgroundColor :'white', height:50, width: 200, alignItems:'center', justifyContent: 'center',opacity:0.5}}> 
               <Text style={{fontWeight:"bold", fontSize:26, }}>Charging Spot</Text>
           </View>
           </View>
           <View style={{flex :1, justifyContent:"center", alignItems : 'center',paddingTop:40}}>
           <View style={{backgroundColor :"white", alignItems:'center',justifyContent:'center',height:70,width:250,opacity:0.5}}>
            {<Button titleStyle={{fontWeight:'700',fontSize:30}} 
            title="Use My Location" 
            onPress={() =>
                navigate('Map')  }/>}
           </View>
           <Button title ="later"  onPress={() => navigate('Main')}/> 
           </View>
           </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});
export default FrontPage;