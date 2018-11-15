import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props =>{
    let userLocationMarker = null;

   if(props.userLocation){
    userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>;
   }
   const usersMarkers = props.usersPlaces.map(userPlace => 
   <MapView.Marker coordinate={userPlace} key ={userPlace.id}>
   <Image source={require('../assets/pin.png')} style={{ width: 40, height: 40 }}/>
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
