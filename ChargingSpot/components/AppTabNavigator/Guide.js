import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'native-base';

class Guide extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 26, paddingTop: 50,alignItems:'center' }}> Electric Vehicle Charging Guide </Text>
                <Image source={require('../../assets/books.jpeg')} style={{ width: 80, height: 80, marginTop: 25, marginBottom: 25 }} />

                <Text style={{ fontSize: 18, paddingTop: 22, paddingLeft:3,paddingRight:3 }}>
                    Would you like to know how to charge {"\n"}an electric vehicle? Charging an EV is easy!{'\n'} You can charge your car at home,
                    at a public charging station or at work. Here is what you need to know before driving to a public charging station:
                </Text>
                <Text style={styles.bullet}>
                   1. The type of connectors compatible with your EV.
                </Text>
                <Text style={styles.bullet}>
                    2. The charging networks available {"\n"}
                    in the United States only.
                </Text>
                <Text style={{ fontSize: 18, paddingTop: 22, paddingLeft:3,paddingRight:3 }}>
                    With this electric car charging guide, {"\n"} you will learn everything you need to know about charging.
                </Text>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: 'white',
        justifyContent: 'flex-start',

        paddingLeft: 5,
        paddingRight: 5
    },
    bullet : {
        alignItems:'center',
        paddingRight:5,
        paddingLeft:5, 
        paddingTop: 5,
        fontSize:20,
        paddingTop:20,
    }
   
});


export default Guide;