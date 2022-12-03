import { Text, View,StyleSheet,SafeAreaView,Dimensions,ScrollView,Image,TouchableOpacity,TextInput } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import ProgressBar from '../../components/ProgressBar';
import {CheckBox} from 'react-native-elements'
const { width, height } = Dimensions.get("window");

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
                  <View style={{width:"100%",height:"8%",backgroundColor:'#FFFFFF',justifyContent:'center'}}>
        <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
        <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>Product Details</Text>
        </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
        <View style={{paddingTop:width*0.05}}>
            <Text style={{fontSize:width*0.05,fontWeight:'bold',color:"#ffffff"}}>
                Bid On These Featured Auctions!
            </Text>

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
source={require("../../images/OIP.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
    <Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
        Ring with Clear Stones
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold' }}>
                  ADD TO CART
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
source={require("../../images/OIP.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
        Ring with Clear Stones Accents
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/12.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
      Gold Ring with Clear Stones
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          </ScrollView>
          <View style={{paddingTop:width*0.05}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
          <View    elevation ={5} style={{height:50,width:250,backgroundColor:"#FFFFFF",justifyContent:'space-between',flexDirection:'row',alignItems:'center',
     borderRadius:10}}>
        <TextInput
        placeholder='Search here'
        />
 <Ionicons
              name='md-search-outline' size={width * 0.06} color={"#000"}
            />
        </View>
    <TouchableOpacity onPress={()=>this.setState({open:false})}>
            <View style={{justifyContent:'center',alignItems:'center',paddingHorizontal:width*0.04}}>
            <Text style={{fontSize:width*0.06,fontWeight:'bold',color:'#FFFFFF'}}>
 Add Filters
            </Text>
            </View>
            </TouchableOpacity>
        </View>
          </View>
          {!this.state.open?
          <View style={{paddingTop:width*0.1,paddingRight:width*0.07}}>
      <View style={{
        width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start',
        padding: height * 0.04, position: 'relative', backgroundColor: '#FFFFFF', bottom: 0,paddingTop:width*0.05
      }}>
        <Animatable.View animation="zoomInDown" style={{justifyContent:'center',alignItems:'center'}}>
<Animatable.Text animation="zoomInDown" style={{textAlign:'center',fontSize:width*0.05,fontWeight:'bold'}} >
    Filters By Prices
</Animatable.Text>
   
    </Animatable.View>
    
    <View style={{width: '100%',paddingTop:20}}>
    <ProgressBar progress={50} height={8} backgroundColor="#B30929" progressDuration={3000}
      inbackgroundColor="#ccc"/>
    </View>
    <View style={{paddingTop:width*0.05,justifyContent:'center',alignItems:'center'}}>
    <Animatable.View animation="zoomInDown" style={{justifyContent:'center',alignItems:'center'}}>
<Animatable.Text animation="zoomInDown" style={{textAlign:'center',fontSize:width*0.05,fontWeight:'bold'}} >
    Auctions Type
</Animatable.Text>
    </Animatable.View>
    </View>
    <Animatable.View animation="zoomInDown" style={{justifyContent:'center',alignItems:'center'}}>
<CheckBox
title={"Live Auction"}
checked={true}
onPress={()=>this.setState({Live:true})}
/>
<CheckBox
title={"Third Auction"}
checked={false}
/>
<CheckBox
title={"Buy Now pro"}
checked={false}
/>
    </Animatable.View>
    <Animatable.View animation="zoomInDown" style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
      <TouchableOpacity style={{paddingTop:width*0.02}} onPress={()=>this.setState({open:true})}>
        < Animatable.Text  style={{fontSize:width*0.05,color:'#000',fontWeight:'500',borderWidth:1,paddingHorizontal:width*0.05}}>Save</Animatable.Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop:width*0.02}} onPress={()=>this.setState({open:true})}>
        < Animatable.Text  style={{fontSize:width*0.05,color:'#E44226',fontWeight:'500',paddingHorizontal:width*0.05}}> Cancel</Animatable.Text>
        </TouchableOpacity>
        </Animatable.View>

        </View>
  
      </View>: null}
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
source={require("../../images/OIP.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
        Ring with Clear Stones Accents
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/12.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
      Gold Ring with Clear Stones
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          </ScrollView>
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
source={require("../../images/OIP.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
        Ring with Clear Stones Accents
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/12.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
      Gold Ring with Clear Stones
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          </ScrollView>
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
source={require("../../images/OIP.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
        Ring with Clear Stones Accents
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/12.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
      Gold Ring with Clear Stones
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          </ScrollView>
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
source={require("../../images/OIP.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
        Ring with Clear Stones Accents
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:400,width:320,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/12.jpg")}
/>
<View style={{paddingTop:width*0.03,}}>
<Text style={{fontSize:width*0.045,fontWeight:'700',color:"#000",borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.01}}>
      Gold Ring with Clear Stones
    </Text>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <FontAwesome5
              name='shopping-bag' size={width * 0.06} color={"#53B577"}
              style={{paddingHorizontal:width*0.05}}
            />
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.04,color:'#53B577',fontWeight:'bold'}}>
    Buy Now
</Text>
<Text style={{fontSize:width*0.04,color:'#000',fontWeight:'bold'}}>
    $500.00
</Text>
            </View>
    </View>
    </View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate("CartScreen")} >
            <View style={{ paddingTop: width * 0.03, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "100%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  ADD TO CART
                </Text>
              </View>

            </View>
          </TouchableOpacity>
</View>
          </View>
          </View>
          </ScrollView>
      <View style={{paddingBottom:width*0.1}}>

      </View>

        </ScrollView>
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