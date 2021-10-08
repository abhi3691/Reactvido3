import React,{Component} from 'react'
import { View,StyleSheet,ImageBackground,Image,Text,TextInput,TouchableHighlight } from 'react-native'

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      name : null
    }
  }

  updateValue(Username){
    
    this.setState({name : Username})

  }
 
 render () {
   return(
     <View style = {styles.container}>
       <ImageBackground source = {require('../assets/Bg.jpg')}
       style = {styles.backgroundImage}>
         <Image source = {require('../assets/logo.png')}
         style = {styles.logo}>
         </Image>
         <Text style = {styles.textView}>Welcome to rect native journey </Text>
         <TextInput style={styles.inputView} 
         placeholder = 'Username' 
         placeholderTextColor = 'green'
         maxLength = {10}
         onChangeText= {(Username)=> this.updateValue(Username)}>
         </TextInput>
         <TextInput style ={styles.inputView} 
         placeholder = 'Password' 
         placeholderTextColor = 'green'
         secureTextEntry = {true}>
         </TextInput>
         <TouchableHighlight style= {styles.buttonView} 
         underlayColor='transparent'
         onPress= {()=>this.props.navigation.navigate('FlexBox',{Username:this.state.name})} >
           <Text style={styles.buttonText }>Login</Text>
         </TouchableHighlight>
       </ImageBackground>
     </View>
   )
 }
}
const styles = StyleSheet.create({
  container : {
    height : '100%',
    width : '100%',
    backgroundColor:'#ffffff'
  },
  backgroundImage :{
    height:'100%',
    width:'100%',
    alignItems:"center",
    justifyContent:'center'
  },
  logo : {
    height:100,
    width:100,
  },
  textView :{
    fontSize: 20,
    fontWeight:'bold',
    marginTop:20

  },
  inputView :{
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'green',
    marginTop:50,
    paddingLeft:20,

  },
  buttonView :{
    width:'60%',
    height:55,
    backgroundColor:'green',
    marginTop:30,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  }

})
