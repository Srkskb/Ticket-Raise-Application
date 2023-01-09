import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../../utils/color';
import Snack from '../../utils/snack';
import style from './style';
import Zocial from 'react-native-vector-icons/Zocial';
import Utils from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            iseye:'',
            email: '',
            password: '',
            userData:''

        }
    }

    componentDidMount = async () => {

    }

    signin(){
        this.props.navigation.navigate('Register')
    }

    handleeye(){
        let {visible,iseye} = this.state;
        this.setState({visible : !visible})
        this.setState({iseye : !iseye})
    }

    continue(){

        // if(this.state.email!=""){
        //     if(this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        //         if(this.state.password !=""){
         
                    AsyncStorage.setItem('email',this.state.email);
                    AsyncStorage.setItem('password',this.state.password);
                this.props.navigation.replace('ManagerRoot');
                // this.props.navigation.replace('Root');

            //     }else{
            //         Snack('Please enter the password')
            //     }
            // }else{
            //     Snack('Please enter valid email!');
            //   }
            // }else{
            //   Snack('Please enter the email!');
            // }
     
     
        console.log('emial$password====>',this.state.email , this.state.password)
    }


    render() {
        let { iseye, visible, } = this.state
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.secview}>
                    
                    <View style={style.loginview}>
                        <Text style={style.textlogin}>Sign In</Text>
                    </View>
                    <View style={{ marginTop: 30, }}>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Email' placeholderTextColor={Colors.colorred}
                                onChangeText={(email) => this.setState({ email: email })}
                                style={style.textinputself}
                            />
                            <View style={style.iconset}>
                                <Zocial name={'email'} size={22} style={{ color: Colors.colorred}} />
                            </View>
                        </View>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Password' placeholderTextColor={Colors.colorred}
                                secureTextEntry={visible}
                                onChangeText={(password) => this.setState({ password: password })}
                                style={style.textinputself}
                            />
                            <TouchableOpacity onPress={() => this.handleeye()} style={style.iconset}>
                                <Feather name={iseye ? 'eye' : 'eye-off'} size={22} style={{ color: Colors.colorred }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={style.forgotview}>
                            <Text style={{ color:Colors.colorred }}>Forgot Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.continue()} 
                        style={[style.button,{backgroundColor: this.state.password !='' ? Colors.colorred : Colors.colorgrey}]}>
                            <Text style={[style.textcontnue,{color:this.state.password !=  '' ? Colors.colorwhite : Colors.colorBlack}]}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.signin()} style={style.signinview}>
                            <Text style={{ color:Colors.colorred }}>Don’t have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>
        )
    }

}
export default Login;