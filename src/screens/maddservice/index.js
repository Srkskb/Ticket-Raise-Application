import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';


class Maddservice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            bscountry: '',
            name: '',
            customfield: [],
            key: ''

        }
    }

    gohome(){
        AsyncStorage.setItem('memail',this.state.email);
        AsyncStorage.setItem('mname',this.state.name);
        AsyncStorage.setItem('mbscountry',this.state.bscountry);
        this.props.navigation.navigate('Mhome')
    }

    goback() {
        this.props.navigation.navigate('Mhome')
    }

    inputhandler(name, index) {
        this.state.customfield[index].meta_name = value;
        this.setState({ customfield: this.state.customfield })
    }

    addproduct() {
        this.setState({ customfield: [...this.state.customfield, { meta_name: 'value' }] })
    }

    deleteinput(index) {
        this.state.customfield.splice(index, 1);
        this.setState({ customfield: this.state.customfield })
    }

    render() {
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>Add New Service</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ marginLeft: 30 }}>

                        <View>
                            <Text style={style.textallselect}>Name</Text>
                            <TextInput multiline placeholder='Enter'
                                placeholderTextColor={Colors.colormaincolour}
                                style={style.textinputall}
                                onChangeText={(name) => this.setState({ name: name })}
                            />
                        </View>

                        <View>
                            <Text style={style.textallselect}>Base Support Country</Text>
                            <TextInput multiline placeholder='Enter'
                                placeholderTextColor={Colors.colormaincolour}
                                style={style.textinputall}
                                onChangeText={(bscountry) => this.setState({ bscountry: bscountry })}
                            />
                        </View>

                        <View>
                            <Text style={style.textallselect}>Support Email id</Text>
                            <TextInput multiline placeholder='Enter'
                                placeholderTextColor={Colors.colormaincolour}
                                onChangeText={(email) => this.setState({ email: email })}
                                style={style.textinputall} />
                        </View>


                        <View>
                            <Text style={style.textallselect}>Add new products</Text>
                            <TouchableOpacity onPress={() => this.addproduct()} style={style.addview}>
                                <Ionicons name={'add'} size={30} style={{ color: Colors.colorwhite }} />
                                <Text style={style.textaddselect}>Add</Text>
                            </TouchableOpacity>
                        </View>

                        {
                            this.state.customfield.map((customInput, key) => {
                                return (
                                    <View key={key}>
                                        <Text style={style.textproduct}>Product name</Text>
                                        <View style={style.searchmainview}>
                                            <View style={{ width: '85%', }}>
                                                <TextInput placeholder='' placeholderTextColor={Colors.colormaincolour}
                                                    onChangeText={name => this.inputhandler(name, key)}
                                                    style={style.textinputsearch}
                                                />
                                            </View>
                                            <TouchableOpacity onPress={() => this.deleteinput(key)} style={style.iconset}>
                                                <Entypo name={'cross'} size={22} style={{ color: Colors.colormaincolour }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            })
                        }

                        <TouchableOpacity onPress={()=> this.gohome()} style={style.buttonview}>
                            <Text style={style.buttontext}>Add</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>


            </View>
        )
    }

}
export default Maddservice;