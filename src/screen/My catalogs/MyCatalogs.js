import { Text, View,Dimensions ,SafeAreaView,StyleSheet,TextInput,ScrollView,
	TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get("window");

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          initializing: true,
          open:false,
          value:'',
          open1:false,
          value1:'',
          sopen:false,
          sdate:new Date(),
          eopen:false,
          edate:new Date(),
        };
      }
      render() {
    return (
<SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
  <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
  Track Orders
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
  <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>

  </View>
</View>
<View style={{paddingTop:width*0.2,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:15,borderColor:"#dcdcdc"}}>
<FontAwesome5
              name='gift' size={width * 0.06} color={"#53B577"}
              style={{paddingBottom:width*0.01,paddingHorizontal:width*0.02}}
            />
            <TextInput
            placeholder='Order ID'
            style={{fontSize:width*0.04,paddingHorizontal:width*0.05,color:"#000"}}
            />
            </View>
</View>
<View style={{paddingTop:width*0.05,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:15,borderColor:"#dcdcdc"}}>
<FontAwesome5
              name='phone-alt' size={width * 0.06} color={"#53B577"}
              style={{paddingBottom:width*0.01,paddingHorizontal:width*0.02}}
            />
            <TextInput
            placeholder='Your Phone Number'
            style={{fontSize:width*0.04,paddingHorizontal:width*0.05,color:"#000"}}
            />
            </View>
</View>
<TouchableOpacity onPress={() =>alert("Message send succesfully")} >
            <View style={{ paddingTop: width * 0.2, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "60%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  Track Order
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</SafeAreaView>
     
     
      )
    }
  }
  const styles = StyleSheet.create({
    Container:{
      height:750,
      backgroundColor:"#ffffff",
      justifyContent:'flex-start',
      paddingHorizontal:width*0.05
      
    }
  })