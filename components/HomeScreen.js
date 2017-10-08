import React, { Component } from 'react'
import {View, Text, Button, StyleSheet } from 'react-native'

class HomeScreen extends Component {

    render(){
        const { navigate } = this.props.navigation

        return(
            <View style={styles.container}>
                 <Text style={styles.welcomeText}>Welcome to Currency Converter</Text>
                 <Button title="Let's Convert!" onPress={() => navigate('Currencies')}/>
            </View>
        )
    }
}

HomeScreen.navigationOptions = {
    title: 'Currency Converter'
  }

var styles = StyleSheet.create({
    conatiner: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeText: {
        fontSize:24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 50
    }
})

export default HomeScreen