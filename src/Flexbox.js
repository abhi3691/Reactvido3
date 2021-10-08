import React,{Component} from "react";

import { 
    View ,
    StyleSheet,
    Text,
    TouchableHighlight
} from "react-native"

class FlexContent extends Component {
    render (){
        return(
            <View>
                <Text style = {styles.contentStyle}>Hi  {this.props.name} welcome to React</Text>
            </View>
        )
    }
}
export default class Flexbox extends Component{
    constructor (){
        super ();
        this.state ={
          main_text :'Hello',
          Sub_text  :"React"
        }
      }

      componentDidMount(){
          //console.log('the Username is:',this.props.route.params.Username)
      }

      UpdateText (){
        this.setState({
            main_text:'Hi (Hello Updated)',
            Sub_text:'Framework (React Updated)'
        })
         
       
      }
    render(){
        return(
            <View style={styles.container}>
                <Text style = {styles.text}>{this.state.main_text} </Text>
                <Text style = {styles.text}>{this.state.Sub_text} </Text> 
                <Text style = {styles.text}>Native </Text>    
                <TouchableHighlight style={styles.button}
                 underlayColor = 'red'
                onPress = {()=> this.UpdateText()}>
                 <Text style = {styles.buttonText}>
                     UPDATE
                 </Text>    
                </TouchableHighlight>   
                <Text style={styles.buttonText} ></Text>
                <TouchableHighlight style={styles.button}
                underlayColor='#ffffff'
                
                >
                    <Text style={styles.buttonText}> Click Here</Text>


                </TouchableHighlight> 
                <FlexContent name= {this.props.route.params.Username}>
                    
                </FlexContent>        
            </View>
        )
    } 
}

const styles = StyleSheet.create(
    {
        container:{
            flex :1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
           // flexDirection:'row'
        },
        text :{
            fontSize:24,
            color:'#000',
            fontWeight:'bold'
        },
        button:{
            width:'60%',
            height:55,
            backgroundColor:'green',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:6,
            marginTop:20,
        
        },
        buttonText:{
            fontSize:18,
            color:'#fff',
            fontWeight:'bold'
        },
        contentStyle:{
            fontSize:24,
            fontWeight:'bold',
            color:'#369'
        }
    }
)