import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions,
TouchableOpacity, Button } from 'react-native';
import { Icon } from 'native-base';


const { width: WIDTH } = Dimensions.get('window');
class Profile extends Component {
    constructor(props){
        super(props)
        this.state= {
            showPass : true,
            press: false
        }
    }
    showPass =() => {
        if(this.state.press ==  false) {
            this.setState({ showPass :false , press: true})      
        } else {
            this.setState({ showPass: true, press: false })
        }
    }
    

    render() {
        const { navigate } = this.props.navigation;
        return (
            //background
            <ImageBackground style={styles.backgroundContainer} source={require('../front.jpg')}>
                <View style={{ flex: 1, justifyContent: "flex-start", alignItems: 'center', paddingTop: 60 }}>
                    <View style={{ backgroundColor: 'white', height: 50, width: 200, alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                        <Text style={styles.logoText}> Charging Spot</Text>
                    </View>
                </View>
                {/* user-login */}
                <View style={{marginTop:10,marginBottom: 50}}>
                    <Icon name={'ios-person-outline'} size={28} color={'black'}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' />
                </View>

                {/* password-input */}
                <View style={{marginBottom:60}}>
                    <Icon name={'ios-lock-outline'} size={28} color={'black'}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' />
                        <TouchableOpacity style={styles.btneye} 
                        onPress={this.showPass.bind(this)}>
                            <Icon name={this.state.showPass == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} 
                            size={26} color={'white'}/>
                        </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={() => navigate('SignUp')}>
                    <Text style={styles.text} >Create My Profile</Text>
                </TouchableOpacity>
                <View style={{marginBottom:50}}>
                    <Text>
                       ---------- OR ----------
                    </Text>

                    <Button title='I have an Account' onPress={() => navigate('Login')}/> 
                </View>

            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 26,
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
    btneye :{
        position:'absolute',
        top: 8,
        right: 37, 
        color:'white'
    },
    btnLogin:{
      width : WIDTH -55,
      height: 45,
      borderRadius: 25,
      backgroundColor: 'white',
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
export default Profile;