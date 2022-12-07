import { Text, View, Dimensions,TouchableNativeFeedback, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet,Modal,ImageBackground } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
export default class Brand extends Component {
  constructor()
  {
    super();
 this.state = {
    data: [{ "id": "1" }, { "id": "2" }, { "id": "3" }, { "id": "4" }, { "id": "5" }, { "id": "6" }],
    activeSlide: 0,
    show:false,
     count:0,
     count1:0,
     count2:0,
     count3:0,
  }
}
  renderItem = ({ item, index }) => {

    return (
      <View style={{ paddingBottom: 4 }}>
        <Image source={require('../../images/ddd.png')}
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
          <View style={{justifyContent:'center',alignItems:'center'}}>
         <ImageBackground
         style={{height:height*0.3,width:width*1}}
         source={require('../../images/ccc.jpg')}>
        
         <View style={{justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.03,paddingHorizontal:width*0.03}}>
<TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
<Ionicons
name='arrow-back-sharp' color={"#FFF"} size={width*0.08}
/>
</TouchableOpacity>
             </View>
<View style={{justifyContent:'flex-end',alignItems:'flex-start',paddingHorizontal:width*0.05,paddingTop:width*0.2}}>
<Text style={{color:'#fff',fontSize:width*0.09,fontWeight:'bold',fontFamily:'Poppins-Medium'}}>
    McDonalds
</Text>
<Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',fontFamily:'Poppins-Medium'}}>
    {'Cheesilicious pizzas to make every\nday extraordinary.'}
</Text>
</View>
         </ImageBackground>
         </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
          <View style={{
            paddingTop: width * 0.03, alignItems: "center", marginHorizontal: width * 0.04,
            justifyContent: 'center', paddingBottom: width * 0.05
          }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.data}
              renderItem={this.renderItem}
              sliderWidth={SLIDER_WIDTH - width * 0.08}
              itemWidth={ITEM_WIDTH}
              loop={true}
              autoplay={true}
              autoplayInterval={5000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={this.state.data.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{
                backgroundColor: 'transparent', position: 'absolute',
                bottom: 4, borderRadius: 10, paddingVertical: 2, paddingHorizontal: 4
              }}
              dotContainerStyle={{ marginHorizontal: 1 }}
              dotStyle={{
                width: 14,
                height: 8,
                borderRadius: 5,
                backgroundColor: '#F7B614'
              }}
              inactiveDotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: '#F7B614'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
            {/*<Image
    source={require('../../images/banner.png')}
    style={{height:height*0.24,width:width*0.92}} resizeMode={'contain'}
    />*/}
          </View>
          <View style={{ height: '4%', justifyContent: 'center', alignItems: 'center', width: width }}>
          <View style={{
            flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",
            width: '100%', height: '80%'
          }}>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
            Relevance
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              Pure Veg
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              Non Veg
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              Less then 30 Mins
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              New
            </Text>
          </View>
        </View>
         
        <View style={{ paddingTop: width * 0.03, width: width, flexDirection: "row" }}>
        <View style={{ width: '35%', backgroundColor: '#FFFFFF' }}>
        <Image
          source={require('../../images/aaa.png')}
          style={{ height: height * 0.12, width: width * 0.42 }}
          resizeMode="contain"
        />
        <View style={{justifyContent:'center',alignItems:"center",marginTop:-width*0.03,paddingLeft:width*0.07}}>
            <View style={{flexDirection:"row",borderWidth:1,justifyContent:"space-around",width:80,borderColor:"#ECA927",borderRadius:5,backgroundColor:"#E9F4FA"}}>
         
            <TouchableOpacity onPress={()=>{this.state.count>1? this.setState({count:this.state.count-1}):this.state.count}}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                -   
            </Text>
            </TouchableOpacity>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
            {this.state.count} 
            </Text>
            <TouchableOpacity onPress={()=>this.setState({count:this.state.count+1})}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                +   
            </Text>
            </TouchableOpacity>
            
            </View>
        </View>
      </View>
      <View style={{ width: '65%', backgroundColor: '#FFFFFF' }}>
          <View style={{justifyContent:'flex-start',alignItems:'flex-start',paddingHorizontal:width*0.05}}>
          <Text style={{color:'#000',fontSize:width*0.04,fontWeight:'bold',fontFamily:'Poppins-Medium'}}>
              Large EVM Butter Chicken Grilled Double Patty Burger
          </Text>
          </View>
          <View style={{paddingHorizontal:width*0.05}}>
              <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
                  $185
              </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
          <AntDesign
              name='star' size={width * 0.03} color="#000"
            />
            <Text style={{paddingHorizontal:width*0.01,fontSize:width*0.03}}>
                3.8 (1K+) . 38 Mins . $130 for Now
            </Text>
          </View  >
    </View>
    </View>
    <View style={{ borderBottomWidth: 1, paddingTop: width * 0.02, borderBottomColor: "#DCDCDC" }}>

    </View>
    <View style={{ paddingTop: width * 0.03, width: width, flexDirection: "row" }}>
        <View style={{ width: '35%', backgroundColor: '#FFFFFF' }}>
        <Image
          source={require('../../images/aaa.png')}
          style={{ height: height * 0.12, width: width * 0.42 }}
          resizeMode="contain"
        />
        <View style={{justifyContent:'center',alignItems:"center",marginTop:-width*0.03,paddingLeft:width*0.07}}>
            <View style={{flexDirection:"row",borderWidth:1,justifyContent:"space-around",width:80,borderColor:"#ECA927",borderRadius:5,backgroundColor:"#E9F4FA"}}>
            <TouchableOpacity onPress={()=>{this.state.count3>1? this.setState({count3:this.state.count3-1}):this.state.count3}}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                -   
            </Text>
            </TouchableOpacity>
           
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
            {this.state.count3} 
            </Text>
            <TouchableOpacity onPress={()=>this.setState({count3:this.state.count3+1})}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                +   
            </Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={{ width: '65%', backgroundColor: '#FFFFFF' }}>
          <View style={{justifyContent:'flex-start',alignItems:'flex-start',paddingHorizontal:width*0.05}}>
          <Text style={{color:'#000',fontSize:width*0.04,fontWeight:'bold',fontFamily:'Poppins-Medium'}}>
               EVM Butter Chicken Grilled Double Patty Burger
          </Text>
          </View>
          <View style={{paddingHorizontal:width*0.05}}>
              <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
                  $175
              </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
          <AntDesign
              name='star' size={width * 0.03} color="#000"
            />
            <Text style={{paddingHorizontal:width*0.01,fontSize:width*0.03}}>
                3.8 (1K+) . 38 Mins . $130 for Now
            </Text>
          </View  >
    </View>
    </View>
    <View style={{ borderBottomWidth: 1, paddingTop: width * 0.02, borderBottomColor: "#DCDCDC" }}>

    </View>
    <View style={{ paddingTop: width * 0.03, width: width, flexDirection: "row" }}>
        <View style={{ width: '35%', backgroundColor: '#FFFFFF' }}>
        <Image
          source={require('../../images/bbb.png')}
          style={{ height: height * 0.12, width: width * 0.42 }}
          resizeMode="contain"
        />
        <View style={{justifyContent:'center',alignItems:"center",marginTop:-width*0.03,paddingLeft:width*0.07}}>
            <View style={{flexDirection:"row",borderWidth:1,justifyContent:"space-around",width:80,borderColor:"#ECA927",borderRadius:5,backgroundColor:"#E9F4FA"}}>
            <TouchableOpacity onPress={()=>{this.state.count1>1? this.setState({count1:this.state.count1-1}):this.state.count1}}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                -   
            </Text>
            </TouchableOpacity>
          
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
            {this.state.count1} 
            </Text>
            <TouchableOpacity onPress={()=>this.setState({count1:this.state.count1+1})}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                +   
            </Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={{ width: '65%', backgroundColor: '#FFFFFF' }}>
          <View style={{justifyContent:'flex-start',alignItems:'flex-start',paddingHorizontal:width*0.05}}>
          <Text style={{color:'#000',fontSize:width*0.04,fontWeight:'bold',fontFamily:'Poppins-Medium'}}>
              Butter Chicken Grilled Double Patty Burger
          </Text>
          </View>
          <View style={{paddingHorizontal:width*0.05}}>
              <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
                  $125
              </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
          <AntDesign
              name='star' size={width * 0.03} color="#000"
            />
            <Text style={{paddingHorizontal:width*0.01,fontSize:width*0.03}}>
                3.8 (1K+) . 38 Mins . $130 for Now
            </Text>
          </View  >
    </View>
    </View>
    <View style={{ borderBottomWidth: 1, paddingTop: width * 0.02, borderBottomColor: "#DCDCDC" }}>

    </View>
    <View style={{ paddingTop: width * 0.03, width: width, flexDirection: "row" }}>
        <View style={{ width: '35%', backgroundColor: '#FFFFFF' }}>
        <Image
          source={require('../../images/eee.png')}
          style={{ height: height * 0.12, width: width * 0.42 }}
          resizeMode="contain"
        />
        <View style={{justifyContent:'center',alignItems:"center",marginTop:-width*0.03,paddingLeft:width*0.07}}>
            <View style={{flexDirection:"row",borderWidth:1,justifyContent:"space-around",width:80,borderColor:"#ECA927",borderRadius:5,backgroundColor:"#E9F4FA"}}>
            <TouchableOpacity onPress={()=>{this.state.count2>1? this.setState({count2:this.state.count2-1}):this.state.count2}}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                -   
            </Text>
            </TouchableOpacity>
    
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
            {this.state.count2} 
            </Text>
            <TouchableOpacity onPress={()=>this.setState({count2:this.state.count2+1})}>
            <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#0CB577"}}>
                +   
            </Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={{ width: '65%', backgroundColor: '#FFFFFF' }}>
          <View style={{justifyContent:'flex-start',alignItems:'flex-start',paddingHorizontal:width*0.05}}>
          <Text style={{color:'#000',fontSize:width*0.04,fontWeight:'bold',fontFamily:'Poppins-Medium'}}>
              Spicy Paneer/Spicy Chicken Wrap(Any2)+1 Med.Fries+2
          </Text>
          </View>
          <View style={{paddingHorizontal:width*0.05}}>
              <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
                  $105
              </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
          <AntDesign
              name='star' size={width * 0.03} color="#000"
            />
            <Text style={{paddingHorizontal:width*0.01,fontSize:width*0.03}}>
                3.8 (1K+) . 38 Mins . $130 for Now
            </Text>
          </View  >
    </View>
    </View>
    <View style={{ borderBottomWidth: 1, paddingTop: width * 0.02, borderBottomColor: "#DCDCDC" }}>

    </View>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("FoodCart")}>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.06}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#1599B0",borderColor:'#1599B0',justifyContent:'center',alignItems:'center',padding:10}}>
<Text style={{color:'#fff',fontSize:width*0.04}}>
  Procced to Next
</Text>
              </View>

            </View>
            </TouchableOpacity>
            <View style={{paddingBottom:width*0.1}}>

            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  listViewHorizontal: {

  },
})