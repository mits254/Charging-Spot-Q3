import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const MessageBubble =(props) => (
    <View style={[styles.bubble, props.isOwnMessage && styles.ownBubble ]}>
        <Text style={[styles.messageText, props.isOwnMessage && styles.ownMessagetext]}>
         {props.message}
        </Text>
    </View>
)
MessageBubble.prototype ={
  message : PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool.isRequired
}
    
    

    const styles = StyleSheet.create({
        bubble :{
            width: 250,
            padding: 10,
            marginVertical:5,
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: '#ececec'
        },
        ownBubble :{
          backgroundColor :'#457DE5FF',
          alignSelf:'flex-end'
        },
         messageText :{
         color: '#333333'
        },
        ownMessagetext :{
         color :'#ffffff'
        }
    })    
export default MessageBubble;
