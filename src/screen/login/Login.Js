import React, { useState,useEffect } from 'react';
import {TextInput,View,TouchableOpacity,Text,Dimensions,StatusBar,Platform,StyleSheet,Image,ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window');
import CardView from 'react-native-cardview'
import * as Animatable from 'react-native-animatable';

import PhoneInput from "react-native-phone-number-input";


const Login=({navigation})=>{
  const [show, setshow] = useState(false);
  const [eshow, seteshow] = useState(false);
return (
  <View style={{width: '100%',height: '100%',justifyContent:'center',alignItems:'center',
backgroundColor: '#f1f1f1'}}>
      <Image
            source={{uri:'https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
            style={{height:"100%",width:"100%",position: 'absolute'}}
            opacity={0.7}
            />
{!show? <View elevation={5} style={{width:"80%",justifyContent:'center',alignItems:'center',
padding:height*0.04,backgroundColor: '#fdfdfd',borderRadius:6}}>
  <Animatable.Text animation="slideInDown" style={{fontSize:24,color:'#121212',fontFamily: "Montserrat-SemiBold"}}>
    LOGIN
  </Animatable.Text>
  <Animatable.Text animation="slideInDown" style={{fontSize:10,color:'#999',
  paddingTop:height*0.01,fontWeight:'500',fontFamily: "Montserrat-SemiBold"}}>
    Enter details to proceed
  </Animatable.Text>
  <Animatable.View animation="zoomInDown" style={{paddingTop:height*0.02,width:'100%',
        alignSelf:'center'}}>
         <TextInput
         style={{borderRadius:5,fontSize:16,borderWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={'Email/Username'}
         placeholderTextColor={"#999"}
         />
        </Animatable.View>
    <Animatable.View animation="zoomInDown" style={{paddingTop:height*0.02,width:'100%',
        alignSelf:'center'}}>
         <TextInput
         style={{borderRadius:5,fontSize:16,borderWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={'Password'}
         placeholderTextColor={"#999"}
         />
        </Animatable.View>    
    <View style={{paddingTop:height*0.02,width:'100%',
        alignSelf:'center'}}>
        <Animatable.View animation="flipInX">
        <TouchableOpacity onPress={()=>navigation.navigate('Main')}
        style={{borderRadius:5,height:44,backgroundColor:"#E48505",justifyContent:'center'}}>
          <Text style={{fontSize:16,fontFamily: "Montserrat-Medium",
            color:'#ffffff',textAlign:'center',fontWeight:'500'}}>
           SignIn
          </Text>
        </TouchableOpacity>
          </Animatable.View>
        </View>
    {/*<View style={{paddingTop:height*0.02,width:'100%',
        alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}
        style={{borderRadius:5,height:44,borderColor:"#E48505",justifyContent:'center',
        borderWidth:1}}>
          <Text style={{fontSize:16,fontFamily: "Montserrat-Medium",
            color:'#E48505',textAlign:'center',fontWeight:'500'}}>
          SignUp
          </Text>
        </TouchableOpacity>
    </View>*/}   
</View>:
<View style={{width:"100%",justifyContent:'flex-start',alignItems:'flex-start',
padding:height*0.04,position:'absolute',backgroundColor: '#fdfdfd',bottom:0}}>
<Animatable.Text animation="slideInDown" style={{fontSize:24,color:'#121212',fontFamily: "Montserrat-SemiBold"}}>
  WELCOME
</Animatable.Text>
<Animatable.Text animation="slideInDown" style={{fontSize:10,color:'#999',
  paddingTop:height*0.01,fontWeight:'500',fontFamily: "Montserrat-SemiBold"}}>
  An OTP have been sent to +91-XXXXXXXXXX
  </Animatable.Text>
  <View style={{paddingTop:height*0.02,width:'100%',alignItems:'center',justifyContent:'center',
flexDirection:'row'}}>
  <TextInput
         style={{fontSize:16,borderBottomWidth:1,paddingHorizontal:1,marginRight:10
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={''}
         placeholderTextColor={"#ccc"}
         keyboardType={'numeric'}
         maxLength={1}
         />
    <TextInput
         style={{fontSize:16,borderBottomWidth:1,paddingHorizontal:1,marginRight:10
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={''}
         placeholderTextColor={"#ccc"}
         keyboardType={'numeric'}
         maxLength={1}
         />
    <TextInput
         style={{fontSize:16,borderBottomWidth:1,paddingHorizontal:1,marginRight:10
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={''}
         placeholderTextColor={"#ccc"}
         keyboardType={'numeric'}
         maxLength={1}
         />
    <TextInput
         style={{fontSize:16,borderBottomWidth:1,paddingHorizontal:1,marginRight:10
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={''}
         placeholderTextColor={"#ccc"}
         keyboardType={'numeric'}
         maxLength={1}
         />
  </View>
<View style={{paddingTop:height*0.04,width:'100%',
        alignSelf:'center'}}>
        <Animatable.View animation="flipInX">
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}
        style={{borderRadius:5,height:44,backgroundColor:"#E48505",justifyContent:'center'}}>
          <Text style={{fontSize:16,fontFamily: "Montserrat-Medium",
            color:'#ffffff',textAlign:'center',fontWeight:'500'}}>
          Enter OTP
          </Text>
        </TouchableOpacity>
          </Animatable.View>
        </View>
      
</View>
}
{/*{eshow? <View style={{width:"100%",justifyContent:'flex-start',alignItems:'flex-start',
padding:height*0.04,position:'absolute',backgroundColor: '#fdfdfd',zIndex:100}}>
  <TouchableOpacity onPress={()=>{setshow(false);seteshow(false)}}
        style={{justifyContent:'center'}}>
          <Text style={{fontSize:16,fontFamily: "Montserrat-Medium",
            color:'#E48505',textAlign:'center',fontWeight:'500'}}>
        Go Back
          </Text>
        </TouchableOpacity>

  <Animatable.Text animation="slideInDown" style={{fontSize:24,color:'#121212',fontFamily: "Montserrat-SemiBold"}}>
    LOGIN WITH EMAIL
  </Animatable.Text>
<Animatable.Text animation="slideInDown" style={{fontSize:10,color:'#999',
  paddingTop:height*0.01,fontWeight:'500',fontFamily: "Montserrat-SemiBold"}}>
    Enter your Email to proceed
  </Animatable.Text>
<Animatable.View animation="zoomInDown" style={{paddingTop:height*0.02,width:'100%',
        alignSelf:'center'}}>
         <TextInput
         style={{fontSize:16,borderBottomWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={'Email'}
         placeholderTextColor={"#ccc"}
         />
        </Animatable.View>
        <Animatable.View animation="zoomInDown" style={{paddingTop:height*0.02,width:'100%',
        alignSelf:'center'}}>
         <TextInput
         style={{fontSize:16,borderBottomWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
         ,borderColor:'#E48505',fontFamily: "Montserrat-Medium"}}
         placeholder={'Password'}
         placeholderTextColor={"#ccc"}
         />
        </Animatable.View>
    <View style={{paddingTop:height*0.04,width:'100%',alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MainScreen')}
        style={{borderRadius:5,height:44,borderColor:"#E48505",justifyContent:'center',
        borderWidth:1}}>
          <Text style={{fontSize:16,fontFamily: "Montserrat-Medium",
            color:'#E48505',textAlign:'center',fontWeight:'500'}}>
           Login Using Email
          </Text>
        </TouchableOpacity>
    </View>
</View>:null}*/}
</View>
    );
  }
export default Login

const styles = StyleSheet.create({
container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: 'grey'
  },
  input:{
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: 'grey',
  borderRadius: 17,
  width:'70%',
  marginVertical: 4,
  fontSize: 16,
  paddingVertical:2,
  paddingHorizontal:12
}
});
