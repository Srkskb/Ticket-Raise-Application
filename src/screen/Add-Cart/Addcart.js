import React, {Component} from 'react';
import {View, Text,Dimensions,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get("window");

export default class Addcart extends Component {
  render() {
    return (
        <View style={{width: '100%',height: '100%'}}>
        <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
        alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
       <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'500',fontFamily:'Poppions-Regular'}}>Debit/Credit Cards</Text>
     </View>
     <View style={{paddingTop:width*0.05}}>
     <View    elevation ={5} style={{height:300,width:370,backgroundColor:"#FFFFFF",justifyContent:'center',
     alignItems:'center',alignSelf:'center',paddingBottom:width*0.06,borderRadius:10}}>
     <View style={styles.topField}>
  <TextInput
  style={{fontSize:20,borderBottomWidth:1}}
  placeholder={'1234-5678-9012-5456'}
  placeholderTextColor={"#000000"}
  keyboardType="numeric"
  />
 </View>
 <View style={{flexDirection:'row',paddingTop:width*0.04,width:"80%"}}>
 <View style={{width:'40%'}}>
  <TextInput
  style={{fontSize:20,borderBottomWidth:2,paddingHorizontal:width*0.05}}
  placeholder={'MM/YY'}
  placeholderTextColor={"#000000"}
  keyboardType='name-phone-pad'
  />
</View>
<View style={{width:"60%",paddingLeft:width*0.1}} >
  <TextInput
  style={{fontSize:20,borderBottomWidth:2,paddingHorizontal:width*0.1}}
  placeholder={'CVV'}
  placeholderTextColor={"#000000"}
  keyboardType="phone-pad"
  />
  </View>
  
  </View>
  <View style={styles.topField}>
  <TextInput
  style={{fontSize:20,borderBottomWidth:1}}
  placeholder={'Name'}
  placeholderTextColor={"#000000"}
  />
 </View>
 </View>
 <View style={{paddingTop:width*0.09}}>
   <TouchableOpacity onPress={()=>this.props.navigation.navigate("Sucess")}>
 <View style={{borderWidth:1,borderRadius:5,paddingVertical:width*0.05,marginHorizontal:width*0.06,backgroundColor:"#5A429B",borderColor:"#5A429B"}}>
   <Text style={{textAlign:'center',fontSize:width*0.05,color:"#FFFFFF"}}>
     ADD CARDS
   </Text>
 </View>
 </TouchableOpacity>
 </View>
     </View>
     </View>
    )
  }
}
const styles = StyleSheet.create({
    topField: {
      marginTop:10,
      width:'80%',
      borderBottomWidth:1,
      alignSelf:'center'
      
      
  },
  bottomField: {
    marginTop: 10,
    width:'40%',
    borderBottomWidth:1,
    alignSelf:'center'
    
    
  },
  })