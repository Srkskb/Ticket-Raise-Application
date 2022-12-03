import { Text, View,SafeAreaView,Dimensions,ScrollView ,TextInput,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Contact extends Component {
  render() {
    return (
        <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
    
        <View style={{width:"100%",height:"8%",backgroundColor:'#dcdcdc',justifyContent:'center'}}>
<View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>Contact Us</Text>
</View>
</View>
<ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
    <View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.07,fontWeight:'bold',color:'#000'}}>Get In Touch</Text>
<Text style={{fontSize:width*0.04,fontWeight:'500',color:'#000000aa'}}>{"We'd love to hear from you!\nLet us know how we can help."}</Text>
</View>
</View>
<View style={{paddingTop:width*0.2,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>
<FontAwesome5
              name='user-circle' size={width * 0.06} color={"#53B577"}
              style={{paddingBottom:width*0.01}}
            />
            <TextInput
            placeholder='Your Name'
            style={{fontSize:width*0.04,paddingHorizontal:width*0.05,color:"#000"}}
            />
            </View>
</View>
<View style={{paddingTop:width*0.05,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>
<Fontisto
              name='email' size={width * 0.06} color={"#53B577"}
              style={{paddingBottom:width*0.01}}
            />
            <TextInput
            placeholder=' Enter Your Email Id'
            style={{fontSize:width*0.04,paddingHorizontal:width*0.05,color:"#000"}}
            />
            </View>
</View>
<View style={{paddingTop:width*0.05,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>
<MaterialCommunityIcons
              name='android-messages' size={width * 0.06} color={"#53B577"}
              style={{paddingBottom:width*0.01}}
            />
            <TextInput
            placeholder=' Enter Your Message'
            style={{fontSize:width*0.04,paddingHorizontal:width*0.05,color:"#000"}}
            />
            </View>
</View>
<TouchableOpacity onPress={() =>alert("Message send succesfully")} >
            <View style={{ paddingTop: width * 0.2, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "60%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  SEND MESSAGE
                </Text>
              </View>

            </View>
          </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
    )
  }
}