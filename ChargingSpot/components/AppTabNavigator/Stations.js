import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions,
TouchableOpacity, Button, Alert} from 'react-native';
import { Icon } from 'native-base';


const { width: WIDTH } = Dimensions.get('window');
class Stations extends Component {

    constructor(props){
        super(props)
        this.state= {
            InputStreet: '',
            InputCity: '',
            InputZip: '',
            InputPrice: '',
            InputPort: '',
            InputType: '',
            

        }
    }
    CheckTextInputIsEmpty = () =>{
        const {InputStreet} = this.state ;
        const {InputCity} = this.state ;
        const {InputZip} = this.state ;
        const {InputPrice} = this.state ;
        const {InputPort} = this.state ;
        const {InputType} = this.state ;
        

        if (InputStreet == '' || InputCity == '' || InputZip == '' || InputPrice == '' || InputPort == '' ||InputType == ''){
          Alert.alert(' Please Enter All the Values !!')
        } else {  
            fetch('https://ios-gl-app.firebaseio.com/stations.json',{
                method : 'POST',
                body : JSON.stringify({
                 Street : InputStreet,
                 City : InputCity,
                 Zip : InputZip,
                 Price : InputPrice,
                 Port: InputPort,
                 Type : InputType,
                 
                })
              })
              .then(res => console.log(res))
              .catch(err => console.log(err));
            };
            const { navigate } = this.props.navigation;
            navigate('Explore')
        
    }      
    
    

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.backgroundContainer}>
            <Text style={{justifyContent:'flex-start', paddingTop:0,fontSize:24,fontWeight:'bold'}} > Add Stations</Text>
                <View style={{marginTop:10,marginBottom: 30}}>      
                    <TextInput
                        style={styles.input}
                        placeholder={'Public or Home'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputType => this.setState({InputType})} />
                </View>

                <View style={{marginTop:10,marginBottom: 30}}>      
                    <TextInput
                        style={styles.input}
                        placeholder={'Street'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputStreet => this.setState({InputStreet})} />
                </View>
            
                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'City'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputCity => this.setState({InputCity})} />                
                </View>

                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Zip Code'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputZip => this.setState({InputZip})} />                
                </View>
                
                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Number of Ports'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' 
                        onChangeText={InputPort => this.setState({InputPort})} />                
                                     
                </View>

                <View style={{marginBottom:40}}>  
                    <TextInput
                        style={styles.input}
                        placeholder={'Price per port'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent' 
                        onChangeText={InputPrice => this.setState({InputPrice})} />                
                                       
                </View>

                <TouchableOpacity style={styles.btnLogin} onPress ={this.CheckTextInputIsEmpty} >
                    <Text style={styles.text}>Submit</Text>
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
export default Stations;