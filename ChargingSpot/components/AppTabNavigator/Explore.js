import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Image, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import Category from './CategoryComponents/Category';

const {height, width} = Dimensions.get('window');
vw = width / 100;
vh = height / 100;
class Explore extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintcolor }) => (
            <Icon name="ios-search" style={{ color: tintcolor }} />
        )

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 80 }}>
                        <View style={{
                            flexDirection: 'row', padding: 10, marginHorizontal: 20, backgroundColor: 'lightgrey',
                            shadowOffset: { width: 0, height: 0 }, shadowColor: 'black', shadowOpacity: 0.2, marginTop: 10, marginRight: 10, width: 330, height: 50
                        }}>
                            <Icon name='ios-search' size={20} style={{ marginRight: 10 }} />
                            <TextInput placeholder='Search'
                                placeholderTextColor='grey'
                                style={{ flex: 1, fontWeight: '700' }} />
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                    <ScrollView  contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
                      <View style={styles.scrollViewContainer}>
                    <Category imageUri={require('../../assets/map.gif')}
                             title="Find the nearest charging station on our map."
                             name="Map"/>

                    <Category imageUri={require('../../assets/person.png')}
                             title="Create a Free Charging-Spot account to stay up to date with the latest charging stations installations."
                             name="Create Account"/>

                    <Category imageUri={require('../../assets/guide.png')}
                             title="How long does it take to charge a vehicle? Want to learn more about it? Read our simple guide to laern more about charging !!."
                             name="Charging Guide"/>

                    <Category imageUri={require('../../assets/questions.jpg')}
                             title="Do you have any qustions for our team ?"
                             name="Qustions ?"/>

                      </View>
                    </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:20
    },
    
    scrollView : {
        height : Dimensions.get('window').height, 
    }, 
    mainContainer : {
        flex : 1 }, 
        scrollViewContainer : { },
});
export default Explore;