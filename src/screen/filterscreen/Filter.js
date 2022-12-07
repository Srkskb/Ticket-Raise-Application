import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader
} from '../../components/index';

export default class Filter extends Component {
  render() {
    return (
        <View style={{flex:1,backgroundColor:"#FFFFFF"}}>
      <View style={{flex:0.7,backgroundColor:"#F7B614",justifyContent:"center"}}>
        <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
<Text style={{fontSize:width*0.09,color:"#000000",paddingHorizontal:width*0.05,fontWeight:"bold"}}>
Filter
</Text>
<TouchableOpacity onPress={()=>alert("Please add the filter")}>
<Text style={{fontSize:width*0.05,color:"#E42217",paddingHorizontal:width*0.05}}>
    Clear
</Text>
</TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:width*0.05}}>
          <Text style={{paddingHorizontal:width*0.05,fontSize:width*0.05,fontWeight:"bold",color:"#000000"}}>
              SORT BY
          </Text>
      </View>
      <View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.04}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
        <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
    <Text style={{fontSize:width*0.04,color:"#E42217",paddingHorizontal:width*0.05}}>
        Top Rated
    </Text>
    <FIcon name="check" size={width*0.06} color="#E42217"
    style={{paddingHorizontal:width*0.03}}
    />
    </View>
    </TouchableOpacity>
</View >
<View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.03}}>
   <TouchableOpacity>

        <Text style={{fontSize:width*0.04,color:"#000000",paddingHorizontal:width*0.05}}>
Nearest Me
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.03}}>
    <TouchableOpacity>

        <Text style={{fontSize:width*0.04,color:"#000000",paddingHorizontal:width*0.05}}>
Cost High to Low
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.03}}>
    
<TouchableOpacity>
        <Text style={{fontSize:width*0.04,color:"#000000",paddingHorizontal:width*0.05}}>
Cost Low to High
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.03}}>
    <TouchableOpacity>

        <Text style={{fontSize:width*0.04,color:"#000000",paddingHorizontal:width*0.05}}>
Most Popular
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:width*0.05}}>
          <Text style={{paddingHorizontal:width*0.05,fontSize:width*0.06,fontWeight:"bold",color:"#000000"}}>
              Filter
          </Text>
      </View>
      <View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.04}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Filter")}>
        <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
    <Text style={{fontSize:width*0.04,color:"#E42217",paddingHorizontal:width*0.05}}>
        Open Now
    </Text>
    <FIcon name="check" size={width*0.06} color="#E42217"
    style={{paddingHorizontal:width*0.03}}
    />
    </View>
    </TouchableOpacity>
</View >
<View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.04}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Filter")}>
        <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
    <Text style={{fontSize:width*0.04,color:"#E42217",paddingHorizontal:width*0.05}}>
        Credit Cards
    </Text>
    <FIcon name="check" size={width*0.06} color="#E42217"
    style={{paddingHorizontal:width*0.03}}
    />
    </View>
    </TouchableOpacity>
</View >
<View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.03}}>
    <TouchableOpacity>

        <Text style={{fontSize:width*0.04,color:"#000000",paddingHorizontal:width*0.05}}>
Most Popular
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:width*0.05}}>
          <Text style={{paddingHorizontal:width*0.05,fontSize:width*0.06,fontWeight:"bold",color:"#000000"}}>
              ADDITIONAL
          </Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MainScreen')}>
          <Text style={{borderWidth:1,borderRadius:1,fontSize:width*0.06,color:'#ffffff',textAlign:'center',
        paddingVertical:width*0.02,fontWeight:'bold',backgroundColor:"#E42217",borderColor:'#E42217',marginTop:width*0.09
        }}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
</View>
    
    )
  }
}