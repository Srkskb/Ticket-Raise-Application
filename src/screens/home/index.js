import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, BackHandler, Alert, } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time:'',
            date:'',


        }
        this.handleBack = this.handleBack.bind(this);

    }

    componentDidMount = async () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
   
    }


    handleBack() {
        Alert.alert(
            "Are you Sure?",
            "Want to exit this App?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "Exit", onPress: () => BackHandler.exitApp() }
            ]
        );
        return true;
    }

    opendrawer() {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour} />

                <View style={style.icimgview}>
                    <TouchableOpacity style={{zIndex:999, }} onPress={() => this.opendrawer()} >
                        <FontAwesome name={'bars'} size={30} style={{ color: Colors.colorwhite,marginLeft:20 }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>Home</Text>
                </View>

                <View style={style.secview}>
                    <ScrollView>
                    
                    <View style={style.imgmainview}>
                      <Image source={require('../../images/logo1.png')} resizeMode={'contain'} style={{width:'95%',height:240,}}/> 
                    </View>
                   
                    <View style={style.secimageview}>
                      <Image source={require('../../images/image1.png')}  style={{width:240,height:240,}}/> 
                    </View>
                   
                    <View style={style.handimgview}>
                      <Image source={require('../../images/hands.png')} resizeMode={'contain'} style={{width:190,height:190,}}/> 
                    </View>
                        
                    </ScrollView>
                </View>

            </View>
        )
    }

}
export default Home;