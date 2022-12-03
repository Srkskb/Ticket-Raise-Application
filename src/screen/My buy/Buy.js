import { Text, View,Dimensions ,SafeAreaView,StyleSheet,TextInput,ScrollView,
	TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get("window");
let data=[{"name":"Joseph Kuruvilla","location":'South africa'}]
export default class Buy extends Component {
  render() {
    return (
      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
      <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
      <Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
        ADDRESSES
      </Text>
      <TouchableOpacity style={{borderRadius:10,borderWidth:1,padding:10,backgroundColor:"rgba(114,205,228,255)",borderColor:'rgba(114,205,228,255)'}}onPress={()=>this.props.navigation.navigate("NewAd")}>
      <Text style={{fontSize:width*0.04,fontWeight:'500',color:"#fff"}}>
        Add new address
      </Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={{paddingTop:width*0.03,paddingHorizontal:width*0.05}}>
  <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>

  </View>
</View>
<View style={[styles.container, { backgroundColor: "#FFFFFF" }]} >
    <ScrollView style={{width: '100%',height: '86%'}} showsVerticalScrollIndicator={false}>
     <Animatable.View animation="flipInX" style={{width: '100%',height: '86%'}}>
         {data.map((item,index)=>{
         	return(
         		<View key={index} style={{width: '100%',paddingVertical:width*0.2}}>
         		<View elevation={5} style={{width: '100%',backgroundColor: '#fdfdfd',borderRadius:4}}>
              
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:"#dcdcdc",padding:10}}>
<FontAwesome5
name='university' size={width*0.06} color={"#9e7926"}
/>
<Text style={{fontSize:width*0.045,fontWeight:'bold',color:'#000'}}>
  Home Address (Shipping Address)
</Text>
<TouchableOpacity>
<FontAwesome5
name='edit' size={width*0.06} color={"#9e7926"}
/>
</TouchableOpacity>
<TouchableOpacity>
<MaterialCommunityIcons
name='delete' size={width*0.07} color={"#9e7926"}
/>
</TouchableOpacity>

                </View>
                <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
<Text 
 style={{fontSize:width*0.04,fontWeight:'500',color:'#000'}}>
  Shaharukh Khan
</Text>
                </View>
                <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000'}}>
Phone  :
</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000',paddingHorizontal:width*0.02}}>
8126759170
</Text>
                </View>
                </View>
                <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000'}}>
City :
</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000',paddingHorizontal:width*0.02}}>
Shikohabad
</Text>
                </View>
                </View>
                <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000'}}>
Zip Code :
</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000',paddingHorizontal:width*0.02}}>
283135
</Text>
                </View>
                </View>
                <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000'}}>
Address :
</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#000',paddingHorizontal:width*0.02}}>
Meer Khaleel Shokohabad
</Text>
                </View>
                </View>
                <View style={{paddingBottom:width*0.1}}>

</View>
              </View>
         		</View>
            
         		)
         })}
         </Animatable.View>
         </ScrollView>
         </View>
</SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
  },
})