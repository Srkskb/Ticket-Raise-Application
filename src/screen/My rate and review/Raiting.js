import { Text, View ,Dimensions,SafeAreaView,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ProgressBar from '../../components/ProgressBar';
const { width, height } = Dimensions.get("window");
import AntDesign from 'react-native-vector-icons/AntDesign'
export default class Raiting extends Component {
  render() {
    
    return (
      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
        <View style={{paddingTop:width*0.05}}>
<View style={{alignItems:'center',justifyContent:'flex-start',flexDirection:'row',paddingHorizontal:width*0.06}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:"#000"}}>
  Rating 5
</Text>
<TouchableOpacity onPress={()=>alert("No Product...")}>
        <AntDesign
              name='star' size={width * 0.06} color={"#000000"}
            />
            </TouchableOpacity>
</View>
<View style={{paddingHorizontal:width*0.06,paddingTop:width*0.02}}>
  <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000000aa"}}>
    Based on 1 reviews
  </Text>
</View>
        </View>
<AirbnbRating />
<View style={{marginHorizontal:width*0.05,}}>
<View style={{width: '100%',paddingTop:20,}}>
    <ProgressBar progress={100} height={8} backgroundColor="#058A31" progressDuration={3000}
      inbackgroundColor="#ccc"/>
    </View>
    <View style={{width: '100%',paddingTop:20}}>
    <ProgressBar progress={80} height={8} backgroundColor="#058A31" progressDuration={3000}
      inbackgroundColor="#ccc"/>
    </View>
    <View style={{width: '100%',paddingTop:20}}>
    <ProgressBar progress={50} height={8} backgroundColor="#058A31" progressDuration={3000}
      inbackgroundColor="#ccc"/>
    </View>
    <View style={{width: '100%',paddingTop:20}}>
    <ProgressBar progress={30} height={8} backgroundColor="#058A31" progressDuration={3000}
      inbackgroundColor="#ccc"/>
    </View>
    <View style={{width: '100%',paddingTop:20}}>
    <ProgressBar progress={15} height={8} backgroundColor="#058A31" progressDuration={3000}
      inbackgroundColor="#ccc"/>
    </View>
      </View>
      <View style={{paddingTop:width*0.2,paddingHorizontal:width*0.06}}>
<View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',borderBottomWidth:1,paddingBottom:width*0.03,borderBottomColor:"#dcdcdc"}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000000"}}>
Recent Reviews
</Text>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("WriteReview")}>
<View style={{borderRadius:10,borderWidth:1,padding:10,backgroundColor:"#16B0A1",borderColor:"#16B0A1"}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#FFF"}}>
Write A Reviews
</Text>
</View>
</TouchableOpacity>
</View>
      </View>
      <View style={{paddingTop:width*0.06,paddingHorizontal:width*0.06}} >
      <Text style={{fontSize:width*0.05,fontWeight:'bold',color:"#000000"}}>
This is title
</Text>
      </View>
      <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.06}} >
      <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000000aa"}}>
Posted On - jul 5, 2022
</Text>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000000aa"}}>
This is really nice
</Text>
      </View>
      <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.06}} >
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000000aa"}}>
Shaharukh khan
</Text>
</View>
      </View>
      <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.06}} >
      <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>

      </View>
      </View>
      <View style={{paddingTop:width*0.03,paddingHorizontal:width*0.06}} >
      <TouchableOpacity onPress={()=>alert("Are You Want to see  more Reviews")}>
<View style={{borderRadius:10,borderWidth:1,padding:10,backgroundColor:"#16B0A1",borderColor:"#16B0A1",justifyContent:'center',alignItems:'center',width:"50%",alignSelf:'center'}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#FFF"}}>
Load More Reviews
</Text>
</View>
</TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
}