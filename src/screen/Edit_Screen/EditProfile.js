import { Text, View ,Dimensions,TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';
export default class EditProfile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Open:false,
        name:"",
        countryCode:"",
        address:"",
        userId:"",

      }
      AsyncStorage.getItem('user')
            .then(user =>{
              if(JSON.parse(user)!=null){
              this.setState({userId:JSON.parse(user)[0].id})}
            })
    }
 
  render() {
 const register=()=>{
      var data = JSON.stringify({
          "id": this.state.userId,
          "name": this.state.name,
          "country_code": this.state.countryCode,
          "address":this.state.address
        });
      var config = {
      method: 'patch',
      url: "https://newserver.cloudley.in/api/updatepresonaldetails",
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then((response)=>{
      console.log(response.data)
      if(response.data.status==400){
        showMessage({
                          message: 'Km Numismatics',
                          description:response.data.error,
                          type: 'default',
                          backgroundColor: 'red'
                        })
      }
      if(response.data.code==400){
        showMessage({
                          message: 'Km Numismatics',
                          description:response.data.message,
                          type: 'default',
                          backgroundColor: 'green'
                        })
      }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                    }

    return (
        <View style={{width: '100%',height: '100%',backgroundColor:'#FFFFFF'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#FEE9B0',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
<Ionicons
name='arrow-back-sharp' color={"#000"} size={width*0.08}
/>
</TouchableOpacity>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color:"#000"}}>Edit Profile</Text>
   </View>
   <View style={{paddingTop:width*0.03,justifyContent:'center',alignItems:'center',}}>
        <Text style={{fontSize:width*0.05,color:'#D8C367',fontWeight:'bold'}}>EDIT INFORMATION</Text>
      </View>
      <View style={{borderBottomWidth:1,borderBottomColor:'#dcdcdc',paddingTop:width*0.03}}>

      </View>
      <View style={{backgroundColor:"#ffffff",justifyContent:'flex-start',paddingHorizontal:width*0.03,paddingTop:width*0.03}}>
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02}}>
                 First Name*
               </Text>
               <TextInput
            placeholder='First Name'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            value={this.state.name}
            onChangeText={(Text)=>this.setState({name:Text})}
            />
            <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Last Name*
               </Text>
               <TextInput
            placeholder='Last Name'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            />
               <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Email*
               </Text>
               <TextInput
            placeholder='Email'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            />
              <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Country Name
               </Text>
               <TextInput
            placeholder='Country Name'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            value={this.state.countryCode}
            onChangeText={(Text)=>this.setState({countryCode:Text})}
            />
              <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Phone Number*
               </Text>
               <TextInput
            placeholder='Phone Number'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            keyboardType='number-pad'
            />
              <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Address*
               </Text>
               <TextInput
            placeholder='Address'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            value={this.state.address}
            onChangeText={(Text)=>this.setState({address:Text})}
            />
            </View>
            <TouchableOpacity onPress={register}>
            <View style={{paddingTop:width*0.04,marginHorizontal:width*0.06,justifyContent:'center',alignItems:'center'}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"60%"}}>
<Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
  Save Details
</Text>
              </View>

            </View>
            </TouchableOpacity>
   </View>
    )
  }
}