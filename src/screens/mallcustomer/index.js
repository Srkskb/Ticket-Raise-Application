import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput,FlatList } from 'react-native';
import Colors from '../../utils/color';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import style from './style';

class Mcustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memail: '',
            mname: '',
            mbscountry: '',
        }
    }


    componentDidMount = async () => {
        // const memail = await AsyncStorage.getItem('memail');
        // const mname = await AsyncStorage.getItem('mname');
        // const mbscountry = await AsyncStorage.getItem('mbscountry');
        // const mcustomfield = await AsyncStorage.getItem('mcustomfield');
        // this.setState({memail })
        // this.setState({ mname })
        // this.setState({ mbscountry })
        // console.log('userdata=======>', memail, mname, mcustomfield, mbscountry)

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
                    <Text style={style.styletexthome}>All Customer</Text>
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
                                <Text style={style.versiontextname}>Customer Name :</Text>
                                <Text style={style.versionnumtext}> Testing 1</Text>
                            </View>

                            <View style={style.versionnameview}>
                                <Text style={style.versiontextname}>Customer CRS :</Text>
                                <Text style={style.versionnumtext}> PR9733184744</Text>
                            </View>

                            <View style={style.versionnameview}>
                                <Text style={style.versiontextname}>Customer Manager Name :</Text>
                                <Text style={style.versionnumtext}> Rahul</Text>
                            </View>

                            <View style={style.versionnameview}>
                                <Text style={style.versiontextname}>Customer Manager email id:</Text>
                                <Text style={style.versionnumtext}>  rahul123@gmail.com</Text>
                            </View>

                            <View style={style.Actionbtnmainview}>
                                <View>
                                    <Text style={style.versiontextname}>Service Support Domain :</Text>
                                </View>
                                <TouchableOpacity style={style.btnviewtest}>
                                    <Text style={style.textadd}>Microsoft</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={style.Actionbtnmainview}>
                                <View>
                                    <Text style={style.versiontextname}>Products :</Text>
                                </View>
                                <TouchableOpacity style={style.btnviewtest}>
                                    <Text style={style.textadd}>Cloud</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.btnviewtest}>
                                    <Text style={style.textadd}>Windows</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={style.Actionbtnmainview}>
                                <View>
                                    <Text style={style.versiontextname}>Action :</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Meditcustomer')} style={style.btnviewedit}>
                                    <Text style={style.textadd}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.btnviewdelete}>
                                    <Text style={style.textadd}>Delete</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
  
                </View>
            </View>
        )
    }
}

export default Mcustomer;