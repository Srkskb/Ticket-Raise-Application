import { Text, View, Dimensions, StyleSheet, TouchableOpacity, TextInput, Image ,BackHandler,Alert,Platform} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import styles from './styles'
import { Images } from '../../theme';
import * as Animatable from 'react-native-animatable';
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';
import { Wave } from 'react-native-animated-spinkit'
import axios from 'axios';
import { AppButton, BackButtonHeader, LinkText, FloatingLabelInput } from '../../components/index';
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
      loading:false,
    }
  }
  componentDidMount() {

    AsyncStorage.getItem('user')
            .then(user =>{
              if(JSON.parse(user)!=null){
                            this.goto()}
            })
    if ('android' === Platform.OS) {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
  }

  componentWillUnmount() {
    if ('android' === Platform.OS) {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackPress,
      );
    }
  }

  handleBackPress = () => {
    if (this.props.navigation.isFocused()) {
      Alert.alert(
        'Exit App',
        'Exiting the application?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
      return true;
    }
  };
  goto(){
    this.props.navigation.navigate('Home')
  }
  render() {
      
    const signIn=()=>{
      this.setState({loading:true})
        if(this.state.email&&this.state.password){
              var data = JSON.stringify({
              "email":this.state.email,
              "password":this.state.password,
               });
      var config = {
method: 'post',
url: 'https://newserver.cloudley.in/api/login',
headers: { 
'Content-Type': 'application/json'
},
data : data
};

axios(config)
.then((response)=>{
     console.log(response.data)
this.setState({loading:false})

if(response.data.status==200){
    storeData('user',JSON.stringify(response.data.data))
  this.goto()
}else{
    showMessage({
                message: "Km Numismatics",
                      description:JSON.stringify(response.data.message),
                      type: "danger",
      textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
      titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                    });
}
}
).catch(function (error) {
      console.log(error);
      });
      }else{
        this.setState({loading:false})
            showMessage({
                    message: "Km Numismatics",
                    description: "Please enter Email or Password",
                    type: "danger",
      textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
      titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                  });
          }
    }
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF' }}>
        <View style={{
          width: '100%', height: '10%', backgroundColor: '#FEE9B0', paddingHorizontal: width * 0.06,
          alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'
        }}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
<Ionicons
name='arrow-back-sharp' color={"#000"} size={width*0.08}
/>
</TouchableOpacity>
          <Text style={{ paddingHorizontal: 20, fontSize: width * 0.06, fontWeight: 'bold', color: "#000" }}>Login</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require("../../images/logo.jpeg")}
            style={{ width: width * 0.97, height: height * 0.2 }}
          />
        </View>
        
          <View style={{ paddingTop: width * 0.1, paddingHorizontal: width * 0.03 }}>
            <View style={{ borderWidth: 1, borderRadius: 10, }}>
              <TextInput
                placeholder='Email'
                style={{ paddingHorizontal: width * 0.03, color: "#000", fontSize: width * 0.04 }}
                onChangeText={(text)=>this.setState({email:text})}
                value={this.state.email}
              />
            </View>
          </View>
          <View style={{ paddingTop: width * 0.05, paddingHorizontal: width * 0.03 }}>
            <View style={{ borderWidth: 1, borderRadius: 10, }}>
              <TextInput
                placeholder='Password'
                style={{ paddingHorizontal: width * 0.03, color: "#000", fontSize: width * 0.04 }}
                keyboardType='numbers-and-punctuation'
                onChangeText={(text)=>this.setState({password:text})}
                secureTextEntry={true}
              />
            </View>
          </View>
          <TouchableOpacity onPress={()=>signIn()} >
            <View style={{ paddingTop: width * 0.05, marginHorizontal: width * 0.06, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "#D8C367", borderColor: '#D8C367', justifyContent: 'center', alignItems: 'center', padding: 10, width: "60%" }}>
                <Text style={{ color: '#fff', fontSize: width * 0.04, fontWeight: 'bold', }}>
                  Login
                </Text>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ResetPassword")}>
            <View style={{ paddingTop: width * 0.05, paddingHorizontal: width * 0.03, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: width * 0.05, color: '#000', fontWeight: '500', borderBottomWidth: 2, borderBottomColor: "#DCDCDC" }}>
                Forgot Password ?
              </Text>
            </View>
          </TouchableOpacity>
          <Animatable.View animation="flipInX" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
            <AppButton addStyle={styles.button} buttonPressed={() => alert("Login with Google account")} btnWithImage={true} btnColor={'#000000aa'} image={Images.googleIcon} title={'Continue with Google'} />
            <AppButton addStyle={styles.button} buttonPressed={() => alert("Login with Facebook")} btnWithImage={true} btnColor={'#2C70DA'} image={Images.facebookIcon} title={'Continue with Facebook'} />
            <AppButton addStyle={styles.button} buttonPressed={() => alert("Login with Linkedin")} btnWithImage={true} btnColor={'#FFA3F3'} image={Images.appleIcon} title={'Continue with Linkedin'} />
          </Animatable.View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Registration")}>
            <View style={{ paddingTop: width * 0.05, paddingHorizontal: width * 0.03, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: width * 0.05, color: '#E44226', fontWeight: '500', borderBottomWidth: 2, borderBottomColor: "#DCDCDC" }}>
                Create Account
              </Text>
            </View>
          </TouchableOpacity>
      </View>
    )
  }
}