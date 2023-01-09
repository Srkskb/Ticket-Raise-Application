import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Utils from '../../utils';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AsyncStorage from '@react-native-community/async-storage';


class Mhome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             userData:''

        }
    }

    componentDidMount = async () => {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        this.setState({email})
        this.setState({password})
    }

    opendrawer() {
        this.props.navigation.toggleDrawer();
    }

    totalmanager(){
        this.props.navigation.navigate('Mallmanager')
    }

    totalsupport(){
        this.props.navigation.navigate('Mallsupport')
    }

    totalusers(){
        this.props.navigation.navigate('Mallusers')
    }

    totalcustomer(){
        this.props.navigation.navigate('Mcustomer')
    }

    render() {
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.opendrawer()} >
                        <FontAwesome name={'bars'} size={30} style={{ color: Colors.colorwhite, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>Manager</Text>
                </View>
 
                <View style={{ flex: 1 }}>
                    <ScrollView>

                        <View style={style.bagmainview}>
                            <View style={style.icontextview}>
                                <View style={style.textview}>
                                    <Text style={style.numtext}>1</Text>
                                    <Text style={style.textnew}>Total Manager</Text>
                                </View>
                                <View style={style.iconview}>
                                    <FontAwesome name={'users'} size={60} style={{ color: Colors.colorgrey }} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>this.totalmanager()} style={style.moreinfoview}>
                                <View>
                                    <Text style={style.textmoreinfo}>View</Text>
                                </View>
                                <View>
                                    <Feather name={'arrow-right-circle'} size={20} style={{ color: Colors.colorwhite, marginHorizontal: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={style.subadminmainview}>
                            <View style={style.icontextview}>
                                <View style={style.textview}>
                                    <Text style={style.numtext}>1</Text>
                                    <Text style={style.textnew}>Total Support Team</Text>
                                </View>
                                <View style={style.iconview}>
                                    <Ionicons name={'flower-outline'} size={60} style={{ color: Colors.colorgrey }} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>this.totalsupport()} style={style.moreinfoview}>
                                <View>
                                    <Text style={style.textmoreinfo}>View</Text>
                                </View>
                                <View>
                                    <Feather name={'arrow-right-circle'} size={20} style={{ color: Colors.colorwhite, marginHorizontal: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={style.usermainview}>
                            <View style={style.icontextview}>
                                <View style={style.textview}>
                                    <Text style={style.numtextuser}>1</Text>
                                    <Text style={style.textnewuser}>Total Users</Text>
                                </View>
                                <View style={style.iconview}>
                                    <Entypo name={'add-user'} size={60} style={{ color: Colors.colorgrey}} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>this.totalusers()}  style={style.moreinfoview}>
                                <View>
                                    <Text style={style.textmoreinfouser}>View</Text>
                                </View>
                                <View>
                                    <Feather name={'arrow-right-circle'} size={20}
                                        style={{ color: Colors.colormaincolour, marginHorizontal: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={style.ticketmainview}>
                            <View style={style.icontextview}>
                                <View style={style.textview}>
                                    <Text style={style.numtext}>1</Text>
                                    <Text style={style.textnew}>Total Customer</Text>
                                </View>
                                <View style={style.iconview}>
                                    <FontAwesome name={'user-circle'} size={60} style={{ color: Colors.colorgrey }} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>this.totalcustomer()} style={style.moreinfoview}>
                                <View>
                                    <Text style={style.textmoreinfo}>View</Text>
                                </View>
                                <View>
                                    <Feather name={'arrow-right-circle'} size={20} style={{ color: Colors.colorwhite, marginHorizontal: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            
 
                 

            </View>
        )
    }

}
export default Mhome;