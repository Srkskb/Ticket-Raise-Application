import { Text, View,SafeAreaView,Dimensions,TextInput,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

export default class Offers extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading:false,
      showPop:false,
       lotId:"",
       title:"",
       description:"",
       rating:"",
       userId:"",
    }
  }
  render() {
    const addReview=()=>{

      this.setState({loading:true})
      var data = JSON.stringify({
        
          "user_id": this.state.userId,
          "lot_id": this.state.lotId,
          "title": this.state.title,
          "description": this.state.description,
          "rating": this.state.rating
      
      });
      var config = {
        method: 'post',
        url: `http://103.242.116.169:8080/api/submitRatingAndReview?user_id=${this.state.userId}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
        };
        axios(config)
        .then((response)=>{
        console.log(response.data)
        this.setState({loading:false})
        if(response.data.status=='failed'){
          showMessage({
                         message: "Km Numismatics",
                         description:JSON.stringify(response.data.message),
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
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Raiting")}
                style={{paddingHorizontal:12,paddingVertical:2,justifyContent:'center',alignItems:'center' }}>
                <Text style={{fontSize: 20,color:'#90CDD1',
                fontFamily: "Poppins-SemiBold"}}>Ok</Text></TouchableOpacity>  
    </View>
    </View></Animatable.View>:null}
      <View style={{paddingTop:width*0.2,paddingHorizontal:width*0.05}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
      Add New Review
      </Text>
      <Text style={{fontSize:width*0.04,fontWeight:'500',color:"#000"}}>
      Please add your review details here
      </Text>
      </View>
      </View>
      <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.09}}>
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
            </View>
          
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='diamond' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder='Lot Id '
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            value={this.state.lotId}
            onChangeText={(Text)=>this.setState({lotId:Text})}
      
            />
            </View>
            </View>
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='image' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder=' Title'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            value={this.state.title}
            onChangeText={(Text)=>this.setState({title:Text})}
         
            />
            </View>
            </View>
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='book' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder=' Description'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            value={this.state.description}
            onChangeText={(Text)=>this.setState({description:Text})}
           
            />
            </View>
            </View>
            <View style={{backgroundColor:"#ffffff",paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius:10,borderWidth:1}}>
      <FontAwesome
      name='star' size={width*0.05} color={"#000"}
      style={{paddingHorizontal:width*0.05}}
      />
               <TextInput
            placeholder='Raiting'
            style={{color:"#000000",fontSize:width*0.04}}
            placeholderTextColor={'grey'}
            keyboardType='name-phone-pad'
            value={this.state.rating}
            onChangeText={(Text)=>this.setState({rating:Text})}
            />
            </View>
            </View>
            <TouchableOpacity onPress={addReview} >
            <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "80%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD REVIEW
                </Text>
              </View>

            </View>
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
}