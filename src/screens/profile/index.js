import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ImageBackground, ScrollView } from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utils/color';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: { uri: 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png' },
            email: 'atulsharma123@gmail.com',
            number: '1234567890'
        }
    }


    goback() {
        this.props.navigation.navigate('Home');
    }

    opencamera = async () => {
        let option = {
            quality: 1,
            maxWidth: 400,
            maxHeight: 400,
            mediaType: 'photo',
            includeBase64: false,
        };
        console.log('Option', option, response);
        const result = await launchImageLibrary(option, response);
        let response;
        console.log('result', result);
        if (result?.assets) response = result.assets[0];

        if (response) {
            let file = {
                uri: response.uri,
                type: 'image/jpeg',
                name: response.fileName,
            };
            this.setState({ image: { uri: response.uri }, file: file, profile_pic: file, photoType: 'file' });
            console.log('Images========>:', file, this.state.image);
        } else {
            Snack('User Cancelled');
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={{}}>
                    <TouchableOpacity onPress={() => this.goback()} style={style.barsview}>
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colormaincolour }} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ flex: 1 }}>

                        <TouchableOpacity style={style.maintouchview}>
                            <View style={{}}>
                                <View style={{ borderRadius: 200, overflow: 'hidden', backgroundColor: Colors.colormaincolour }}>
                                    <ImageBackground source={this.state.image} resizeMode={'cover'} style={style.imageview}>
                                    </ImageBackground>
                                </View>
                                <TouchableOpacity style={style.cameraview} onPress={() => this.opencamera()}>
                                    <Icon name="camera" size={18} style={{ color: Colors.colormaincolour }} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <View style={style.textnameview}>
                            <Text style={style.textname}>ATUL SHARMA</Text>
                        </View>

                        <View style={style.textnameview}>
                            <Text style={style.textname}>IBM</Text>
                        </View>

                        <View style={style.lineview} />

                        <View style={style.ticketsview}>
                            <Text style={style.texttickettotal}>Total Tickets</Text>
                            <Text style={style.ticketno}>5</Text>
                        </View>
                        <View style={style.lineview2} />

                        <View style={style.ticketsview}>
                            <Text style={style.texttickettotal}>Working Tickets</Text>
                            <Text style={style.ticketno}>3</Text>
                        </View>
                        <View style={style.lineview2} />

                        <View style={style.ticketsview}>
                            <Text style={style.texttickettotal}>Solved Tickets</Text>
                            <Text style={style.ticketno}>13</Text>
                        </View>
                        <View style={style.lineview2} />

                        <View style={style.aboutmainview}>
<ScrollView>
                            <View style={style.abouttextview}>
                                <Text style={style.textabout}>About User</Text>
                            </View>
                            <View style={style.icontextview}>
                                <MaterialIcons name={'contact-page'} size={30} style={{ color: Colors.colormaincolour }} />
                                <Text style={style.textpersonal}>Personal Details</Text>
                            </View>
                            <View style={style.aboutphoneview}>
                                <Text style={style.emailtext} >Email id: {this.state.email}</Text>
                                <Text style={style.emailtext} >Phone Number: {this.state.number}</Text>
                            </View>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default Profile;