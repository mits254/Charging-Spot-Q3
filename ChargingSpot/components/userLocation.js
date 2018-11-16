import React from 'react';
import fetchLocation from './fetchLocation';
import UsersMap from './UsersMap';
import {StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import { Icon } from 'native-base';
const window = Dimensions.get('window');
const { width, height }  = window;

export default class userLocations extends React.Component{
      state = {
        userLocation : null,
        usersPlaces :[]
      }
      static navigationOptions = {

        tabBarIcon: ({ tintcolor }) => (
            <Icon name="ios-map" style={{ color: tintcolor }} />
        )

    }
      getUserLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({
            userLocation: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0622,
              longitudeDelta: 0.0421
            }
          })
        //   fetch('https://ios-gl-app.firebaseio.com/places.json',{
        //     method : 'POST',
        //     body : JSON.stringify({
        //       latitude: position.coords.latitude,
        //       longitude: position.coords.longitude,
        //     })
        //   })
        //   .then(res => console.log(res))
        //   .catch(err => console.log(err));
        }, err => console.log(err));
      }
      getUserPlacesHandler = () =>{
        fetch('https://ios-gl-app.firebaseio.com/stations.json')
          .then(res => res.json())
          .then(parsedRes =>{
            console.log(parsedRes);
            const placesArray = [];
            for(const key in parsedRes) {
              placesArray.push({
                latitude :parsedRes[key].Latitude,
                longitude :parsedRes[key].Longitude,
                name :parsedRes[key].Name,
                port :parsedRes[key].Port,
                cost :parsedRes[key].Price,
                street:parsedRes[key].Street,
                city:parsedRes[key].City,
                zip :parsedRes[key].Zip,
                id: key
              });
            }
            this.setState({
             usersPlaces :placesArray
            });
    
          })
          .catch(err => console.log(err));
      }
      render() {
        if (this.state.userLocation == null){
            this.getUserLocationHandler();
            this.getUserPlacesHandler();
        }


        return (

          <View style={styles.container}>
          
          {/* <View style= {{marginBottom: 20}}>
          <Button title="Get User Place" onPress={this.getUserPlacesHandler}/>
          </View> */}
            {/* <FetchLocation onGetLocation ={this.getUserLocationHandler} /> */}
            <UsersMap userLocation = {this.state.userLocation} 
            usersPlaces = {this.state.usersPlaces} onPress={this.getUserLocationHandler}/>
            
          </View>
           
        );
      }
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
          paddingTop:-10
        },
        
      });