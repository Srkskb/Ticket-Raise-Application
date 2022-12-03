import { Text, View,Dimensions ,SafeAreaView,StyleSheet,TextInput,ScrollView,
	TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get("window");

export default class NewAd extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        open:true, 
      }
    }
    componentDidMount() {
        this.setState({open:true})
      }
  render() {
    return (
        <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
        <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
          <View style={{justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
          Add New Address
        </Text>
        </View>
        </View>
        <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
    <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>
    </View>
    </View>
    <View style={{ height: '8%', justifyContent: 'center', alignItems: 'center', width: width }}>
          <View style={{
            flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",
            width: '100%', height: '80%'
          }}>
            <TouchableOpacity onPress={()=>this.setState({open:false})}>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 ,paddingHorizontal:width*0.05}}>
              HOME
            </Text>
            </TouchableOpacity>
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
        <ScrollView style={{width: '100%',height: '90%'}} showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:"#ffffff",justifyContent:'flex-start',paddingHorizontal:width*0.03,paddingTop:width*0.03}}>
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02}}>
                 Contact person Name*
               </Text>
               <TextInput
            placeholder='Contact person Name'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            />
            <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Phone Number*
               </Text>
               <TextInput
            placeholder='Phone Number'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            />
               <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 City*
               </Text>
               <TextInput
            placeholder='City'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            />
              <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Zip Code
               </Text>
               <TextInput
            placeholder='Zip code'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            />
              <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.02,paddingHorizontal:width*0.02,paddingTop:width*0.02}}>
                 Address*
               </Text>
               <TextInput
            placeholder='Address'
            style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,color:"#000000"}}
            placeholderTextColor={'grey'}
            />
            <TouchableOpacity onPress={()=>alert("Save Sucessfully")}>
            <View style={{paddingTop:width*0.04,marginHorizontal:width*0.06,justifyContent:'center',alignItems:'center'}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"60%"}}>
<Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
    Save New Address
</Text>
              </View>

            </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
  </SafeAreaView>
    )
  }
}
