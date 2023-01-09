import React , {Component} from 'react';
import {View , Text, StatusBar, TouchableOpacity,Image} from 'react-native';
import Colors from '../../utils/color';
import style from './style';

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    signin(){
        this.props.navigation.navigate('Login')
    }

    signup(){
        this.props.navigation.navigate('Register')
    }


    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar  backgroundColor={Colors.colormaincolour}/>
                <View style={style.secmainview}>
                       <View style={{marginTop:200,alignItems:'center'}}>
                        <Text style={style.textwelcome}>Welcome</Text>
                       </View>
                       <TouchableOpacity onPress={()=> this.signin()} style={style.signinviewbtn}>
                          <Text style={style.textsignin}>Sign In</Text>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=> this.signup()} style={style.signinviewbtn}>
                          <Text style={style.textsignin}>Sign Up</Text>
                       </TouchableOpacity>
                       <View style={style.imageview}>
                        <Image  source={require('../../images/trees.png')} style={{width:250,height:250}}/>
                       </View>
                </View>
            </View>
        )
    }
}

export default Welcome;