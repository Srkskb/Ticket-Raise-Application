//import liraries
import React, { Component ,useEffect,useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SocketServices from '../../components/SocketServices/Socket';

// create a component
const Auction = () => {
  const [data ,setData]=useState()
    useEffect(() => {
     SocketServices.intializeSocket()
    }, [])

    const addBfairwarningid =()=>{
    
      SocketServices.emit('addfairwarningBid',(data))
    }
    return (
        <View style={styles.container}>
            <Text onPress={addBfairwarningid}
            >MyComponent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Auction;
// import { Text, View,TextInput,Dimensions, ScrollView,TouchableOpacity,StyleSheet,Image} from 'react-native'
// import React, { Component } from 'react'
// const { width, height } = Dimensions.get("window");
// import * as Animatable from 'react-native-animatable';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// let data=[{"name":"Joseph Kuruvilla","location":'South africa'},{"name":"Joseph Kuruvilla","location":'South africa'},{"name":"Joseph Kuruvilla","location":'South africa'},]
// let dat=[{"name":"Joseph Kuruvilla","location":'South africa'},]
// export default class Auction extends Component {
//   render() {
//     return (
//       <View style={{width: '100%',height: '100%',backgroundColor:'#FFFFFF'}}>
//         <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03,}}>
     
//      <View style={{flexDirection:'row',alignItems:'center'
//      ,justifyContent:'space-between',}}>
//               <View style={{borderWidth:1,borderRadius:25,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"40%"}}>
//               <TouchableOpacity>
// <Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
//   UpComing
// </Text>
// </TouchableOpacity>
//  </View>
 
 
//  <View style={{borderWidth:1,borderRadius:25,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"20%"}}>
//  <TouchableOpacity>
// <Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
//   Past
// </Text>
// </TouchableOpacity>
//  </View>


//  <View style={{borderWidth:1,borderRadius:25,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"30%"}}>
//  <TouchableOpacity>
// <Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
//   Winning
// </Text>
// </TouchableOpacity>
//  </View>

// </View>
// </View>
// <View style={[styles.container, { backgroundColor: "#FFFFFF" }]} >
//     <ScrollView style={{width: '100%',height: '86%'}} showsVerticalScrollIndicator={false}>
//      <Animatable.View animation="flipInX" style={{width: '100%',height: '86%'}}>
//          {data.map((item,index)=>{
//          	return(
//          		<View key={index} style={{width: '100%',paddingVertical:8}}>
//          		<View elevation={5} style={{width: '100%',backgroundColor: '#fdfdfd',borderRadius:4}}>
//               <View style={{paddingTop:width*0.05,}}>
//                 <View style={{borderWidth:1,borderRadius:5,marginHorizontal:width*0.05
//                   ,padding:5,backgroundColor:"#F8F7FC",borderColor:'#F8F7FC'}}>
// {/* <Text style={{fontSize:width*0.05,fontWeight:'bold',textAlign:'center',color:"#036E9B"}}>
//   Products
// </Text> */}
// <Image
// source={{uri:"https://newserver.cloudley.in/images/lot/auction/1/1.jpg"}}
// resizeMode='cover'
// style={{height:400,width:"100%"}}
// />
//                 </View>
// <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
// <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
//   1941 B INDIA 1/4 ANNA MS63 BN
// </Text>
// </View>
// <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
//   <View style={{borderBottomWidth:1,borderTopWidth:1,borderWidth:1
//     ,flexDirection:'row',padding:20,borderTopColor:"#DCDCDC",borderBottomColor:"#DCDCDC",borderColor:"#DCDCDC"}}>
//     <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
// <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#8BB08E'}}>
//   Current Bid
// </Text>
// <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
//   $100.00
// </Text>
// </View>

// <View style={{borderWidth:1,paddingHorizontal:width*0.001,backgroundColor:"#000",marginHorizontal:width*0.12,borderColor:"#DCDCDC"}}>

// </View>
// <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
// <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#8BB08E'}}>
//   Starting Price
// </Text>
// <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
//  $100.00
// </Text>
// </View>
//   </View>
// </View>
// <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
// <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
// <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#FFFFFF'}}>
// 0d : 0h : 49m : 1s 
// </Text>
// <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#8BB08E'}}>
// 1 Bids
// </Text>
// </View>
// </View>
// <TouchableOpacity onPress={()=>alert(" Bid Sumbit Sucessfully")}>
//             <View style={{paddingTop:width*0.04,marginHorizontal:width*0.06,justifyContent:'center',alignItems:'center'}}>
//               <View style={{borderWidth:1,borderRadius:25,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"60%"}}>
// <Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
//   Submit A Bid
// </Text>
//               </View>

//             </View>
//             </TouchableOpacity>
// <View style={{paddingBottom:width*0.06}}>

// </View>
//               </View>
//          		</View>
//          		</View>
            
//          		)
//          })}
//          </Animatable.View>
//          <View style={{paddingBottom:width*0.2}}>

//             </View>
//          </ScrollView>
         
//     </View>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     width: width,
//     height: '100%',
//   },
// })