import { Text, View ,Dimensions,StyleSheet,TouchableOpacity,TextInput,Image,ScrollView} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import styles from './styles'
import { Images } from '../../theme';
import axios from 'axios';
import { Wave } from 'react-native-animated-spinkit'
import * as Animatable from 'react-native-animatable';
import Ionicons from "react-native-vector-icons/Ionicons"
import { AppButton, BackButtonHeader, LinkText, FloatingLabelInput } from '../../components/index';
export default class Registration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      userName:'',
      mobileNumber:'',
      loading:false,
      showPop:false,

    }
  }
 
  goHome(){
    this.setState({showPop:false,lastName:"",firstName:"",email:"",password:"",mobileNumber:"",userName:""})
    this.props.navigation.navigate('Otp')
  }
  render() {
      
   const  RegisterAccount=()=>{
      this.setState({loading:true})
    var data = JSON.stringify({
      "firstname": this.state.firstName,
      "lastname": this.state.lastName,
      "username": this.state.userName,
      "email":this.state.email,
      "mobile": this.state.mobileNumber,
      "status": 1,
      "password":this.state.password,
    });
    
    var config = {
    method: 'post',
    url: "http://103.242.116.169:8080/api/signup",
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
    };
    
    axios(config)
    .then((response)=>{
    console.log(response.data)
    this.setState({loading:false})
    if(response.data.status=='failed'){
      showMessage({
                     message: "Km Numismatics",
                     description:JSON.stringify(response.data.message),
                     type: "danger",
            textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
            titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                             });
    }else if(response.data.status==200){
      this.setState({loading:false,showPop:true})
    }
    })
    .catch(function (error) {
    showMessage({
                message: "Km Numismatics",
                description:'Error',
                type: "danger",
            textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
            titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                        });
    });
    
    }

    return (
      <View style={{width: '100%',height: '100%',backgroundColor:'#FFFFFF'}}>
           {this.state.showPop? <Animatable.View animation="flipInX" style={{position: 'absolute',width:'100%',height:'100%',
      backgroundColor: 'rgba(253, 253, 253, 0.9)',justifyContent:'center',alignItems:'center',zIndex: 5}}>
    <View elevation={5} style={{width:'84%',backgroundColor: '#fdfdfd',padding:20,borderRadius: 4}}>
    <Text style={{color: '#121212',fontSize:22,fontFamily: "Poppins-SemiBold",marginVertical:6}}>
    Km Numismatics</Text>
    <Text style={{color: '#121212',fontSize:18,fontFamily: "Poppins-Regular",marginVertical:6}}>
    Signup Success, Welcome to Ku Numismatics</Text>
    <View style={{flexDirection: 'row',justifyContent:'flex-end',alignItems:'center',paddingTop:10 }}>
    <TouchableOpacity onPress={()=>this.goHome()}
                style={{paddingHorizontal:12,paddingVertical:2,justifyContent:'center',alignItems:'center' }}>
                <Text style={{fontSize: 20,color:'#90CDD1',
                fontFamily: "Poppins-SemiBold"}}>Ok</Text></TouchableOpacity>  
    </View>
    </View></Animatable.View>:null}
      <View style={{width: '100%',height: '10%', backgroundColor: '#FEE9B0',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
               <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
<Ionicons
name='arrow-back-sharp' color={"#000"} size={width*0.08}
/>
</TouchableOpacity>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color:"#000"}}>Create Account</Text>
   </View>
   <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
<Image
source={require("../../images/logo.jpeg")}
style={{width:width*0.5,height:height*0.1}}
/>
   </View>
   <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='First Name'
style={{paddingHorizontal:width*0.03,color:"#000",fontSize:width*0.04}}
value={this.state.firstName}
onChangeText={(Text)=>this.setState({ firstName:Text})}
/>
</View>
        </View>
        <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Last Name'
style={{paddingHorizontal:width*0.03,color:"#000",fontSize:width*0.04}}
keyboardType='numbers-and-punctuation'
value={this.state.lastName}
onChangeText={(Text)=>this.setState({ lastName:Text})}
/>
</View>
        </View>
        <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='User Name'
style={{paddingHorizontal:width*0.03,color:"#000",fontSize:width*0.04}}
keyboardType='numbers-and-punctuation'
value={this.state.userName}
onChangeText={(Text)=>this.setState({userName:Text})}
/>
</View>
        </View>
        <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Phone Number'
style={{paddingHorizontal:width*0.03,color:"#000",fontSize:width*0.04}}
keyboardType='number-pad'
value={this.state.mobileNumber}
onChangeText={(Text)=>this.setState({ mobileNumber : Text})}
/>
</View>
        </View>
        <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Email'
style={{paddingHorizontal:width*0.03,color:"#000",fontSize:width*0.04}}
keyboardType='numbers-and-punctuation'
value={this.state.email}
onChangeText={(Text)=>this.setState({ email:Text})}
/>
</View>
        </View>
        <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.03}}>
<View style={{borderWidth:1,borderRadius:10,}}>
<TextInput
placeholder='Password'
style={{paddingHorizontal:width*0.03,color:"#000",fontSize:width*0.04}}
keyboardType='numbers-and-punctuation'
value={this.state.password}
onChangeText={(Text)=>this.setState({password:Text})}
/>
</View>
        </View>
        <TouchableOpacity onPress={RegisterAccount}>
            <View style={{paddingTop:width*0.04,marginHorizontal:width*0.06,justifyContent:'center',alignItems:'center'}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#D8C367",borderColor:'#D8C367',justifyContent:'center',alignItems:'center',padding:10,width:"60%"}}>
<Text style={{color:'#fff',fontSize:width*0.04,fontWeight:'bold',}}>
  Create Account
</Text>
              </View>

            </View>
            </TouchableOpacity>
            <Animatable.View animation="flipInX" style={{width:'100%',justifyContent: 'center',alignItems: 'center',paddingTop:10}}>
            <AppButton addStyle={styles.button} buttonPressed={()=>alert("Login with Google account")} btnWithImage={true} btnColor={'#000000aa'} image={Images.googleIcon} title={'Continue with Google'} />
            <AppButton addStyle={styles.button} buttonPressed={()=>alert("Login with Facebook")} btnWithImage={true} btnColor={'#2C70DA'} image={Images.facebookIcon} title={'Continue with Facebook'} />
            <AppButton addStyle={styles.button} buttonPressed={()=>alert("Login with Linkedin")} btnWithImage={true} btnColor={'#FFA3F3'} image={Images.appleIcon} title={'Continue with Linkedin'} />
            </Animatable.View>
            <View style={{paddingTop:width*0.04,paddingHorizontal:width*0.03,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:width*0.04,color:'#000',fontWeight:'500',}}>
                If you  have Account,
              </Text>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
            <View style={{paddingTop:width*0.02,paddingHorizontal:width*0.03,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:width*0.05,color:'#E44226',fontWeight:'500',borderBottomWidth:2,borderBottomColor:"#DCDCDC"}}>
                Back to Login 
              </Text>
              </View>
              </TouchableOpacity>
              </ScrollView>
   </View>
    )
  }
}