import { Text, View, ImageBackground, Dimensions,TouchableNativeFeedback, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet,Modal } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader
} from '../../components/index';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export default class BrandList extends Component {
  constructor()
  {
    super();
 this.state = {
    data: [{ "id": "1" }, { "id": "2" }, { "id": "3" }, { "id": "4" }, { "id": "5" }, { "id": "6" }],
    activeSlide: 0,
    show:false
  }
}
  renderItem = ({ item, index }) => {

    return (
      <View style={{ paddingBottom: 4 }}>
        <Image source={require('../../images/ban2.png')}
          style={{ height: height * 0.24, width: width * 0.92 }} resizeMode={'contain'}
        />
      </View>
    );
  }
  render() {
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const SLIDER_WIDTH2 = 166;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
    const ITEM_WIDTH2 = 166;
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
    return (

      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
        <View style={{
          flexDirection: 'row', alignItems: "center", justifyContent: 'space-between',
          backgroundColor: "#F7B614", width: width, height: '6%', paddingHorizontal: width * 0.05, paddingTop: width * 0.02
        }}>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo
              name='location-pin' size={width * 0.07} color={"#E42217"}
            />
            <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.03}}>
            <Text style={{ fontSize: width * 0.03, color: "#E42217", fontWeight: "bold" }}>
              Bazar Chitil Qabar
            </Text >
            <Text style={{fontSize:9,color:'#FFF'}}>
               chandni chowk new delhi
            </Text>
            </View>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Location')}>
              <Entypo
                name='chevron-small-down' size={width * 0.06} color={"#E42217"}
              />
            </TouchableOpacity>
          </View>
          <TouchableNativeFeedback onPress={()=>alert("Are you want to change your profile.")}>
     <Image
     source={require("../../images/10.png")}
     resizeMode="contain"
     style={{height:height*0.06,width:width*0.1,borderRadius:width*0.1,borderColor:"#E44217"}}
     
     />
     </TouchableNativeFeedback>
        </View>
        <View style={{
          justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7B614',
          width: width, height: '8%', paddingTop: width * 0.01
        }} >
          <View style={{
            borderRadius: 10, backgroundColor: "#FFFFFF", width: "90%",
            borderColor: "#FFFFFF", height: '80%',
          }}>

            <View style={{ flexDirection: 'row', width: '100%' }} >
              <View style={{ width: '16%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <FIcon name="search" size={width * 0.06} color="#DCDCDC"
                /></View>
              <View style={{ width: '68%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                <TextInput
                  style={{ fontSize: 20 }}
                  placeholder={'Search your delivery location'}
                  placeholderTextColor={"#DCDCDC"}
                /></View>
              <TouchableOpacity style={{ width: '16%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => alert("Please Speak something...")}>
                <FIcon name="mic" size={width * 0.06} color="#E42217"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
        <View style={{ paddingHorizontal: width * 0.05,paddingTop:width*0.03 }}>
            <Text style={{ fontSize: width * 0.06, textAlign: "center", color: "#000000", fontWeight: "bold",fontFamily:'Poppins-Medium' }}>
              Top Brand for you
            </Text>
          </View>
          <View style={{paddingTop:width*0.08,paddingHorizontal:width*0.03}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Brand')}>
              <Image
                source={require('../../images/logo1.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 15, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Brand")}>
              <Text style={{fontSize:width*0.06,color:'#F40185',paddingHorizontal:width*0.06,fontWeight:'500'}}>
                McDonald's
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Menu')}>
              <Image
                source={require('../../images/logo2.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 15, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")}>
              <Text style={{fontSize:width*0.06,color:'#0A6084',paddingHorizontal:width*0.06,fontWeight:'500'}}>
                Domino's
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Brand')}>
              <Image
                source={require('../../images/logo4.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 15, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Brand")}>
              <Text style={{fontSize:width*0.06,color:'#000000',paddingHorizontal:width*0.06,fontWeight:'500'}}>
                KFC
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Brand')}>
              <Image
                source={require('../../images/logo5.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 15, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Brand")}>
              <Text style={{fontSize:width*0.06,color:'#F78400',paddingHorizontal:width*0.06,fontWeight:'500'}}>
                Burger King
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Menu')}>
              <Image
                source={require('../../images/logo7.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 15, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")}>
              <Text style={{fontSize:width*0.06,color:'#E44227',paddingHorizontal:width*0.06,fontWeight:'500'}}>
                Nazeer Restaurants
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Brand')}>
              <Image
                source={require('../../images/log3.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 15, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Brand")}>
              <Text style={{fontSize:width*0.06,color:'#03751D',paddingHorizontal:width*0.06,fontWeight:'500'}}>
                Subway
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
        </SafeAreaView>
    )
  }
}