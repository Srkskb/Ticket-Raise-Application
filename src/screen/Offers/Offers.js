import { Text, View,SafeAreaView,Dimensions,TextInput,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from "react-native-vector-icons/Ionicons"
export default class Offers extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       nameonBank:"",
       nameonCard:"",
       cardNumber:"",
       expiryDate:"",
       cvv:"",
       userId:"",
       loading:false,
       showPop:false,
    }
  }
  goHome(){
    this.props.navigation.navigate('Offers')
  }
  componentDidMount() {
  AsyncStorage.getItem('user')
            .then(user =>{
              if(JSON.parse(user)!=null){
              this.setState({userId:JSON.parse(user)[0].id})}
            })
  }
  render() {
    const addCard =()=>{

      this.setState({loading:true})
      var data = JSON.stringify({
          "user_id": this.state.userId,
          "name_on_bank": this.state.nameonBank,
          "name_on_card": this.state.nameonCard,
          "number":this.state.cardNumber,
          "expire_on": this.state.expiryDate,
           "validation_code": this.state.cvv,
           "status": "1"
      });
      var config = {
        method: 'post',
        url: "http://103.242.116.169:8080/api/addcard",
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
        };
        
        axios(config)
        .then((response)=>{
        console.log(response.data)
        this.setState({loading:false})
        if(response.data.status==400){
          showMessage({
                         message: "Km Numismatics",
                         description:JSON.stringify(response.data.error),
                         type: "danger",
                textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
                titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                                 });
        }else if(response.data.status==200){
          this.setState({loading:false,showPop:true})
        }
        })
        .catch(function (error) {
        showMessage({
                    message: "Km Numismatics",
                    description:'Error',
                    type: "danger",
                textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
                titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                            });
        });

    }
    return (
      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
         {this.state.showPop? <Animatable.View animation="flipInX" style={{position: 'absolute',width:'100%',height:'100%',
      backgroundColor: 'rgba(253, 253, 253, 0.9)',justifyContent:'center',alignItems:'center',zIndex: 5}}>
    <View elevation={5} style={{width:'84%',backgroundColor: '#fdfdfd',padding:20,borderRadius: 4}}>
    <Text style={{color: '#121212',fontSize:22,fontFamily: "Poppins-SemiBold",marginVertical:6}}>
    Km Numismatics</Text>
    <Text style={{color: '#121212',fontSize:18,fontFamily: "Poppins-Regular",marginVertical:6}}>
    Card Added Successfully, Continue to Ku Numismatics</Text>
    <View style={{flexDirection: 'row',justifyContent:'flex-end',alignItems:'center',paddingTop:10 }}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}
                style={{paddingHorizontal:12,paddingVertical:2,justifyContent:'center',alignItems:'center' }}>
                <Text style={{fontSize: 20,color:'#90CDD1',
                fontFamily: "Poppins-SemiBold"}}>Ok</Text></TouchableOpacity>  
    </View>
    </View></Animatable.View>:null}
      <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
      Add Credit Card
      </Text>
      <Text style={{fontSize:width*0.04,fontWeight:'500',color:"#000"}}>
      Please add your card details here
      </Text>
      </View>
      </View>
      {/*<View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.09}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='user-circle' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder='User Id '
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            value={this.state.userId}
onChangeText={(Text)=>this.setState({ userId:Text})}
            />
            </View>
            </View>*/}
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='bank' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder=' Name On Bank'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            value={this.state.nameonBank}
onChangeText={(Text)=>this.setState({ nameonBank:Text})}
            />
            </View>
            </View>
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='user-o' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder=' Name On Card'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            value={this.state.nameonCard}
onChangeText={(Text)=>this.setState({ nameonCard:Text})}
            />
            </View>
            </View>
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='address-card-o' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
            <TextInput
            placeholder=' Card Number'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            keyboardType='numeric'
            value={this.state.cardNumber}
            onChangeText={(Text)=>this.setState({ cardNumber:Text})}
            maxLength={18}
            />
            </View>
            </View>
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='calendar-times-o' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder=' Expiry Date'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            keyboardType='name-phone-pad'
            value={this.state.expiryDate}
            maxLength={5}
            onChangeText={(Text)=>this.setState({ expiryDate:Text})}
            />
            </View>
            </View>
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='credit-card-alt' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder=' CVV'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            keyboardType='name-phone-pad'
            value={this.state.cvv}
            maxLength={4}
            onChangeText={(Text)=>this.setState({ cvv:Text})}
            />
            </View>
            </View>
      <TouchableOpacity onPress={()=>addCard()} >
      <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "80%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD CARD DETAILS
                </Text>
              </View>

            </View>
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
}