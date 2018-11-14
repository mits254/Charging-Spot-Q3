import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions,
TouchableOpacity, Button } from 'react-native';
import { Icon } from 'native-base';

const { width: WIDTH } = Dimensions.get('window');

class SignUp extends Component {
    
    
    render() {
        return (
            <View style={styles.backgroundContainer}>
            <Text style={{justifyContent:'flex-start', paddingTop:0,fontSize:24,fontWeight:'bold'}} >LOGIN</Text>
                <View style={{marginTop:10,marginBottom: 30}}>      
                    <TextInput
                        style={styles.input}
                        placeholder={'Full Name'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' />
                </View>
            
                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Address'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' />                
                </View>

                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Car Model'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' />                
                </View>
                
                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Manufacture Year'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' />                
                </View>

                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Wallet Amount'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' />                
                </View>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.text}>SignUp</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        backgroundColor : 'lightgrey'
    },
    
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 25,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37,
    },
    
    btnLogin:{
      width : WIDTH -55,
      height: 45,
      borderRadius: 25,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      justifyContent: 'center',
      marginTop: -10,
      marginBottom: 40
    },
    text: {
      color:"black",
      fontSize: 16,
      textAlign: 'center'
    }
});
export default SignUp;