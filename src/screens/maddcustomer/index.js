import React, { useState } from "react";
import {View, Text, Dimensions, StatusBar, StyleSheet, TouchableOpacity, ScrollView, TextInput} from "react-native";
import style from "./style";
import Colors from "../../utils/color";
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get("window");
export default function Maddcustomer({ navigation }) {

    const [selectedCompany, setSelectedCompany] = useState('Select one');

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
                    <Text style={style.styletexthome}>Add new Customer</Text>
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
                            selectedValue={selectedCompany}
                            onValueChange={(itemValue) =>
                                setSelectedCompany(itemValue)
                            }>
                            <Picker.Item label="IBM" value="IBM" />
                            <Picker.Item label="ORACLE" value="ORACLE" />
                        </Picker>
                    </View> 

                    <View>
                        <Text style={style.textallselect}>Customer Manager Name</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Customer Manager Email id</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Service/Support Domain</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedCompany}
                            onValueChange={(itemValue) =>
                                setSelectedCompany(itemValue)
                            }>
                            <Picker.Item label="Microsoft" value="Microsoft" />
                        </Picker>
                    </View> 

                    <View>
                        <Text style={style.textallselect}>Products</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedCompany}
                            onValueChange={(itemValue) =>
                                setSelectedCompany(itemValue)
                            }>
                            <Picker.Item label="Window" value="Window" />
                            <Picker.Item label="Cloud" value="Cloud" />
                            <Picker.Item label="Teams" value="Teams" />
                        </Picker>
                    </View> 

                    <View>
                        <Text style={style.textallselect}>Activate / Deactivated Customer</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedCompany}
                            onValueChange={(itemValue) =>
                                setSelectedCompany(itemValue)
                            }>
                            <Picker.Item label="Select-one" value="Select-one" />
                            <Picker.Item label="Activate" value="Activate" />
                            <Picker.Item label="Deactivate" value="Deactivate" />
                        </Picker>
                    </View> 

                    <TouchableOpacity style={style.buttonview}>
                        <Text style={style.buttontext}>Create</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


        </View>


    );
}
