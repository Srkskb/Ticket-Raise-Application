import React, {Component} from 'react';
import {View,Text,Image, StatusBar} from 'react-native';
import Colors from '../../utils/color';
import style from './style';
class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount = async () => {
        setTimeout(() => {
            this.props.navigation.navigate('Welcome')
        },6000);
    }

    render(){
        return(
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour}/>
                <View style={style.secondview}>
                    <View style={style.imgmainview}>
                   <Image source={require('../../images/splashgif.gif')} style={{width:'95%',height:240,}} />
                   </View>
                </View>
            </View>
        )
    }

}
export default Splash;