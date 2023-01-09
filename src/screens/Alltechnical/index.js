import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/color';

class Alltechnical extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'atul',

        }
    }

    goback() {
        this.props.navigation.navigate('Home');
    }

    chatscreen() {
        this.props.navigation.navigate('Chatscreen');
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>All Tickets</Text>
                </View>
                <View style={style.secondview}>
                    <View style={style.searchmainview}>
                        <Text style={style.textsearch}>Search :</Text>
                        <TextInput
                            placeholder='Search here'
                            multiline
                            placeholderTextColor={Colors.colormaincolour}
                            style={style.textinputsearch}
                        />
                    </View>
                    <ScrollView style={{}}>

                        <View style={style.boxview}>
                            <ScrollView>
                                <View style={style.titlebtnview}>
                                    <View style={style.titleview}>
                                        <Text style={style.texttitle}>Title</Text>
                                    </View>
                                    <View style={style.btnview}>
                                        <TouchableOpacity style={style.touchbtn}>
                                            <Text style={style.textviewsr}>Open</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.ticketidview}>
                                     <View style={style.tickettextview}>
                                        <Text style={style.texttitle}>TicketId: 12345 28Dec 2022, 01:07Pm</Text>
                                     </View>
                                </View>
                                <TouchableOpacity onPress={()=>this.chatscreen()} style={style.chatbtn}>
                                    <Text style={style.textviewsr}>View SR</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View style={style.boxview}>
                            <ScrollView>
                                <View style={style.titlebtnview}>
                                    <View style={style.titleview}>
                                        <Text style={style.texttitle}>Title</Text>
                                    </View>
                                    <View style={style.btnview}>
                                        <TouchableOpacity style={style.touchbtnclose}>
                                            <Text style={style.textviewsr}>Close</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.ticketidview}>
                                     <View style={style.tickettextview}>
                                        <Text style={style.texttitle}>TicketId: 12345 28Dec 2022, 01:07Pm</Text>
                                     </View>
                                </View>
                                <TouchableOpacity onPress={()=>this.chatscreen()} style={style.chatbtn}>
                                    <Text style={style.textviewsr}>View SR</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View style={style.boxview}>
                            <ScrollView>
                                <View style={style.titlebtnview}>
                                    <View style={style.titleview}>
                                        <Text style={style.texttitle}>Title</Text>
                                    </View>
                                    <View style={style.btnview}>
                                        <TouchableOpacity style={style.touchbtnreopen}>
                                            <Text style={style.textviewsr}>Re-Open</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.ticketidview}>
                                     <View style={style.tickettextview}>
                                        <Text style={style.texttitle}>TicketId: 12345 28Dec 2022, 01:07Pm</Text>
                                     </View>
                                </View>
                                <TouchableOpacity onPress={()=>this.chatscreen()} style={style.chatbtn}>
                                    <Text style={style.textviewsr}>View SR</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Alltechnical;