import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Snack from '../../utils/snack';
import axios from 'axios';
import { Wave } from 'react-native-animated-spinkit';
import { showMessage, hideMessage } from "react-native-flash-message";
import * as Animatable from 'react-native-animatable';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            iseye: '',
            email: '',
            password: '',
            firstname: '',
            username: '',
            companysrc:'',
            lastname:'',
            phone:'',
            showPop:false,
            loading:false,


        }
    }

    componentDidMount = async () => {

    }

    signin() {
        this.props.navigation.navigate('Login')
    }
    goHome(){
        this.setState({showPop:false,lastname:"",firstname:"",email:"",password:"",companysrc:"",phone:"",username:""})
        this.props.navigation.navigate('Login')
      }
    handleeye() {
        let { visible, iseye } = this.state;
        this.setState({ visible: !visible })
        this.setState({ iseye: !iseye })
    }
 Register(){
    var data = JSON.stringify({
        "CompanySRC": this.state.companysrc,
        "UserName": this.state.username,
        "FirstName": this.state.firstname,
        "LastName": this.state.lastname,
        "PhoneNumber": this.state.phone,
        "EmailID": this.state.email,
        "Paasowrd": this.state.password
      });
      
      var config = {
        method: 'post',
        url: 'https://bus.kibtechnologies.com/tickets-crm/api/V1/Client-user-registration/',
        headers: { 
          'Authorization': 'Bearer BSNHKOhsmkTYowokmamskM001GAT', 
          'Content-Type': 'application/json', 
          'Cookie': 'PHPSESSID=1002d64bb7d6549e3f1804a22492950f'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        // console.log(response.data.Message)
        // this.setState({loading:false})
         if(response.data.message=="success"){
          console.log("Register SuccessFully")
          this.goHome()
        }
      })
      .catch(function (error) {
        showMessage({
                    message: "YogiX",
                    description:'Error',
                    type: "danger",
                textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
                titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
                            });
      });
      
        }
  

    continue() {
        if (this.state.name != '') {
            if (this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                if (this.state.company != '') {
                    if (this.state.password != '') {
                        if (this.state.cpassword != '') {
                            this.props.navigation.replace('ManagerRoot');
                            // this.props.navigation.replace('Root');
                            console.log('name=======>', this.state.name)
                            console.log('email=======>', this.state.email)
                            console.log('company=======>', this.state.company)
                            console.log('password=======>', this.state.password)
                            console.log('cpassword=======>', this.state.cpassword)

                        } else {
                            Snack('please enter the confirm password')
                        }
                    } else {
                        Snack('please enter the password');
                    }
                } else {
                    Snack('please enter the company');
                }
            } else {
                Snack('Please enter valid email!');
            }
        } else {
            Snack('please enter the name')
        }
    }


    render() {

        let { iseye, visible, iseyeone, visibleone } = this.state
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                {this.state.showPop? <Animatable.View animation="flipInX" style={{position: 'absolute',width:'100%',height:'100%',
      backgroundColor: 'rgba(253, 253, 253, 0.9)',justifyContent:'center',alignItems:'center',zIndex: 5}}>
    <View elevation={5} style={{width:'84%',backgroundColor: '#fdfdfd',padding:20,borderRadius: 4}}>
    <Text style={{color: '#121212',fontSize:22,fontFamily: "Poppins-SemiBold",marginVertical:6}}>
    YogiX</Text>
    <Text style={{color: '#121212',fontSize:18,fontFamily: "Poppins-Regular",marginVertical:6}}>
    Signup Success, Welcome to YogiX</Text>
    <View style={{flexDirection: 'row',justifyContent:'flex-end',alignItems:'center',paddingTop:10 }}>
    <TouchableOpacity onPress={()=>this.goHome()}
                style={{paddingHorizontal:12,paddingVertical:2,justifyContent:'center',alignItems:'center' }}>
                <Text style={{fontSize: 20,color:'#90CDD1',
                fontFamily: "Poppins-SemiBold"}}>Ok</Text></TouchableOpacity>  
    </View>
    </View></Animatable.View>:null}
                <View style={style.secview}>
                    <View style={style.loginview}>
                        <Text style={style.textlogin}>Sign Up</Text>
                    </View>
                    <ScrollView>
                    <View style={style.flexpass}>
                                <TextInput placeholder='Enter Company CSR No' placeholderTextColor={Colors.colorred}
                                      onChangeText={(text) => this.setState({companysrc: text})}
                                      value={this.state.companysrc}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <MaterialCommunityIcons name={'office-building'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                        <View style={{ }}>
                            <View style={style.flexpass}>
                                <TextInput placeholder='User Name' placeholderTextColor={Colors.colorred}
                                      onChangeText={(text) => this.setState({username: text})}
                                      value={this.state.username}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Feather name={'user'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                            <View style={style.flexpass}>
                                <TextInput placeholder='First Name' placeholderTextColor={Colors.colorred}
                                       onChangeText={(text) => this.setState({firstname: text})}
                                       value={this.state.firstname}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Feather name={'user'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                            <View style={style.flexpass}>
                                <TextInput placeholder='Last Name' placeholderTextColor={Colors.colorred}
                                      onChangeText={(text) => this.setState({lastname: text})}
                                      value={this.state.lastname}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Feather name={'user'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                            <View style={style.flexpass}>
                                <TextInput placeholder='Phone' placeholderTextColor={Colors.colorred}
                                    secureTextEntry={visibleone}
                                    onChangeText={(text) => this.setState({phone: text})}
                                    value={this.state.phone}
                                    style={style.textinputself}
                                />
                                <TouchableOpacity style={style.iconset}>
                                    <Feather name={'phone-call'} size={22} style={{ color: Colors.colorred }} />
                                </TouchableOpacity>
                            </View>

                            <View style={style.flexpass}>
                                <TextInput placeholder='Email' placeholderTextColor={Colors.colorred}
                                      onChangeText={(text) => this.setState({email: text})}
                                      value={this.state.email}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Zocial name={'email'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                           
                            <View style={style.flexpass}>
                                <TextInput placeholder='Password' placeholderTextColor={Colors.colorred}
                                    secureTextEntry={visible}
                                    onChangeText={(text) => this.setState({password: text})}
                                    value={this.state.password}
                                    style={style.textinputself}
                                />
                                <TouchableOpacity onPress={() => this.handleeye()} style={style.iconset}>
                                    <Feather name={iseye ? 'eye' : 'eye-off'} size={22} style={{ color: Colors.colorred }} />
                                </TouchableOpacity>
                            </View>
                          
                            <TouchableOpacity onPress={()=>this.Register()}
                                // disabled={!this.state.cpassword}
                                style={[style.button, { backgroundColor: this.state.cpassword != '' ? Colors.colorred : Colors.colorgrey }]}>
                                <Text style={style.textcontnue}>Sign Up</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.signin()} style={style.signinview}>
                                <Text style={{ color: Colors.colorred }}>You have an account? Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>

            </View>
        )
    }

}
export default Register;