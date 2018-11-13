import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
class FrontPage extends Component {
    constructor(props){
        super(props);
        
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
           <View style={{backgroundColor :'rgba(0, 0, 0, 0.4)', height:50, width: 200, alignItems:'center', justifyContent: 'center'}}> 
               <Text style={{fontWeight:"bold", fontSize:26, }}>Charging Spot</Text>
           </View>
           </View>
           <View style={{flex :1, justifyContent:"center", alignItems : 'center',paddingTop:40}}>
           <View style={styles.btnLogin}>
            <Button titleStyle={{color:"black",
      fontSize: 16,
      textAlign: 'center'}} 
            title="Use My Location" 
            titleStyle={{color:'black'}}
            onPress={() =>
                navigate('Map')  }/>
           </View>
           <Button title ="later"  onPress={() => navigate('Main')} /> 
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
    },
    btnLogin:{
        width : WIDTH -70,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        marginTop: 20,
        
    }
});
export default FrontPage;