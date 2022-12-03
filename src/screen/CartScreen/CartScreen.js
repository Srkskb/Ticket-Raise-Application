import { Text, View,StyleSheet,SafeAreaView,Dimensions,ScrollView,Image,TouchableOpacity,TextInput } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import ProgressBar from '../../components/ProgressBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements'
const { width, height } = Dimensions.get("window");
let data=[{"name":"Joseph Kuruvilla","location":'South africa'},{"name":"Rakesh","location":"India"},{'name':"ram"},{'name':'ewm'}]

export default class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         open:true,
         Live:false,
         Third:false,
         Buy:false,
      }
    }
    componentDidMount() {
        this.setState({open:true})
      }
  render() {
    return (
      
              <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
                  <LinearGradient start={{x: 0.5, y: 0}} end={{x: 0, y:1}} colors={['#ccb62a', '#ccb62a', '#696252']} style={styles.linearGradient}>
                 <View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.05}}>
<Text style={{fontSize:width*0.07,color:"#fff",fontWeight:'bold',}}>
    Shopping Cart
</Text>
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
source={require('../../images/895.jpeg')}
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
                <TouchableOpacity onPress={()=>alert("Are You sure want to see")} >
            <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "60%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  View Cart 
                </Text>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert("Please connect...")} >
            <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "60%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  Check Out 
                </Text>
              </View>

            </View>
          </TouchableOpacity>
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
      </LinearGradient>
      </SafeAreaView>
    )
  }
}
var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    listViewHorizontal: {
  
    },
  });