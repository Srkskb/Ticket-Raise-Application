import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity,TouchableNativeFeedback,TextInput } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
let data=[{"name":"Joseph Kuruvilla","location":'South africa'},]
let meta=[{"name":"Shaharukh","location":'America'},]
export default class Address extends Component {
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
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileUpdate')}>
       <View style={{paddingTop:width*0.05,justifyContent:'center',alignItems:'center'}}>
       <View style={{borderWidth:1,borderRadius:10,backgroundColor:'#E44227',borderColor:'#E44227',padding:width*0.02,paddingHorizontal:width*0.05}}>
           <Text style={{color:'#fff',fontSize:width*0.05,fontWeight:'bold',fontFamily:'Poppins-Semibold'}}>
               Add Address
           </Text>
       </View>
       </View>
       </TouchableOpacity>
       <Animatable.View animation="flipInX" style={{width: '100%',padding:10,}}>
         {data.map((item,index)=>{
         	return(
         		<View key={index} style={{width: '100%',paddingVertical:8}}>
         		<View elevation={5} style={{width: '100%',backgroundColor: '#fdfdfd',borderRadius:4}}>
        
             <View style={{width: '100%',flexDirection:'row'}}>
         		<View style={{width: '74%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
         		<View style={{paddingHorizontal:8,justifyContent:'space-between',alignItems:'center',flexDirection:'row',
         		paddingTop:8}}>
                     <Image
                     source={require('../../images/MMMM.png')}
                     style={{height:height*0.05,width:width*0.095}}
                     />
         		<Text style={{fontSize:18,fontFamily: "Montserrat-SemiBold",
            		color:'#121212',textAlign:'center',fontWeight:'bold',paddingHorizontal:width*0.02}}>
           		OFFICE ADDRESS
          		</Text>
          		</View>
          		</View>
              
          		<View style={{width: '26%',paddingTop:width*0.05,justifyContent:'flex-end',alignItems:'flex-end',paddingHorizontal:width*0.05}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProfileUpdate")}>
          		<Image
                  source={require('../../images/ico.png')}
                  style={{height:height*0.03,width:width*0.06}}
                  />
              </TouchableOpacity>
          		</View>
            
          		</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
    <View style={{width:'70%',flexDirection:'row'}}>
        <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
        <Text>
            Avunda Monsenhor Fellx,Rio De Janerio
        </Text>
        <Text>
            Brazil-21361-131
        </Text>
        <Text>
            (21)2201-7653
        </Text>
        </View>
        <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>alert('Change location')}>
<Image
source={require('../../images/kkkk.png')}
style={{height:height*0.097,width:width*0.19,}}
/>
</TouchableNativeFeedback>
        </View>
       
    </View>
</View>
<View style={{paddingTop:width*0.1}}>

</View>
         		</View>
         		</View>
         		)
         })}
         </Animatable.View>
         <Animatable.View animation="flipInX" style={{width: '100%',height: '86%',padding:10}}>
         {meta.map((item,index)=>{
         	return(
         		<View key={index} style={{width: '100%',paddingVertical:8}}>
         		<View elevation={5} style={{width: '100%',backgroundColor: '#fdfdfd',borderRadius:4}}>
                 <View style={{width: '100%',flexDirection:'row'}}>
         		<View style={{width: '74%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
         		<View style={{paddingHorizontal:8,justifyContent:'space-between',alignItems:'center',flexDirection:'row',
         		paddingTop:8}}>
                     <Image
                     source={require('../../images/LLLL.png')}
                     style={{height:height*0.05,width:width*0.095}}
                     />
         		<Text style={{fontSize:18,fontFamily: "Montserrat-SemiBold",
            		color:'#121212',textAlign:'center',fontWeight:'bold',paddingHorizontal:width*0.02}}>
           		HOME ADDRESS
          		</Text>
          		</View>
          		</View>
              
          		<View style={{width: '26%',paddingTop:width*0.05,justifyContent:'flex-end',alignItems:'flex-end',paddingHorizontal:width*0.05}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileUpdate')}>
          		<Image
                  source={require('../../images/ico.png')}
                  style={{height:height*0.03,width:width*0.06}}
                  />
              </TouchableOpacity>
          		</View>
            
          		</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
    <View style={{width:'70%',flexDirection:'row'}}>
        <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
        <Text>
            Rua Otto Feradico Burger 1664 Lemeria
        </Text>
        <Text>
           Salo Paulo Brazil-13486-603
        </Text>
        <Text>
            (19)6027-4742
        </Text>
        </View>
        <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>alert('Change location')}>
<Image
source={require('../../images/kkkk.png')}
style={{height:height*0.097,width:width*0.19,}}
/>
</TouchableNativeFeedback>
        </View>
       
    </View>
</View>
<View style={{paddingTop:width*0.1}}>

</View>
         		</View>
         		</View>
         		)
         })}
         </Animatable.View>
       </SafeAreaView>
    )
  }
}