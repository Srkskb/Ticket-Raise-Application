import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../utils/color';
import style from './style';
import { ScrollView } from 'react-native-gesture-handler';


class Chatscreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            height: 10
        }
    }


    goback() {
        this.props.navigation.navigate('Alltechnical')
    }


    sendmessage() {
        Alert.alert('hello')
    }


    render() {
        let numOfLinesCompany = 0;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>Ticket SR 12345</Text>
                </View>
                <View style={style.secview}>

                    <ScrollView>
                        {/* <Text style={{ color: Colors.colorBlack }}>Hello bhai</Text> */}
                    </ScrollView>

                    <View style={style.flexpass}>
                        <TextInput placeholder='Message' placeholderTextColor={Colors.colormaincolour}
                            multiline={true}
                            numberOfLines={numOfLinesCompany}
                            onContentSizeChange={(e) => {
                                numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
                            }}
                            onChangeText={(message) => this.setState({ message: message })}
                            style={style.textinputself}
                        />
                        <View style={style.icontwoview}>
                            <TouchableOpacity style={style.iconset}>
                                <Entypo name={this.state.message != '' ? '' : 'attachment'} size={22} style={{ color: Colors.colormaincolour }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.sendmessage()} style={style.iconset}>
                                <Ionicons name={'send'} size={22} style={{ color: this.state.message != '' ? Colors.colormaincolour : Colors.colorgrey }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


            </View>
        )
    }
}

export default Chatscreen;