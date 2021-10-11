import React,{Component} from 'react'

import {View, Text, StyleSheet} from 'react-native'

export default class AboutUs extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text style={styles.aboutUsText}>Hi this is About Us page</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'yellow'
    },
    aboutUsText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
})