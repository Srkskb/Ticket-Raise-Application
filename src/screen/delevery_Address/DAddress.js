import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity,TouchableNativeFeedback,TextInput } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
export default class DAddress extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: width, height: height, backgroundColor: "#FFFFFF" }}>
         <View style={{
          flexDirection: 'row', alignItems: "center", justifyContent: 'space-between',
          backgroundColor: "#F7B614", width: width, height: '6%', paddingHorizontal: width * 0.05, paddingTop: width * 0.02
        }}>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo
              name='location-pin' size={width * 0.07} color={"#E42217"}
            />
            <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.03}}>
            <Text style={{ fontSize: width * 0.03, color: "#E42217", fontWeight: "bold" }}>
              Bazar Chitil Qabar
            </Text >
            <Text style={{fontSize:9,color:'#FFF'}}>
               chandni chowk new delhi
            </Text>
            </View>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Location')}>
              <Entypo
                name='chevron-small-down' size={width * 0.06} color={"#E42217"}
              />
            </TouchableOpacity>
          </View>
          <TouchableNativeFeedback onPress={()=>alert("Are you want to change your profile.")}>
     <Image
     source={require("../../images/10.png")}
     resizeMode="contain"
     style={{height:height*0.06,width:width*0.1,borderRadius:width*0.1,borderColor:"#E44217"}}
     
     />
     </TouchableNativeFeedback>
        </View>
        <View style={{
          justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7B614',
          width: width, height: '8%', paddingTop: width * 0.01
        }} >
          <View style={{
            borderRadius: 10, backgroundColor: "#FFFFFF", width: "90%",
            borderColor: "#FFFFFF", height: '80%',
          }}>

            <View style={{ flexDirection: 'row', width: '100%' }} >
              <View style={{ width: '16%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <FIcon name="search" size={width * 0.06} color="#DCDCDC"
                /></View>
              <View style={{ width: '68%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                <TextInput
                  style={{ fontSize: 20 }}
                  placeholder={'Search your delivery location'}
                  placeholderTextColor={"#DCDCDC"}
                /></View>
              <TouchableOpacity style={{ width: '16%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => alert("Please Speak something...")}>
                <FIcon name="mic" size={width * 0.06} color="#E42217"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
<Text style={{fontSize:width*0.05,color:'#000',fontFamily:"Poppins-SemiBold",fontWeight:'500'}}>
    Select an address
</Text>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingTop:width*0.02}}>
              
        </View>
        <View style={{paddingTop:width*0.03,paddingHorizontal:width*0.03,}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Add")}>
            <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#E44226'}}>
+ Add Address
            </Text>
            </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingTop:width*0.02,marginHorizontal:width*0.03}}>
              
              </View>
        <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
<Text style={{fontSize:width*0.05,color:'#000',fontFamily:"Poppins-SemiBold",fontWeight:'500'}}>
    Saved addresses
</Text>
<Text style={{fontSize:width*0.03,color:'#E44226',fontFamily:"Poppins-SemiBold",fontWeight:'500'}}>
    Does not delivery to
</Text>
        </View>
        <TouchableOpacity>
        <View style={{paddingTop:width*0.03,justifyContent:'center',alignItems:'center'}}>
        <View elevation={8} style={{height:100,borderRadius:10,width:400,justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,color:'#000',fontFamily:"Poppins-SemiBold",fontWeight:'500'}} >
    Home 
</Text>
<Text style={{textAlign:'center'}}>
       { 'bahlolpur gali- 10 noida scetor 63 \nUttar pradesh 205135'}
    </Text>
</View>

<View>
  
</View>
        </View>
        </TouchableOpacity>
        <View style={{paddingTop:width*0.03,justifyContent:'center',alignItems:'center'}}>
        <View elevation={8} style={{height:100,borderRadius:10,width:400,justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,color:'#000',fontFamily:"Poppins-SemiBold",fontWeight:'500'}} >
    Office
</Text>
<Text style={{textAlign:'center'}}>
       { ' noida scetor 63 block H-150 \nUttar pradesh 205135'}
    </Text>
</View>

<View>
  
</View>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingTop:width*0.08,marginHorizontal:width*0.03}}>
              
              </View>
        </SafeAreaView>
    )
  }
}