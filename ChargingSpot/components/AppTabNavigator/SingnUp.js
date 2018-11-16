import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions,
TouchableOpacity, Button, Alert } from 'react-native';
import { Icon } from 'native-base';

const { width: WIDTH } = Dimensions.get('window');

class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            InputName: '',
            InputEmail: '',
            InputAddress: '',
            InputCar: '',
            InputYear: '',
            WalletAmt: ''
        }
    }
    
    CheckTextInputIsEmpty = () =>{
        const {InputName} = this.state ;
        const {InputEmail} = this.state ;
        const {InputAddress} = this.state ;
        const {InputCar} = this.state;
        const {InputYear} = this.state;
        const {WalletAmt} = this.state;

        if (InputName == '' || InputEmail == '' || InputAddress == '' || InputCar == '' || InputYear == '' || WalletAmt == ''){
          Alert.alert(' Please Enter All the Values !!')
        } else {          
                  fetch('https://ios-gl-app.firebaseio.com/users.json',{
                    method : 'POST',
                    body : JSON.stringify({
                     UserName : this.props.navigation.state.params.InputUserName,
                     Password : this.props.navigation.state.params.InputPass,
                     Name : InputName,
                     Email : InputEmail,
                     Address : InputAddress,
                     Car : InputCar,
                     Year: InputYear,
                     Amout : WalletAmt,
                     
                    })
                  })
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
                };
                const { navigate } = this.props.navigation;
                navigate('Explore', this.state)

    }
    render() {
        //console.log(this.props.navigation.state.params);
        return (
            <View style={styles.backgroundContainer}>
            <Text style={{justifyContent:'flex-start', paddingTop:0,fontSize:24,fontWeight:'bold'}} > CREATE YOUR PROFILE</Text>
                <View style={{marginTop:10,marginBottom: 30}}>      
                    <TextInput
                        style={styles.input}
                        placeholder={'Full Name'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputName => this.setState({InputName})} />
                </View>

                <View style={{marginTop:10,marginBottom: 30}}>      
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputEmail => this.setState({InputEmail})} />
                </View>
            
                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Address'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputAddress => this.setState({InputAddress})} />                
                </View>

                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Car Model'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputCar => this.setState({InputCar})} />                
                </View>
                
                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Manufacture Year'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' 
                        onChangeText={InputYear => this.setState({InputYear})} />                
                                     
                </View>

                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Wallet Amount'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' 
                        onChangeText={WalletAmt => this.setState({WalletAmt})} />                
                                       
                </View>

                <TouchableOpacity style={styles.btnLogin} onPress ={this.CheckTextInputIsEmpty} >
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