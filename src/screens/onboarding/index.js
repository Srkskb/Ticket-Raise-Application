import React, { Component } from 'react';
import { Text, View, StatusBar, Button, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import style from './style';
import Colors from '../../utils/color';
import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesome from 'react-native-vector-icons/FontAwesome';



// const { height } = Dimensions.get('window');


class Onboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    componentDidMount = async () => {

    };

    opendrawer(){
        this.props.navigation.toggleDrawer();
    }


    render() {
        return (
            <View style={{ flex: 1, }}>
                <StatusBar backgroundColor='#0E0A15' />
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <TouchableOpacity onPress={() => this.opendrawer()} style={{ marginLeft: 20 }}>
                        <FontAwesome size={30} name='bars' style={{ color: 'black', }}/>
                        </TouchableOpacity >

                        <TouchableOpacity  style={{ position: 'absolute', right: 20, }}>
                        <Icon size={30} name='user' style={{ color: 'black', }}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        )

    }
}
export default Onboard;