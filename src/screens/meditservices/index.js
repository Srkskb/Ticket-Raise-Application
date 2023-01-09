import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Colors from '../../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './style';

class Meditservice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customfield: [],
            key: ''
        }
    }

    gohome() {
        this.props.navigation.navigate('Mallservice')
    }

    goback() {
        this.props.navigation.navigate('Mallservice')
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
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite, }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>Edit Services</Text>
                </View>
                <View style={{ flex: 1, }}>
                    <ScrollView>
                        <View style={style.allviewversion}>
                            <View>
                                <Text style={style.textallselect}>Name</Text>
                                <TextInput multiline placeholder='Testing 2' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                            </View>

                            <View>
                                <Text style={style.textallselect}>Base Support Country</Text>
                                <TextInput multiline placeholder='US' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                            </View>

                            <View>
                                <Text style={style.textallselect}>Support Email id</Text>
                                <TextInput multiline placeholder='parakore2@gmail.com' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                            </View>

                            <View>
                                <Text style={style.textallselect}>Product name</Text>
                                <TextInput multiline placeholder='Tesing1.1' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                            </View>

                            <View>
                                <Text style={style.textallselect}>Product name</Text>
                                <TextInput multiline placeholder='Tesing1.2' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                            </View>

                            <View>
                                <Text style={style.textallselect}>Product name</Text>
                                <TextInput multiline placeholder='Tesing1.3' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
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
                            <View style={{ marginBottom: 20 }}>
                                <Text style={style.textallselect}>Add new products</Text>
                                <TouchableOpacity onPress={() => this.addproduct()} style={style.addview}>
                                    <Ionicons name={'add'} size={30} style={{ color: Colors.colorwhite }} />
                                    <Text style={style.textaddselect}>Add</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={() => this.gohome()} style={style.btnview}>
                                <Text style={style.textaddselect}>Edit</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Meditservice;