import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, StatusBar, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/color';
import style from './style';


class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            messages: '',
            location: '',
            data: '',
            userData: '',
            loading: 'true'
        }
    }



    componentDidMount = async () => {

    }

    goback() {
        this.props.navigation.navigate('Home');
    }




    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>Feedback</Text>
                </View>

                <View style={{ marginTop:20 }}>
                    <Text style={style.textfeedback}>Write Your Feedback</Text>
                    </View>
                    <ScrollView style={{marginBottom:20,}}>
                        <View>
                            <TextInput style={style.textinputself}
                                placeholder={'Title'}
                                placeholderTextColor={Colors.colormaincolour}
                                value={this.state.userData.emp_id}
                                onChangeText={(empid) => this.setState({ userId: empid })}
                            ></TextInput>
                        </View>
                        <View>
                            <TextInput placeholder='Subject'
                                style={style.textinputself}
                                placeholderTextColor={Colors.colormaincolour}
                                value={this.state.title}
                                onChangeText={(txt) => this.setState({ title: txt })}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                multiline numberOfLines={8}
                                placeholderTextColor={Colors.colormaincolour}
                                placeholder='Please share your feedback'
                                style={style.textinputfeedback}
                                value={this.state.messages}
                                onChangeText={(msg) => this.setState({ messages: msg })}
                            ></TextInput>
                        </View>
              
                        <TouchableOpacity
                            style={style.submitbutton}>
                            <Text style={style.textsubmit}> SUBMIT</Text>
                        </TouchableOpacity>
                 
                        </ScrollView>


              

            </View>
        )
    }
}
const Styles = StyleSheet.create({
    icon: {
        marginHorizontal: 10,
        color: '#e05504'
    }
});
export default Feedback;