import React from 'react';
import { Text, View,Button,ImageBackground,Image,Dimensions,StyleSheet,picker,TouchableOpacity } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../screen/login/Login';
const { width, height } = Dimensions.get("window");
import ResetPassword from '../screen/resetPassword/resetPassword';
import Registration from '../screen/signup/Registration';
import Home from '../screen/Home_Screen/Home';
import Auction from '../screen/Aucton Info/Auction';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import Dashboard from '../Drawer/Dashboard.js'
import NewOrders from '../Drawer/NewOrders.js'
import Restaurants from '../Drawer/Restaurants.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Want from '../screen/WantList/Want';
import Order from '../screen/My order/Order';
import Consignments from '../screen/My consignment/Consignments';
import Offers from '../screen/Offers/Offers';
import Catalog from '../screen/Catalog Order/Catalog';
import OffersOwners from '../screen/Offers owners/OffersOwners';
import Buy from '../screen/My buy/Buy';
import MyCatalogs from '../screen/My catalogs/MyCatalogs';
import Collection from '../screen/Collection/Collection';
import Track from '../screen/TrackLots/Track';
import Summary from '../screen/Summary/Summary';
import Ticket from '../screen/My Ticket/Ticket';
import Raiting from '../screen/My rate and review/Raiting';
import EditProfile from '../screen/Edit_Screen/EditProfile';
import MainScreen from '../screen/Main_Screen/MainScreen';
import Products from '../screen/Products/Products';
import About from '../screen/About/About';
import Terms from '../screen/Terms/Terms';
import Contact from '../screen/Contact/Contact';
import WriteReview from '../screen/Write Review/WriteReview';
import NewAd from '../screen/New Adreess/NewAd';
import CartScreen from '../screen/CartScreen/CartScreen';
import AddTicket from '../screen/AddTicket/AddTicket';
import Otp from '../screen/OtpScreen/Otp';
import ViewLots from '../screen/ViewLots/ViewLots';
function CustomDrawer(props) {
    const dwidth =width * 0.3;
    const [open2,setOpen2]=React.useState(false);
    const [open3,setOpen3]=React.useState(false);
    const[open4,setOpen4]=React.useState(false)
    const[open5,setOpen5]=React.useState(false)
  
    return (
      <DrawerContentScrollView {...props} style={styles.menuContainer}>
        <View style={{padding:width*0.066,borderBottomWidth:2,borderColor: '#C60031'}}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:8,width: '100%'}}>
        <View style={{width: '24%'}}>
        <Image
        source={require("../images/dfg.jpg")}
        style={{height:height*0.2,width:width*0.4,borderRadius:width*0.4}}
        />
        </View>
        <View style={{width: '76%'}}>
        {/* <Text style={{ color: '#fff',fontSize:width*0.08,fontFamily: "Montserrat-SemiBold" }}>
        Fast Resturant</Text> */}
        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:8}}>
        <MaterialCommunityIcons name="map-marker-circle" color={"#000"} size={width*0.044} />
        <Text style={{ color: '#000',fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:4 }}>
        Shaharukh</Text>
        <TouchableOpacity style={{position: 'absolute',right:0}} onPress={()=>props.navigation.navigate("Restaurants")}>
        <MaterialCommunityIcons name="account-edit" color={"#B30929"} size={width*0.044} />
        </TouchableOpacity>
        </View>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Dashboard')}}>
        <MaterialCommunityIcons name="view-dashboard" color={props.state.index === props.state.routes.findIndex(e => e.name === 'Dashboard')? "#B30929":"#fff"} size={width*0.044} />
        <Text style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Dashboard')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Dashboard</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Restaurants')}}>
        <MaterialCommunityIcons name="store" color={props.state.index === props.state.routes.findIndex(e => e.name === 'Restaurants')? "#B30929":"#fff"} size={width*0.044} />
        <Text style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Restaurants')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        MyBids</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('New Orders')}}>
        <MaterialCommunityIcons name="new-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'New Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'New Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Profile</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Want')}}>
        <MaterialCommunityIcons name="alpha-s-box" color={props.state.index === props.state.routes.findIndex(e => e.name === 'Scheduled Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Scheduled Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My WantList</Text>
       </TouchableOpacity>
        </View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',
        alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Track')}}>
        <MaterialCommunityIcons name="alpha-o-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Ongoing Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Ongoing Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My TrackedLots</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Order')}}>
        <MaterialCommunityIcons name="alpha-r-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Rejected Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Rejected Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Orders</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={() => {props.navigation.navigate('Collection')}}>
        <MaterialCommunityIcons name="alpha-c-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Completed Orders')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Completed Orders')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Collection</Text>
       </TouchableOpacity>
        </View>
      {/*    <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'90%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>setOpen2(!open2)}>
        <MaterialCommunityIcons name="alpha-c-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Categories</Text>
       </TouchableOpacity>
       <View style={{width: '10%',justifyContent:'center',alignItems:'flex-start'}}>
       {open2? <MaterialCommunityIcons name="arrow-up-drop-circle"
        color={"#fff"} size={width*0.044} />:<MaterialCommunityIcons name="arrow-down-drop-circle"
        color={"#fff"} size={width*0.044} />}
        </View>
        </View>
      {open2? <View style={{width:'100%',paddingLeft:width*0.044}}>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>{props.navigation.navigate('Veg')}}>
        <MaterialCommunityIcons name="alpha-v-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Veg')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Veg')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Veg</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>{props.navigation.navigate('Non Veg')}}>
        <MaterialCommunityIcons name="alpha-n-box"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Non Veg')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Non Veg')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Non Veg</Text>
       </TouchableOpacity>
        </View>
         <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Add Category')}>
        <MaterialCommunityIcons name="food"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Add Category')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Add Category')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Add Category</Text>
       </TouchableOpacity>
        </View>
            </View>:null}
    <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'90%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>setOpen3(!open3)}>
        <MaterialCommunityIcons name="book-open"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Add food Menu</Text>
       </TouchableOpacity>
       <View style={{width: '10%',justifyContent:'center',alignItems:'flex-start'}}>
       {open3? <MaterialCommunityIcons name="arrow-up-drop-circle"
        color={"#fff"} size={width*0.044} />:<MaterialCommunityIcons name="arrow-down-drop-circle"
        color={"#fff"} size={width*0.044} />}
        </View>
        </View>
      {open3? <View style={{width:'100%',paddingLeft:width*0.044}}>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Food Items')}>
        <MaterialCommunityIcons name="food"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Food Items')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Food Items')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Food Items</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Add food Items')}>
        <MaterialCommunityIcons name="food"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Add food Items')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Add food Items')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Add food Items</Text>
       </TouchableOpacity>
        </View>
            </View>:null}
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'90%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>setOpen5(!open5)}>
        <MaterialCommunityIcons name="dropbox"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Offers</Text>
       </TouchableOpacity>
       <View style={{width: '10%',justifyContent:'center',alignItems:'flex-start'}}>
       {open5? <MaterialCommunityIcons name="arrow-up-drop-circle"
        color={"#fff"} size={width*0.044} />:<MaterialCommunityIcons name="arrow-down-drop-circle"
        color={"#fff"} size={width*0.044} />}
        </View>
        </View>
        {open5? <View style={{width:'100%',paddingLeft:width*0.044}}>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Create Offer')}>
        <MaterialCommunityIcons name="dropbox"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Create Offer')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Create Offer')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Create Offer</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Ongoing Offers')}>
        <MaterialCommunityIcons name="dropbox"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Ongoing Offers')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Ongoing Offers')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Ongoing Offers</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Expired Offers')}>
        <MaterialCommunityIcons name="dropbox"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Expired Offers')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Expired Offers')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Expired Offers</Text>
       </TouchableOpacity>
        </View>
            </View>:null}*/}
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Consignments')}>
        <MaterialCommunityIcons name="file"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Consignments</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Offers')}>
        <MaterialCommunityIcons name="gift-outline"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Add Credit Card</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Catalog')}>
        <MaterialCommunityIcons name="laptop"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        CataLogs Orders</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Auction')}>
        <MaterialCommunityIcons name="image-filter-frames"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Auction Archives</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('OffersOwners')}>
        <MaterialCommunityIcons name="gesture-tap-button"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Offers to Owners</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Summary')}>
        <MaterialCommunityIcons name="file-chart"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Auction Summary</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Buy')}>
        <MaterialCommunityIcons name="folder-sync-outline"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Reports')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Address</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('MyCatalogs')}>
        <MaterialCommunityIcons name="circle-slice-8"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Inbox')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Inbox')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        Track Order</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Ticket')}>
        <MaterialCommunityIcons name="aspect-ratio"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Inbox')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Inbox')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Ticket</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginTop:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Raiting')}>
        <MaterialCommunityIcons name="comment-processing"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Inbox')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Inbox')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        My Rating & Review</Text>
       </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',
        marginVertical:width*0.044,paddingLeft:width*0.044}}>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
        onPress={()=>props.navigation.navigate('Login')}>
        <MaterialCommunityIcons name="logout"
        color={props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff"} size={width*0.044} />
        <Text
        style={{ color:props.state.index === props.state.routes.findIndex(e => e.name === 'Categories')? "#B30929":"#fff",fontSize:width*0.044,fontFamily: "Montserrat-Medium",
        paddingLeft:8 }}>
        logout</Text>
       </TouchableOpacity>
        </View>
          
      </DrawerContentScrollView>
    );
  }
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{headerShown:true,
      headerTitleAlign:"left",headerTitleStyle:{fontFamily: "Montserrat-SemiBold"},
      headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#FF8F62',
    },activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff',drawerItemStyle: {
       display: "none",
     }
    }} 
        drawerContent={(props) => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Restaurants" component={Restaurants}options={{headerTitle:"My Bids"}} />
        <Drawer.Screen name="New Orders" component={NewOrders} options={{headerTitle:"My Profile"}}/>
        <Drawer.Screen name="Want" component={Want} options={{headerTitle:"My WantList"}}
        />
          <Drawer.Screen name="Order" component={Order} options={{headerTitle:"My Orders"}}
        />
          <Drawer.Screen name="Consignments" component={Consignments} options={{headerTitle:"My Consignments"}}
        />
          <Drawer.Screen name="Offers" component={Offers} options={{headerTitle:"Add Credit Card "}}
        />
          <Drawer.Screen name="Catalog" component={Catalog} options={{headerTitle:" CataLogs Orders"}}
        />
          <Drawer.Screen name="Auction" component={Auction} options={{headerTitle:"My Km Numismatics Archives"}}
        />
          <Drawer.Screen name="OffersOwners" component={OffersOwners} options={{headerTitle:"My Offers To Owners"}}
        />
          <Drawer.Screen name="Buy" component={Buy} options={{headerTitle:"Address"}}
        />
          <Drawer.Screen name="MyCatalogs" component={MyCatalogs} options={{headerTitle:"Track Order "}}
        />
          <Drawer.Screen name="Collection" component={Collection} options={{headerTitle:"My Collection"}}
        />
          <Drawer.Screen name="Track" component={Track} options={{headerTitle:"My TrackLots"}}
        />
          <Drawer.Screen name="Summary" component={Summary} options={{headerTitle:"My Km Numismatics Summary "}}
        />
           <Drawer.Screen name="Ticket" component={Ticket} options={{headerTitle:"My Ticket"}}
        />
         <Drawer.Screen name="NewAd" component={NewAd} options={{headerShown:false}}
        />
           <Drawer.Screen name="Raiting" component={Raiting} options={{headerTitle:"My Ratings & Review"}}
        />
        {/*<Drawer.Screen name="Add food Items" component={AddfoodItems} />
        <Drawer.Screen name="Add Category" component={Addcategory} />
        <Drawer.Screen name="Food Items" component={FoodItems} />
        <Drawer.Screen name="Reports" component={Categories} />
        <Drawer.Screen name="Completed Orders" component={CompletedOrders} />
        <Drawer.Screen name="Ongoing Orders" component={OngoingOrders} />
        <Drawer.Screen name="Rejected Orders" component={RejectedOrders} />
       
        <Drawer.Screen name="Veg" component={Veg} />
        <Drawer.Screen name="Inbox" component={Inbox} />
        <Drawer.Screen name="Create Offer" component={Offers} />
        <Drawer.Screen name="Ongoing Offers" component={OnOffers} />
        <Drawer.Screen name="Expired Offers" component={ExOffers} />
        <Drawer.Screen name="Non Veg" component={Nonveg} />*/}
      </Drawer.Navigator>
    )
}
const Stack = createStackNavigator();

function LoginStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS) }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
      <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
      <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
      <Stack.Screen name="Auction" component={Auction} options={{ headerShown: false }} />
      <Stack.Screen name="ViewLots" component={ViewLots} options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
      <Stack.Screen name="AddTicket" component={AddTicket} options={{ headerShown: false }} />
      <Stack.Screen name="WriteReview" component={WriteReview} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    backgroundColor:'#D8C367'
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});

export default LoginStackNavigator;