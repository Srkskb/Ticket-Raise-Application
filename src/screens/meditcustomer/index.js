import React, { useState } from "react";
import { View, Text, Dimensions, StatusBar, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import style from "./style";
import Colors from "../../utils/color";
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get("window");
export default function Meditcustomer({ navigation }) {

    const [isssdomain, setssdomain] = useState();
    const [isspname, setspname] = useState();
    const [issmname, setsmname] = useState();
    const [isaction, setaction] = useState();
    const [isSelected, setSelection] = useState(false);
    const [isServer, setserver] = useState(false);
    const [isMinor, setminor] = useState(false);
    const [isLoss, setloss] = useState(false);
    const [isProduct, setproduct] = useState(false);
    const [isService, setservice] = useState(false);
    const [isUser, setuser] = useState(false);
    const [isTicket, setticket] = useState(false);
    const [isSupport, setsupport] = useState(false);
    const [isName, setname] = useState(false);

    const goBack = () => {
        navigation.navigate('Mcustomer')
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.colormaincolour} />
            <View style={style.icimgview}>
                <TouchableOpacity style={{ zIndex: 999, }} onPress={goBack} >
                    <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite }} />
                </TouchableOpacity>
                <Text style={style.styletexthome}>Edit Customer</Text>
            </View>
            <View style={{ flex: 1, }}>
                <ScrollView style={{ marginLeft: 30 }}>

                    <View>
                        <Text style={style.textallselect}>Customer Name</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Customer Location</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Customer Language</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Customer Time Zone</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={isaction}
                            onValueChange={(itemValue) =>
                                setaction(itemValue)
                            }>
                            <Picker.Item label="Select One" value="Select One" />
                            <Picker.Item label="Active" value="Active" />
                            <Picker.Item label="Inactive" value="Inactive" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Customer Manager Name</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}> Customer Manager Email id</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Service/Support Domain</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={isaction}
                            onValueChange={(itemValue) =>
                                setaction(itemValue)
                            }>
                            <Picker.Item label="Microsoft" value="Microsoft" />
                            <Picker.Item label="Microsoft" value="Microsoft" />
                            <Picker.Item label="Microsoft" value="Microsoft" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Service/Support Domain</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={isaction}
                            onValueChange={(itemValue) =>
                                setaction(itemValue)
                            }>
                            <Picker.Item label="Window" value="Window" />
                            <Picker.Item label="Cloud" value="Cloud" />
                            <Picker.Item label="Teams" value="Teams" />
                            <Picker.Item label="Window" value="Window" />
                            <Picker.Item label="Cloud" value="Cloud" />
                        </Picker>
                    </View>
                   
                    <View>
                        <Text style={style.textallselect}>Menu Show</Text>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Users</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isServer}
                                onValueChange={setserver}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Tickets</Text>
                        </View>
                    </View>

                  
                    <View>
                        <Text style={style.textallselect}>Activate / Deactivated Customer</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={isaction}
                            onValueChange={(itemValue) =>
                                setaction(itemValue)
                            }>
                            <Picker.Item label="Select One" value="Select One" />
                            <Picker.Item label="Active" value="Active" />
                            <Picker.Item label="Inactive" value="Inactive" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={style.buttonview}>
                        <Text style={style.buttontext}>Edit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


        </View>


    );
}
