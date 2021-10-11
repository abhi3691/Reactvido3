import React,{Component} from 'react'

import {View, Text, StyleSheet} from 'react-native'

export default class Settings extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text style={styles.settingsText}>Hi this is Settings page</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red'
    },
    settingsText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
})