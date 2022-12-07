import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity,TouchableNativeFeedback,TextInput } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
export default class Add extends Component {
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
    Enter Complete an address
</Text>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingTop:width*0.02}}>
              
        </View>
        <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
            <Text>
                save  address as * 
            </Text>
        </View>
        <View style={{ height: '5%', justifyContent: 'center', alignItems: 'center', width: width }}>
          <View style={{
            flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",
            width: '100%', height: '80%'
          }}>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 ,paddingHorizontal:width*0.05}}>
              HOME
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03,paddingHorizontal:width*0.05 }}>
              OFFICE 
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03,paddingHorizontal:width*0.05 }}>
              HOTEL
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03,paddingHorizontal:width*0.05 }}>
              Others
            </Text>
          </View>
        </View>
        <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Complete Addess'
style={{paddingHorizontal:width*0.03}}
/>
</View>
        </View>
        <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Floor (Optional)'
style={{paddingHorizontal:width*0.03}}
/>
</View>
        </View>
        <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Near by Landmark (Optional)'
style={{paddingHorizontal:width*0.03}}
/>
</View>
        </View>
        <TouchableOpacity onPress={()=>alert('Saved chabges')}>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.06}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#E44226",borderColor:'#E44226',justifyContent:'center',alignItems:'center',padding:10}}>
<Text style={{color:'#fff',fontSize:width*0.04}}>
  Save address
</Text>
              </View>

            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Payment")}>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.06}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#1599B0",borderColor:'#1599B0',justifyContent:'center',alignItems:'center',padding:10}}>
<Text style={{color:'#fff',fontSize:width*0.04}}>
  Procced to checkout
</Text>
              </View>

            </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
  }
}