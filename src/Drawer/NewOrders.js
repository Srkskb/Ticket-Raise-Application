import { Text, View ,SafeAreaView,Dimensions,TouchableOpacity,TextInput} from 'react-native'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get("window");
export default class NewOrders extends Component {
  state={
    open:true,
    
  }
  componentDidMount() {
    this.setState({open:true})
  }
  render() {
    return (
      <SafeAreaView style={{flex:1,marginHorizontal:width*0.01,backgroundColor:'#FFFFFF'}}>
      <View style={{paddingTop:width*0.05,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
        <Text style={{fontSize:width*0.05,color:'#D8C367',fontWeight:'bold'}}>USER INFORMATION</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("EditProfile")}>
        <Text  style={{fontSize:width*0.05,color:'#000',fontWeight:'500',borderWidth:1,padding:width*0.02,paddingHorizontal:width*0.05}}>EDIT</Text>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth:1,borderBottomColor:'#dcdcdc',paddingTop:width*0.03}}>

      </View>
       <View style={{paddingTop:width*0.05}}>
<Text style={{fontSize:width*0.06,color:'#000',fontWeight:'500'}}>
  Shaharukh Khan
</Text>
<Text style={{fontSize:width*0.032,color:'#000000aa',fontWeight:'500'}}>
  Signed up on june 8, 2022
</Text>
      </View>
      <View style={{paddingTop:width*0.05,flexDirection:'row'}}>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500'}}>
  Email :
</Text>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500',paddingHorizontal:width*0.02}}>
  Seoabaris@gmail.com
</Text>

      </View>
      <View style={{paddingTop:width*0.03,flexDirection:'row'}}>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500'}}>
  Company Name :
</Text>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500',paddingHorizontal:width*0.02}}>
  Abaris softech 
</Text>

      </View>
      <View style={{paddingTop:width*0.03,flexDirection:'row'}}>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500'}}>
  Phone Number :
</Text>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500',paddingHorizontal:width*0.02}}>
 8920073535
</Text>

      </View>
      <View style={{paddingTop:width*0.03,flexDirection:'row'}}>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500'}}>
  Fax :
</Text>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500',paddingHorizontal:width*0.02}}>
  Not Specified
</Text>

      </View>
      <View style={{paddingTop:width*0.03,flexDirection:'row'}}>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500'}}>
  Password
</Text>
<Text style={{fontSize:width*0.04,color:'#000000aa',fontWeight:'500',paddingHorizontal:width*0.02}}>
  ********
</Text>
<TouchableOpacity onPress={()=>this.setState({open:false})}>
<Text style={{fontSize:width*0.04,color:'#00435C',fontWeight:'500'}}>
  Change Password
</Text>
</TouchableOpacity>
      </View>
      {!this.state.open?
      <View style={{
        width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start',
        padding: height * 0.04, position: 'relative', backgroundColor: '#FFFFFF', bottom: 0,paddingTop:width*0.05
      }}>
         <Animatable.View animation="zoomInDown" style={{
            width: '100%', marginTop: height * 0.01,
            height: 50,borderWidth:1,borderRadius:width*0.02
          }}>
      <TextInput
      placeholder='Current Password'
      />
      </Animatable.View>
      <Animatable.View animation="zoomInDown" style={{
            width: '100%', marginTop: height * 0.01,
            height: 50,borderWidth:1,borderRadius:width*0.02
          }}>
      <TextInput
      placeholder='New Password'
      />
      </Animatable.View>
      <Animatable.View animation="zoomInDown" style={{
            width: '100%', marginTop: height * 0.01,
            height: 50,borderWidth:1,borderRadius:width*0.02
          }}>
      <TextInput
      placeholder='Confirm Password'
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
      </View>: null}
  
      </SafeAreaView>
    )
  }
}