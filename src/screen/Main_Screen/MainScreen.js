import { Text, View , 
  SafeAreaView,Dimensions,TouchableOpacity,Image,ScrollView,StyleSheet,
  TouchableNativeFeedback,ImageBackground,TextInput,Linking,Platform,Alert,BackHandler} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ViewLots from '../ViewLots/ViewLots';
import Auction from '../Aucton Info/Auction';
export default class MainScreen extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: [{ "id": "1" }, { "id": "2" }, { "id": "3" }, { "id": "4" }, { "id": "5" }, { "id": "6" }],
      activeSlide: 0,
      show:false,
      upcomingAuctions:[],
    }
  }
  renderItem = ({ item, index }) => {

    return (
      <View style={{ paddingBottom: 4 }}>
        <Image source={require('../../images/kell.jpeg')}
          style={{ height:height*0.5, width:width*0.93,borderWidth: 1, borderRadius: 35,
            borderColor: "#F7B614",backgroundColor:"#FFFFFF"}} 
        />
      </View>
    );
  }
  componentDidMount () {
  AsyncStorage.getItem('user')
            .then(user =>{
    var config = {
  method: 'get',
  url: "https://newserver.cloudley.in/api/getUpComingAuctions",
  
};

axios(config)
.then((response)=> {
  console.log(JSON.stringify(response.data.data));
  if(response.data.status==200){
    this.setState({upcomingAuctions:response.data.data})}
    else{
    this.setState({upcomingAuctions:[]})
  }
  
})
.catch((error)=> {
  alert(error);
});
})
  }
  render() {
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const SLIDER_WIDTH2 = 166;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
    const ITEM_WIDTH2 = 166;
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
    return (
        <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
            <LinearGradient start={{x: 0.5, y: 0}} end={{x: 0, y:1}} colors={['#ccb62a', '#ccb62a', '#696252']} style={styles.linearGradient}>
      <View style={{width:"100%",height:"8%",backgroundColor:'#FFFFFF',justifyContent:'center'}}>
        <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
        <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>Km Numismatics</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
        <FontAwesome5
              name='user-circle' size={width * 0.06} color={"#000000"}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert("No Product...")}>
        <FontAwesome5
              name='shopping-cart' size={width * 0.06} color={"#000000"}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert("No Product...")}>
        <Feather
              name='phone-call' size={width * 0.06} color={"#000000"}
            />
            </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
      <View style={{paddingHorizontal:width*0.05,paddingTop:width*0.05}}>
       <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
   Upcoming Auctions
</Text>
</View>
<View style={{width: '100%',justifyContent:'center',alignItems:'center'}}>
   {this.state.upcomingAuctions.map((item) => {
         return(
          <View key={item.id} style={{paddingHorizontal:width*0.05,paddingTop:width*0.05}}>
  <View style={{marginVertical: width * 0.02,justifyContent:'center',alignItems:'center'}}>
    <Text  style={{fontSize:width*0.05,fontWeight:'bold',color:'#d2d2d2',paddingBottom:width*0.03}}>
      {item.name}
    </Text>
  <Image
  source={require("../../images/895.jpeg")}
  style={{ borderWidth: 1, borderRadius: 35, height: 200, width: 200, borderColor: "#F7B614"}}
  /></View>
       <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
              <View style={{width:'100%'}}>
  <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#fff'}}>
     {item.short_description}
  </Text>
  <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
  <TouchableOpacity style={{ marginVertical: width * 0.02, justifyContent: 'center', alignItems: 'center',
  borderWidth: 1, borderRadius: 10, backgroundColor: "#FFAC8B", borderColor: '#FFAC8B', 
   padding: 10 }} onPress={()=>this.props.navigation.navigate(ViewLots)}>
  <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                    View Lots
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: width * 0.02, justifyContent: 'center', alignItems: 'center',
  borderWidth: 1, borderRadius: 10, backgroundColor: "#FFAC8B", borderColor: '#FFAC8B', 
   padding: 10 }} onPress={()=>this.props.navigation.navigate(Auction)}>
  <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                    Auction Info
                  </Text>
                </TouchableOpacity>
                </View>
  </View>
  </View>
        </View>
           );
           })}
    </View>  
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
                backgroundColor: '#FFFFFF'
              }}
              inactiveDotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: '#FFFFFF'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
          </View>
      <View style={{paddingTop:width*0.05}}>
      <View style={{borderBottomWidth:1,borderTopWidth:1,padding:10,backgroundColor:"#DCDCDC",borderTopColor:"#dcdcdc",borderBottomColor:"#dcdcdc"}}>
<Text style={{fontSize:width*0.05,fontWeight:'500',color:'#000'}}>
    Upcoming Coins
</Text>
      </View>
      </View>
      <ScrollView ref={(snapScroll) => { this.snapScroll = snapScroll; }}
                horizontal={true}
                decelerationRate={0}
                onResponderRelease={() => {

                  var interval = 300; // WIDTH OF 1 CHILD COMPONENT 

                  var snapTo = (this.scrollingRight) ? Math.ceil(this.lastx / interval) :
                    Math.floor(this.lastx / interval);
                  var scrollTo = snapTo * interval;
                  this.snapScroll.scrollTo(0, scrollTo);
                }}
                scrollEventThrottle={32}
                onScroll={(event) => {
                  var nextx = event.nativeEvent.contentOffset.x;
                  this.scrollingRight = (nextx > this.lastx);
                  this.lastx = nextx;
                }}
                showsHorizontalScrollIndicator={false}
                style={styles.listViewHorizontal}
              >
        <View style={{paddingTop:width*0.05,padding:10}}>
            <Image
            source={require("../../images/57.jpeg")}
            style={{ borderWidth: 1, borderRadius: 35, height: 300, width: 300, borderColor: "#F7B614"}}
            />
        </View>
        <View style={{paddingTop:width*0.05,padding:10}}>
            <Image
            source={require("../../images/56.jpeg")}
            style={{ borderWidth: 1, borderRadius: 35, height: 300, width: 300, borderColor: "#F7B614"}}
            />
        </View>
        <View style={{paddingTop:width*0.05,padding:10}}>
            <Image
            source={require("../../images/58.jpeg")}
            style={{ borderWidth: 1, borderRadius: 35, height: 300, width: 300, borderColor: "#F7B614"}}
            />
        </View>
      </ScrollView>
      <View style={{paddingTop:width*0.05,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:"#000"}}>
    A Selection of Indian Coins
</Text>
      </View>
      <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.08}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>
    Old Coins
</Text>
<TouchableOpacity>
<Text style={{fontSize:width*0.03,fontWeight:'bold',color:'#000',borderWidth:1,borderRadius:20,padding:10,borderColor:'#0C3A72'}}>
    View All Products
</Text>
</TouchableOpacity>
      </View>
      </View>
      <ScrollView ref={(snapScroll) => { this.snapScroll = snapScroll; }}
                horizontal={true}
                decelerationRate={0}
                onResponderRelease={() => {

                  var interval = 300; // WIDTH OF 1 CHILD COMPONENT 

                  var snapTo = (this.scrollingRight) ? Math.ceil(this.lastx / interval) :
                    Math.floor(this.lastx / interval);
                  var scrollTo = snapTo * interval;
                  this.snapScroll.scrollTo(0, scrollTo);
                }}
                scrollEventThrottle={32}
                onScroll={(event) => {
                  var nextx = event.nativeEvent.contentOffset.x;
                  this.scrollingRight = (nextx > this.lastx);
                  this.lastx = nextx;
                }}
                showsHorizontalScrollIndicator={false}
                style={styles.listViewHorizontal}
              >
      <View style={{paddingTop:width*0.05,padding:15}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/56.jpeg")}
/>
<View style={{paddingTop:width*0.03,}}>
    <Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000"}}>
        Indian Coins and Banknotes (10% Buyer's Premium)
    </Text>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Products")} >
            <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  View Products
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/56.jpeg")}
/>
<View style={{paddingTop:width*0.03,}}>
    <Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000"}}>
        Indian Coins and Banknotes (10% Buyer's Premium)
    </Text>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Products")} >
            <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  View Products
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/56.jpeg")}
/>
<View style={{paddingTop:width*0.03,}}>
    <Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000"}}>
        Indian Coins and Banknotes (10% Buyer's Premium)
    </Text>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("Products")} >
            <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  View Products
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          </ScrollView>
          <View style={{paddingTop:width*0.05}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
<Text style={{fontSize:width*0.05,color:"#fff",fontWeight:'bold'}}>
  Company 
</Text>
<View style={{paddingTop:width*0.03}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("About")}>
<Text style={{fontSize:width*0.04,color:"#fff",fontWeight:'500'}}>
  About Us
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("Contact")}>
<Text style={{fontSize:width*0.04,color:"#fff",fontWeight:'500'}}>
  Contact Us
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("Terms")}>
<Text style={{fontSize:width*0.04,color:"#fff",fontWeight:'500'}}>
  Terms & condition
</Text>
</TouchableOpacity>
</View>
</View>
<View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
<Text style={{fontSize:width*0.05,color:"#fff",fontWeight:'500'}}>
  Account 
</Text>
<View style={{paddingTop:width*0.03}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
<Text style={{fontSize:width*0.04,color:"#fff",fontWeight:'500'}}>
  Login
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("Contact")}>
<Text style={{fontSize:width*0.04,color:"#fff",fontWeight:'500'}}>
  Contact Us
</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style={{fontSize:width*0.04,color:"#fff",fontWeight:'500'}}>
  Terms
</Text>
</TouchableOpacity>
</View>
</View>

          </View>
          </View>
          <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.09}}>
          <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
<Text style={{fontSize:width*0.05,color:"#fff",fontWeight:'500'}}>
  Follow Us
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.09}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
<TouchableOpacity onPress={()=>alert("Calling..")}>
        <Ionicons
              name='call' size={width * 0.05} color={"#fff"}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert("Are uh want to call")}>
            <Text style={{fontSize:width*0.04,color:'#fff',fontWeight:'bold',paddingHorizontal:width*0.05}}>
1-647-988-6250
            </Text>
            </TouchableOpacity>
</View>

</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.09}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
<TouchableOpacity onPress={()=>alert("for email")}>
        <MaterialCommunityIcons
              name='email-newsletter' size={width * 0.05} color={"#fff"}
            />
            </TouchableOpacity>
            <TouchableOpacity >
            <Text style={{fontSize:width*0.04,color:'#fff',fontWeight:'bold',paddingHorizontal:width*0.05}}>
info@kmnumismatics.com
            </Text>
            </TouchableOpacity>
</View>

</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.09}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
<TouchableOpacity onPress={()=>alert("Calling..")}>
        <Ionicons
              name='ios-location-outline' size={width * 0.05} color={"#fff"}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert("Are uh want to call")}>
            <Text style={{fontSize:width*0.04,color:'#fff',fontWeight:'bold',paddingHorizontal:width*0.05}}>
{"KM Numismatics 18 EastPort Dr.\n Scarborough, ON M1C 5G2 Canada"}
            </Text>
            </TouchableOpacity>
</View>

</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.09}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderRadius:30,borderWidth:1,backgroundColor:"#fff",borderColor:'#fff'}}>
<TextInput
placeholder='Enter Your Email'
style={{paddingHorizontal:width*0.05,fontSize:width*0.05,color:"#000"}}
/>
<TouchableOpacity>
<Text style={{paddingHorizontal:width*0.08,borderWidth:1,borderRadius:30,backgroundColor:'#ccb62a',borderColor:'#ccb62a',padding:15,fontSize:width*0.05,fontWeight:'bold',color:"#fff"}}>
  Submit
</Text>
</TouchableOpacity>
  </View>
</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.09}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
  <TouchableOpacity>
<Entypo
              name='facebook-with-circle' size={width *0.1} color={"#fff"}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Entypo
              name='instagram-with-circle' size={width *0.1} color={"#fff"}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Entypo
              name='linkedin-with-circle' size={width *0.1} color={"#fff"}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Entypo
              name='twitter-with-circle' size={width *0.1} color={"#fff"}
            /></TouchableOpacity>
             <TouchableOpacity>
            <Entypo
              name='google--with-circle' size={width *0.1} color={"#fff"}
            /></TouchableOpacity>
  </View>
</View>
<View style={{paddingTop:width*0.05,marginHorizontal:width*0.06}}>
      <View style={{borderBottomWidth:1,borderBottomColor:"#fff"}}>

      </View>
      </View>
      <View style={{paddingTop:width*0.04,}}>
      <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
      <MaterialCommunityIcons
              name='copyright' size={width * 0.04} color={"#fff"}
            />
<Text style={{fontSize:width*0.04,color:'#fff',fontWeight:'bold',paddingHorizontal:width*0.02}}>
  Copyright 2022 - By
</Text>
<TouchableOpacity onPress={()=>Linking.openURL("https://www.zaubacorp.com/company/ABARIS-SOFTECH-PRIVATE-LIMITED/U72300UP2012PTC048932")} >
<Text style={{fontSize:width*0.04,color:'rgba(23,127,179,255)',fontWeight:'bold',paddingHorizontal:width*0.02}} >
  Abaris Softech
</Text>
</TouchableOpacity>
      </View>
      </View>

      <View style={{paddingBottom:width*0.2}}>

      </View>
      </ScrollView>
      </LinearGradient>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
    listViewHorizontal: {
  
    },
    linearGradient: {
      flex: 1,
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
  })