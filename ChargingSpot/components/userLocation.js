import React from 'react';
import fetchLocation from './fetchLocation';
import UsersMap from './UsersMap';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class userLocations extends React.Component{
      state = {
        userLocation : null,
        usersPlaces :[]
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
          }); 
          fetch('https://ios-gl-app.firebaseio.com/places.json',{
            method : 'POST',
            body : JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
        }, err => console.log(err));
      }
      getUserPlacesHandler = () =>{
        fetch('https://ios-gl-app.firebaseio.com/places.json')
          .then(res => res.json())
          .then(parsedRes =>{
            console.log(parsedRes);
            const placesArray = [];
            for(const key in parsedRes) {
              placesArray.push({
                latitude :parsedRes[key].latitude,
                longitude :parsedRes[key].longitude,
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
        return (
        //   <AppStackNavigator screenProps={{onPressButton: this.getUserLocationHandler}} />
          <View style={styles.container}>
          {/* <View style= {{marginBottom: 20}}>
          <Button title="Get User Place" onPress={this.getUserPlacesHandler}/>
          </View> */}
            {/* <FetchLocation onGetLocation ={this.getUserLocationHandler} /> */}
            <UsersMap userLocation = {this.state.userLocation} 
            usersPlaces = {this.state.usersPlaces}/>
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
        },
        
      });