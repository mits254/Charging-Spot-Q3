import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const Message =(props) => {
    const msg = [
        {isOwnMessage:true,messages:"hello"}
    ]
         const bubbles = msg.map((m,i) => <MessageBubble {...m} key={i} />)
        return(
           <View behavior='padding' style={styles.container}>
                <View style={styles.bubbleCointainer}>
                {bubbles}
                </View>

               <View style={styles.messageBoxContainer}>
               <TextInput style={styles.messageBox} /> 
               <TouchableOpacity>
                   <Text style={styles.sendButton}>Send</Text>
               </TouchableOpacity> 
               </View>
           </View>
        )
    }





const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor:'white'
    },
    bubbleCointainer: {
      flex:1
    },
    messageBoxContainer :{
     flexDirection:'row',
     alignItems:'center',
     borderTopWidth:1,
     paddingVertical:5,
     paddingHorizontal:10,
    },
    messageBox :{
     flex:1,
     height: 40,
     borderWidth:1,
     borderRadius:10,
     paddingHorizontal: 5
    },
    sendButton:{
        color:'blue',
        marginLeft:10,
        marginRight:5,
        fontSize:16,
        fontWeight:'500'
    }
   

    

});
export default Message;