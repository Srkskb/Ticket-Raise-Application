import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    goback() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite, }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>About</Text>
                </View>
                <View style={style.textmainview}>
                    <Text style={style.textmainself}>
                       Your Partner For Software Innovation
                    </Text>
                </View>
              
            </View>
        )
    }
}

export default About;