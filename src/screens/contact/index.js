import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


class Contact extends React.Component {
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
                    <Text style={style.styletexthome}>Contacts</Text>
                </View>
                <View style={style.textmainview}>
                    <Text style={style.textmainself}>
                        Give us a call or drop by anytime , we endeavour to answer all enquiries within 24hours on bussiness days
                    </Text>
                </View>
                <ScrollView>
                    <View style={style.textinputview}>
                        <Text style={style.textallselect}>Our Address:</Text>
                        <Text style={style.textdummy}>Dummy Text</Text>
                    </View>

                    <View style={style.textinputview}>
                        <Text style={style.textallselect}>Our Mailbox:</Text>
                        <Text style={style.textdummy}>Dummy Text</Text>
                    </View>

                    <View style={style.textinputview}>
                        <Text style={style.textallselect}>Our Phone:</Text>
                        <Text style={style.textdummy}>Dummy Text</Text>
                    </View>

                    <View style={style.socialview}>
                        <Text style={style.textallselect}>Our Socials:</Text>
                        <Entypo name={'linkedin'} size={30} style={{ color: Colors.colormaincolour,marginTop:10 }} />
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default Contact;