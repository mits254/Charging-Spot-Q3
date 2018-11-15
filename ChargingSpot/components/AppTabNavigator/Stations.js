import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions,
TouchableOpacity, Button, Alert} from 'react-native';
import { Icon } from 'native-base';


const { width: WIDTH } = Dimensions.get('window');
class Stations extends Component {

    constructor(props){
        super(props)
        this.state= {
            InputName:'',
            InputStreet: '',
            InputCity: '',
            InputZip: '',
            InputPrice: '',
            InputPort: '',
            InputType: '',
            InputLat: '',
            InputLng: ''          
        }
    }
    CheckTextInputIsEmpty = () =>{
        const {InputName} = this.state ;
        const {InputStreet} = this.state ;
        const {InputCity} = this.state ;
        const {InputZip} = this.state ;
        const {InputPrice} = this.state ;
        const {InputPort} = this.state ;
        const {InputType} = this.state ;
        
        

        if (InputName == '' || InputStreet == '' || InputCity == '' || InputZip == '' || InputPrice == '' || InputPort == '' ||InputType == ''){
          Alert.alert(' Please Enter All the Values !!')
        } else {
            const searchObj = {
                location:{
                    street: this.state.InputStreet,
                    city : this.state.InputCity, 
                    state : 'tx',
                    postalCode: this.state.InputZip, 
                    adminArea1:'US'}
            };

            const Obj = JSON.stringify(searchObj);
           
            fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=fFZ9OV8SYuLlVEGlsW8C8u76ExEvBgCL&json=${Obj}`)
                .then(res => res.json())
                .then(parsedRes =>{
                  console.log(parsedRes.results[0].locations[0].latLng);
                  this.setState({InputLat : parsedRes.results[0].locations[0].latLng.lat});
                  this.setState({InputLng : parsedRes.results[0].locations[0].latLng.lng});
               
            fetch('https://ios-gl-app.firebaseio.com/stations.json',{
                method : 'POST',
                body : JSON.stringify({
                    Name: InputName,
                 Street : InputStreet,
                 City : InputCity,
                 Zip : InputZip,
                 Price : InputPrice,
                 Port: InputPort,
                 Type : InputType,
                 Latitude : this.state.InputLat,
                 Longitude : this.state.InputLng    
                })
              })
              .then(res => console.log(res))
              .catch(err => console.log(err));
              Alert.alert(' You have successfully created a station !!')
            const { navigate } = this.props.navigation;
            navigate('Explore')
        });
            };
            
        
    }      
    
    

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.backgroundContainer}>
            <Text style={{justifyContent:'flex-start', paddingTop:0,fontSize:24,fontWeight:'bold'}} > Add Stations</Text>
                
            <View style={{marginTop:10,marginBottom: 30}}>      
                    <TextInput
                        style={styles.input}
                        placeholder={'Station Name'}
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        underlineColorAndroid='transparent'
                        onChangeText={InputName => this.setState({InputName})} />
                </View>
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