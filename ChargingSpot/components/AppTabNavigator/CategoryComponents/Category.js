import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';


class Category extends Component {
    
    
    render() {
        return(
            
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, paddingLeft: 30 }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', }}>
               {this.props.name}
            </Text>
            <View style={{height:300, marginTop:10}}>
            
            <View style={{
                height: 300,shadowColor: 'lightgrey',
                shadowOpacity: 1, shadowOffset: { width: 10, height: 10 }, width: 300,
                borderRadius: 10, borderWidth: 0.3, marginRight: 5, borderColor: 'lightgrey'
                 }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: 300, height: 300, resizeMode: 'cover' }} />
                </View>
                <View style={{ flex: 0.5, paddingLeft: 10, paddingTop: 10, backgroundColor: 'lightgrey' }}>
                    <Text style={{ fontSize: 20 }}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
            </View>
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

export default Category;