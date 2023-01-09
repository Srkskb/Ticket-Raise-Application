import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput,FlatList } from 'react-native';
import Colors from '../../utils/color';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import style from './style';

class Mticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memail: '',
            mname: '',
            mbscountry: '',
        }
    }


    componentDidMount = async () => {
       

    }


    goback() {
        this.props.navigation.navigate('Mhome')
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite, }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>All Tickets</Text>
                </View>
                <View style={{ flex: 1, }}>

                    <View style={style.searchview}>
                        <Text style={style.versiontext}>Search</Text>
                        <View style={style.searchmainview}>
                            <View style={{ width: '85%', }}>
                                <TextInput placeholder='Search' placeholderTextColor={Colors.colormaincolour}
                                    onChangeText={(email) => this.setState({ email: email })}
                                    style={style.textinputsearch}
                                />
                            </View>
                            <TouchableOpacity style={style.iconset}>
                                <Feather name={'search'} size={22} style={{ color: Colors.colormaincolour }} />
                            </TouchableOpacity>
                        </View>
                    </View>

               

                    <View style={style.allviewversion}>
                        <ScrollView>
                            <View style={style.versionnameview}>
                                <Text style={style.versiontextname}>Service/Support Domain :</Text>
                                <Text style={style.versionnumtext}>  IBM</Text>
                            </View>

                            <View style={style.versionnameview}>
                                <Text style={style.versiontextname}>Product Name :</Text>
                                <Text style={style.versionnumtext}> UAT</Text>
                            </View>

                            <View style={style.versionnameview}>
                                <Text style={style.versiontextname}>Support Team M Name  :</Text>
                                <Text style={style.versionnumtext}>  Rahul</Text>
                            </View>

                            <View style={style.versionnameview}>
                                <Text style={style.versiontextname}>Problem Severity  :</Text>
                                <Text style={style.versionnumtext}> No loss if service</Text>
                            </View>

                            <View style={style.Actionbtnmainview}>
                                <View>
                                    <Text style={style.versiontextname}>Status :</Text>
                                </View>
                                <TouchableOpacity style={style.btnviewtest}>
                                    <Text style={style.textadd}>Resolved</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={style.Actionbtnmainview}>
                                <View>
                                    <Text style={style.versiontextname}>Action :</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Meditservice')} style={style.btnviewedit}>
                                    <Text style={style.textadd}>View</Text>
                                </TouchableOpacity>
                              
                            </View>

                        </ScrollView>
                    </View>
  
                </View>
            </View>
        )
    }
}

export default Mticket;