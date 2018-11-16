import React from 'react';
import { View, StyleSheet, Image,TouchableHighlight, Text, Linking } from 'react-native';
import MapView from 'react-native-maps';
import openMap from 'react-native-open-maps';

const usersMap = props =>{
    let userLocationMarker = null;
     
   if(props.userLocation){
    userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>;
   }
   const usersMarkers = props.usersPlaces.map(userPlace => 

   <MapView.Marker coordinate={userPlace} key ={userPlace.id}>
   <Image source={require('../assets/pin.png')} style={{ width: 40, height: 40 }}/>
   <MapView.Callout tooltip style={{flex:1}}>
                                      <TouchableHighlight onPress={()=>{Linking.openURL(`http://maps.apple.com/maps?daddr=${userPlace.latitude},${userPlace.longitude}`)}} >
                                      <View style={{ flex: 1, backgroundColor: 'lightgrey', paddingTop: 20, paddingLeft:10,paddingRight:5,width:300, height:100,flexDirection:'row' }}>
                                       
                                        <Image source={require('../assets/pin.png')} style={{ width: 60, height: 60 }}/>
                                        <View>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold',paddingTop:-2 }}>
                                         {userPlace.name}
                                        </Text>
                                        
                                        <Text>{userPlace.street}, {userPlace.city},{"\n"} {userPlace.zip}</Text>
                                        <Text> {userPlace.port} ports</Text>
                                        </View>
                                     </View>
                                      </TouchableHighlight>
         </MapView.Callout>
   </MapView.Marker>
   );
    return (
      <View style={styles.mapContainer}>
          <MapView 
           initialRegion={{
            latitude: 30.2672,
            longitude: -97.7431,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
          }} 
          region = {props.userLocation}
          style={styles.map}>
          {userLocationMarker}
          {usersMarkers}
          </MapView>
      </View>
    );
}


const styles = StyleSheet.create ({
    mapContainer : {
        flex: 1,
        alignSelf:'stretch',
        marginTop : 0
    },
    map : {
        width : '100%',
        height : '100%',
        
    }
})

export default usersMap;
