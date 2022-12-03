import { Text, View,Dimensions ,SafeAreaView,StyleSheet,TextInput,ScrollView,
	TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get("window");
let data=[{"name":"Joseph Kuruvilla","location":'South africa'},{"name":"Rakesh","location":"India"},{'name':"ram"},{'name':'ewm'}]


export default class Want extends Component {
  render() {
    return (
      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
      <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
        My Wishlist
      </Text>
      </View>
      </View>
      <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
  <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>

  </View>
</View>
<View style={[styles.container, { backgroundColor: "#FFFFFF" }]} >
    <ScrollView style={{width: '100%',height: '86%'}} showsVerticalScrollIndicator={false}>
     <Animatable.View animation="flipInX" style={{width: '100%',height: '86%'}}>
         {data.map((item,index)=>{
         	return(
         		<View key={index} style={{width: '100%',paddingVertical:8}}>
         		<View elevation={5} style={{width: '100%',backgroundColor: '#fdfdfd',borderRadius:4}}>
              <View style={{paddingTop:width*0.05,}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
<View style={{width:"40%",justifyContent:'flex-start',alignItems:'flex-start'}}>
<Image
source={require('../../images/dfc.jpg')}
style={{height:height*0.1,width:width*0.2,alignSelf:'center'}}
/>
</View>
<View style={{width:"40%",justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
<Text style={{fontSize:width*0.035,color:"#000"}}>
Levasto Handmade Antique Beatiful wooden Round Snaped Serving Tray
</Text>
<Text style={{fontSize:width*0.03,paddingTop:width*0.02,color:"#000"}}>
  Brand Levasto 
</Text>
<Text style={{fontSize:width*0.03,paddingTop:width*0.01,color:"#000"}}>
  499.00
</Text>
</View>
<View style={{width:"20%",justifyContent:'center',alignItems:'center'}}>
  <TouchableOpacity onPress={()=>alert("Are you  sure want to delete")}>
<MaterialCommunityIcons
name='delete' size={width*0.08} color={"#000000"}
/>
</TouchableOpacity>
</View>
                </View>
<View style={{paddingBottom:width*0.06}}>

</View>
              </View>
         		</View>
         		</View>
            
         		)
         })}
         </Animatable.View>
         <View style={{paddingBottom:width*0.2}}>

            </View>
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