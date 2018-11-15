import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Icon } from 'native-base';

class Guide extends Component {
  render(){
      return(
         <View style={styles.container}>
          <Text> Electric Vehicle Charging Guide </Text>
          {/* <Image style={{ flex: 1, width: 300, height: 300, resizeMode: 'cover' }} /> */}

           <Text>
               Would you like to know how to charge an electric vehicle? Charging an EV is easy! You can charge your car at home,
               at a public charging station or at work. Here is what you need to know before driving to a public charging station:

           </Text>
         </View>


      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default Guide;