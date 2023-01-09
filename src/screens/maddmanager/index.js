import React, { useState } from "react";
import { View, Text, Dimensions, StatusBar, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import style from "./style";
import Colors from "../../utils/color";
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get("window");
export default function Maddmanager({ navigation }) {

    const [isssdomain, setssdomain] = useState();
    const [isspname, setspname] = useState();
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
    const [isMaster, setmaster] = useState(false);

    const goBack = () => {
        navigation.navigate('Mhome')
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.colormaincolour} />
            <View style={style.icimgview}>
                <TouchableOpacity style={{ zIndex: 999, }} onPress={goBack} >
                    <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite }} />
                </TouchableOpacity>
                <Text style={style.styletexthome}>Add new manager</Text>
            </View>
            <View style={{ flex: 1, }}>
                <ScrollView style={{ marginLeft: 30 }}>

                    <View>
                        <Text style={style.textallselect}>Select Service/Support Domain</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={isssdomain}
                            onValueChange={(itemValue) =>
                                setssdomain(itemValue)
                            }>
                            <Picker.Item label="Select one" value="Select one" />
                            <Picker.Item label="Microsoft" value="Microsoft" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Select Product Name</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={isspname}
                            onValueChange={(itemValue) =>
                                setspname(itemValue)
                            }>
                            <Picker.Item label="Window" value="Window" />
                            <Picker.Item label="Cloud" value="Cloud" />
                            <Picker.Item label="Teams" value="Teams" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Team Name</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>First Name</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Last Name</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Phone Number</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Username</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Email ID</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Priority</Text>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> (P1) Complete loss of service</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isServer}
                                onValueChange={setserver}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> (P2) Server loss of service</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isMinor}
                                onValueChange={setminor}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> (P3) Minor loss of service</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isLoss}
                                onValueChange={setloss}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> (P4) No loss of service</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Menu Show</Text>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isProduct}
                                onValueChange={setproduct}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Products View</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isService}
                                onValueChange={setservice}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Service/Support</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isUser}
                                onValueChange={setuser}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> User</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isTicket}
                                onValueChange={setticket}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Tickets</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Personal Use</Text>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isSupport}
                                onValueChange={setsupport}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Support Team</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isName}
                                onValueChange={setname}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Change Setting like name,email etc...</Text>
                        </View>
                        <View style={style.checkboxContainer}>
                            <CheckBox
                                value={isMaster}
                                onValueChange={setmaster}
                                style={style.checkbox}
                            />
                            <Text style={style.labeltext}> Master Data</Text>
                        </View>
                       
                    </View>

                    <View>
                        <Text style={style.textallselect}>Select Action</Text>
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
                        <Text style={style.buttontext}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


        </View>


    );
}
