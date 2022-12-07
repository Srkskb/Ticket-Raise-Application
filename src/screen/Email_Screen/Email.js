import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity,TouchableNativeFeedback,TextInput } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
export default class Email extends Component {
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
<Text style={{fontSize:width*0.05,color:'#000',fontFamily:"Poppins-SemiBold"}}>
    Delete Account
</Text>
<Text>
    Why would you like to delete your account?
</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.08,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.04,color:"#000011",fontWeight:"500"}}>
    I don't want to use Afreefood anymore
  </Text> 
 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.09,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity > 
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.04,color:"#000011",fontWeight:"500"}}>
    I am using a differnt account
  </Text> 
 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity > 
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.04,color:"#000011",fontWeight:"500"}}>
    I am worried about my privacy
  </Text> 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity > 
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.04,color:"#000011",fontWeight:"500"}}>
    You are sending me too many emails/notifiaction
  </Text> 

</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity > 
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.04,color:"#000011",fontWeight:"500"}}>
    This app is not working properly
  </Text> 
 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity > 
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.04,color:"#000011",fontWeight:"500"}}>
    Others  
  </Text> 
 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity > 
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
        </SafeAreaView>
    )
  }
}