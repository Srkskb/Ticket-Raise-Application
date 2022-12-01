import React, { Component } from 'react';
import { Text, View, StatusBar, Button, TextInput, TouchableOpacity, ImageBackground, } from 'react-native';
import style from './style';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../utils/color';
import Snack from '../../utils/snack';


class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            iseye: '',
            email: '',
            password: '',


        }
    }

    componentDidMount = async () => {
        // setTimeout(() => {
        //     this.props.navigation.navigate('Onboard');
        // }, 2000);
    };

    continue() {
        if (this.state.email !== '') {
            if (this.state.password !== '') {
                this.props.navigation.navigate('Practise')
            }
            else {
                Snack('Please enter the password')
            }
        } else {
            Snack('Please enter email id')
        }
    }

    handleeye() {
        let { iseye, visible } = this.state
        this.setState({ iseye: !iseye })
        this.setState({ visible: !visible })

    }

    render() {
        let { iseye, visible, iseyeone, visibleone } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#c6cfcb' }}>
                <StatusBar backgroundColor='#0E0A15' />
                <View style={{flex:0.06,backgroundColor:'white',justifyContent:'center',
            alignItems:'center'}}>
                    <Text style={style.textcrm}>KIB TECHNOLOGIES CRM</Text>
                </View> 
                <View style={{ flex: 0.9, justifyContent: 'center', }}>
                    <View>
                        <View style={style.flexpass} onPress>
                            <TextInput placeholder='Enter Email ID' placeholderTextColor={'black'}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15, fontWeight: 'bold' }}
                                onChangeText={(email) => this.setState({ email: email })}
                            />
                        </View>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Password' placeholderTextColor={'black'}
                                secureTextEntry={visible}
                                onChangeText={(password) => this.setState({ password: password })}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15, fontWeight: 'bold' }}
                            />
                            <TouchableOpacity onPress={() => this.handleeye()} style={style.iconset}>
                                <Feather name={iseye ? 'eye' : 'eye-off'} size={22} style={{ color: Colors.colordarkgrey }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.continue()} activeOpacity={0.7} style={style.buttonview}>
                        <Text style={style.button}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )

    }
}
export default Splash;