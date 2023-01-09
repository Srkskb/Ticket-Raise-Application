import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Snack from '../../utils/snack';



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            iseye: '',
            email: '',
            password: '',
            name: '',
            company: '',

        }
    }

    componentDidMount = async () => {

    }

    signin() {
        this.props.navigation.navigate('Login')
    }

    handleeye() {
        let { visible, iseye } = this.state;
        this.setState({ visible: !visible })
        this.setState({ iseye: !iseye })
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
                <View style={style.secview}>
                    <View style={style.loginview}>
                        <Text style={style.textlogin}>Sign Up</Text>
                    </View>
                    <ScrollView>
                    <View style={style.flexpass}>
                                <TextInput placeholder='Enter Company CSR No' placeholderTextColor={Colors.colorred}
                                    onChangeText={(company) => this.setState({ company: company })}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <MaterialCommunityIcons name={'office-building'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                        <View style={{ }}>
                            <View style={style.flexpass}>
                                <TextInput placeholder='User Name' placeholderTextColor={Colors.colorred}
                                    onChangeText={(name) => this.setState({ name: name })}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Feather name={'user'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                            <View style={style.flexpass}>
                                <TextInput placeholder='First Name' placeholderTextColor={Colors.colorred}
                                    onChangeText={(name) => this.setState({ name: name })}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Feather name={'user'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                            <View style={style.flexpass}>
                                <TextInput placeholder='Last Name' placeholderTextColor={Colors.colorred}
                                    onChangeText={(name) => this.setState({ name: name })}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Feather name={'user'} size={22} style={{ color: Colors.colorred }} />
                                </View>
                            </View>
                            <View style={style.flexpass}>
                                <TextInput placeholder='Phone' placeholderTextColor={Colors.colorred}
                                    secureTextEntry={visibleone}
                                    onChangeText={(cpassword) => this.setState({ cpassword: cpassword })}
                                    style={style.textinputself}
                                />
                                <TouchableOpacity style={style.iconset}>
                                    <Feather name={'phone-call'} size={22} style={{ color: Colors.colorred }} />
                                </TouchableOpacity>
                            </View>

                            <View style={style.flexpass}>
                                <TextInput placeholder='Email' placeholderTextColor={Colors.colorred}
                                    onChangeText={(email) => this.setState({ email: email })}
                                    style={style.textinputself}
                                />
                                <View style={style.iconset}>
                                    <Zocial name={'email'} size={22} style={{ color: Colors.colorred }} />
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
                          
                            <TouchableOpacity onPress={() => this.continue()}
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