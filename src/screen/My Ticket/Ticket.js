import { Text, View,SafeAreaView,Dimensions,TextInput,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Ticket extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open:"false",
       value:"",
       open1:false,
       value1:'',
    }
  }
  setOpen(){
    this.setState({open:!this.state.open})
  }
  setOpen1(){
    this.setState({open1:!this.state.open1})
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
  setValue1(callback) {
    this.setState(state => ({
      value1: callback(state.value)
    }));
  }
  
  setItems1(callback) {
    this.setState(state => ({
      items1: callback(state.items)
    }));
  }
  render() {
    var items=[{label: 'Software', value: 'Software'},
    ]
    var items1=[{label: 'Sdvs', value: 'Sdvs'},
    {label: 'New Ticket Type', value: 'New Ticket Type'},
    {label: 'New Ticket', value: 'New Ticket'},
  ]
    return (
      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
      <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:width*0.06,fontWeight:'500',color:"#000"}}>
      Raise A Ticket
      </Text>
      <Text style={{fontSize:width*0.03,fontWeight:'500',color:"#000"}}>
      We'd love to hear from you! Let us know how we can help.
      </Text>
      </View>
      </View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("AddTicket")}>
      <View style={{paddingTop:width*0.03}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text  style={{fontSize:width*0.04,fontWeight:'500',color:"#11789c"}}>
          + Add Ticket
        </Text>
      </View>
      </View>
      </TouchableOpacity>
<View style={{paddingTop:width*0.2,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>
<FontAwesome5
              name='user-circle' size={width * 0.06} color={"#53B577"}
              style={{paddingBottom:width*0.01}}
            />
            <TextInput
            placeholder='Subject'
            style={{fontSize:width*0.04,paddingHorizontal:width*0.05,color:"#000"}}
            />
            </View>
</View>
<View style={{paddingTop:width*0.05,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>
<DropDownPicker
      placeholder='Select Priority'
      open={this.state.open}
      value={this.state.value}
      items={items}
      setOpen={()=>this.setOpen()}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      listMode='MODAL'
      placeholderStyle={{
        color: "#000",
        fontWeight: "400",
        paddingHorizontal:4
      }}
    />
            </View>
</View>
<View style={{paddingTop:width*0.05,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:"#dcdcdc"}}>
<DropDownPicker
      placeholder='Select Type'
      open={this.state.open1}
      value={this.state.value1}
      items={items1}
      setOpen={()=>this.setOpen1()}
      setValue={item=>this.setValue1(item)}
      setItems={item=>this.setItems1(item)}
      listMode='MODAL'
      placeholderStyle={{
        color: "#000",
        fontWeight: "400",
        paddingHorizontal:4
      }}
    />
            </View>
</View>
<View style={{paddingTop:width*0.1,marginHorizontal:width*0.03}}>
<View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:"#dcdcdc",paddingBottom:width*0.05}}>
<MaterialCommunityIcons
              name='android-messages' size={width * 0.06} color={"#53B577"}
              style={{paddingBottom:width*0.01}}
            />
            <TextInput
            placeholder=' Type Description Here'
            style={{fontSize:width*0.04,paddingHorizontal:width*0.05,color:"#000"}}
            />
            </View>
</View>
<TouchableOpacity onPress={() =>alert("Message send succesfully")} >
            <View style={{ paddingTop: width * 0.2, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "60%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  REPORT ISSUES
                </Text>
              </View>

            </View>
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
}