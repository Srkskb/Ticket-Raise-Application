import { Text, View,Dimensions ,SafeAreaView,StyleSheet,TextInput,ScrollView,
	TouchableOpacity,Image,FlatList} from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
const { width, height } = Dimensions.get("window");
import axios from 'axios';
export default class ViewLots extends Component {
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
          myProduct:[],
        };
      }
      setValue(callback) {
        this.setState(state => ({
          value: callback(state.value)
        }));
      }
    
      setItems(callback) {
        this.setState(state => ({
          items: callback(state.items)
        }));
      }
      componentDidMount () {
        AsyncStorage.getItem('user')
                  .then(user =>{
          var config = {
        method: 'get',
        url: "https://newserver.cloudley.in/api/getlots/1",
        
      };
      
      axios(config)
      .then((response)=> {
        console.log(JSON.stringify(response.data.data));
        if(response.data.status==200){
          this.setState({myProduct:response.data.data})}
          else{
          this.setState({myProduct:[]})
        }
        
      })
      .catch((error)=> {
        alert(error);
      });
      })
        }



      render() {
        const setOpen=()=>{
          this.setState({open:!this.state.open})
        }
        const setOpen1=()=>{
          this.setState({open1:!this.state.open1})
        }
        var items=[{label: 'TOTAL ORDERS', value:0,color: '#00C0EF'},
        {label: 'TOTAL BIDS', value:0,color: '#00CA6D'},
        {label: 'OFFERS ORDERS', value:0,color: '#E04C4B'},
        {label:  'AUCTION ORDERS', value:0,color: '#BDC521'},
        {label: 'TOTAL MENU ITEMS', value:0,color: '#594BE0'}
      ]
      var items2=[{label: 'Course', value: 'Course'},
      {label: 'Learning Resourses', value: 'Learning Resourses'}]
    return (
<SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
  <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
All Lots
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
  <View style={{borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>

  </View>
</View>
<View style={{justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',paddingHorizontal:width*0.09}}>
<View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:190,width:120,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/89.jpeg")}
style={{height:height*0.1,width:width*0.2}}
/>
<View style={{paddingTop:width*0.03,}}>
  <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.06,fontWeight:'700',color:"#000",}}>
      1
    </Text>
    </View>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.05,color:'#53B577',fontWeight:'bold'}}>
    Total Bids
</Text>
            </View>
    </View>
    </View>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:190,width:120,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/90.jpeg")}
style={{height:height*0.1,width:width*0.2}}
/>
<View style={{paddingTop:width*0.03,}}>
  <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.06,fontWeight:'700',color:"#000",}}>
      15
    </Text>
    </View>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.05,color:'#53B577',fontWeight:'bold'}}>
    Items Won
</Text>
            </View>
    </View>
    </View>
</View>
          </View>
          </View>
          <View style={{paddingTop:width*0.05,padding:15,paddingRight:width*0.09}} >
      <View    elevation ={5} style={{height:190,width:120,backgroundColor:"#FFFFFF",paddingTop:width*0.03,
     alignItems:'center',alignSelf:'center',borderRadius:10}}>
<Image
source={require("../../images/91.jpeg")}
style={{height:height*0.1,width:width*0.2}}
/>
<View style={{paddingTop:width*0.03,}}>
  <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.06,fontWeight:'700',color:"#000",}}>
      115
    </Text>
    </View>
    <View style={{paddingTop:width*0.02}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{flexDirection:'column'}}>
<Text style={{fontSize:width*0.05,color:'#53B577',fontWeight:'bold'}}>
    Favorites
</Text>
            </View>
    </View>
    </View>
</View>
          </View>
          </View>
          </View>
          <View>
          <FlatList
      data={this.state.myProduct}
      renderItem={({item})=>{
        return(
        <View  >
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:20}}>
<Text style={{fontSize:width*0.05,color:"#fff",fontWeight:'bold'}}>{item.title}</Text>
<Text style={{fontSize:width*0.05,color:"#fff",fontWeight:'500'}}>{item.name}</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',padding:20}}>
<Image
source={{uri:"https://newserver.cloudley.in/images/lot/auction/1/1.jpg"}}
resizeMode='cover'
style={{height:400,width:"100%"}}
/>
</View>
<View style={{justifyContent:'center',alignItems:'center',padding:10}}>
<Text  style={{fontSize:width*0.05,color:"#000",fontWeight:'500'}}>{item.description}</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',padding:10}}>
<Text  style={{fontSize:width*0.05,color:"#000",fontWeight:'500'}}>${item.price}</Text>
</View>
<View style={{borderBottomWidth:2,paddingTop:width*0.05,borderBottomColor:"#fff"}}></View>
        </View>
        );
      }}
  
      />
          </View>
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