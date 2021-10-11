import React,{Component} from 'react'

import { View,Text,StyleSheet,Image } from 'react-native'

export default class DrawerContent extends Component{
render(){
    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}> 
            <View style={styles.profileIcon}>
                <Image style={styles.profileImage}
                source={require('../assets/logo.png')}></Image>
            </View>
            <View style={styles.infoView}>
                <Text style={styles.nameText}>Melinda Sordino</Text>
                <Text style={styles.emailText}>melinda@gmail.com</Text>
                <Text style={styles.emailText}>0987654321</Text>
            </View>
            </View>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Home')}>Home</Text>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Profile')}>profile</Text>
              <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('AboutUs')}>AboutUs</Text>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Settings')}>Settings</Text>

        </View>
    )
}
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    menu:{
        fontSize:18,
        marginTop:10,
        marginLeft:10,
        color:'#369',
        fontWeight:'bold'

    },
    profileContainer:{
        height:'25%',
        width:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    profileIcon:{
        height:100,
        width:100,
        backgroundColor:'#666666',
        borderRadius:50,
        marginTop:10,
        marginLeft:10
    },
    infoView:{
        marginLeft:10,

    },
    profileImage:{
        height:"100%",
        width:"100%"
    },
    nameText:{
        color:'#360',
        fontWeight:'bold',
        marginBottom:5,
   
    },
    emailText:{
        fontWeight:'bold',
        

    }
})