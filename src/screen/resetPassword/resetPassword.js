import { Text, View ,Dimensions,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';
import { Wave } from 'react-native-animated-spinkit'
import axios from 'axios';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:''
    }
  }
  
  render() {
  const  sendresetPassword=()=>{
      this.setState({loading:true})
  if(this.state.email!=""){
          var data = JSON.stringify({
            "email": this.state.email
          });
          
          var config = {
  method: 'post',
  url: 'http://103.242.116.169:8080/api/forgetpassword',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};
          console.log(data)
          axios(config)
          .then((response)=>{
            console.log(response.data)
            this.setState({loading:false})
            showMessage({
                          message: "Km Numismatics",
                          description: JSON.stringify(response.data.message),
                          type: "danger",
        textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
        titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                        });
          })
          .catch(function (error) {
            showMessage({
                          message: "Km Numismatics",
                          description:"Error",
                          type: "danger",
        textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
        titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                        });
          });}else{
            this.setState({loading:false})
            showMessage({
                          message: "Km Numismatics",
                          description:"Please enter Email address",
                          type: "danger",
        textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
        titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                        });
          }
      
          }
    return (
      <View style={{width: '100%',height: '100%',backgroundColor:'#FFFFFF'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#FEE9B0',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color:"#000"}}>Forgot your Password</Text>
   </View>
   <View style={{paddingTop:width*0.09,paddingHorizontal:width*0.03}}>
<Text style={{color:'#000',fontSize:width*0.05,fontWeight:'500',textAlign:'center'}}>
  {'Password Reset Instructions will \nbe sent to your email'}
</Text>
   </View>
   <View style={{paddingTop:width*0.05}}>
   <View style={{paddingTop:width*0.2,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Email'
style={{paddingHorizontal:width*0.03,color:"#000",fontSize:width*0.04}}
onChangeText={(text)=>this.setState({email:text})}
value={this.state.email}
/>
</View>
        </View>
        <TouchableOpacity onPress={sendresetPassword}>
            <View style={{paddingTop:width*0.09,marginHorizontal:width*0.06,justifyContent:'center',alignItems:'center'}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"60%"}}>
<Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
  SEND RESET EMAIL
</Text>
              </View>

            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
            <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.05,color:'#000',fontWeight:'500',borderBottomWidth:2,borderBottomColor:"#DCDCDC"}}>
  Back to Sign In
</Text>
            </View>
            </TouchableOpacity>
        </View>
        
        </View>
    )
  }
}