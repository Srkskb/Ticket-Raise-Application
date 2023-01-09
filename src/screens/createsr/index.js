import React, { useState } from "react";
import {
    View, Text, Dimensions, StatusBar, StyleSheet, TouchableOpacity, ScrollView,
    TextInput
} from "react-native";
import style from "./style";
import Colors from "../../utils/color";
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
const { height, width } = Dimensions.get("window");
export default function Createsr({ navigation }) {

    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedCompany, setSelectedCompany] = useState();
    const [selectedProductVersion, setProductVersion] = useState();
    const [selectedProductLanguage, setProductLanguage] = useState();
    const [selectedOperatingversion, setOperatingversion] = useState();
    const [selectedDatabaseV, setDatabaseV] = useState();
    const [selectedDatabaseP, setDatabaseP] = useState();
    const [selectedProblem, setProblem] = useState();
    const [selectedCloud, setCloud] = useState();


    const handleSignup = () => {
        alert = 'hello';
    };

    const goBack = () => {
       navigation.navigate('Home')
    };



    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.colormaincolour} />
            <View style={style.icimgview}>
                    <TouchableOpacity style={{ zIndex: 999, }} onPress={goBack} >
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite }} />
                    </TouchableOpacity>
                    <Text style={style.styletexthome}>Create Technical SR</Text>
                </View>
            <View style={{ flex: 1, }}>
                <ScrollView style={{ marginLeft: 30 }}>
                    
                    <View>
                        <Text style={style.textallselect}>Select Company</Text>
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
                        <Text style={style.textallselect}>Problem Summary</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Problem Description</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Error Codes</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View>
                        <Text style={style.textallselect}>Product</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedProduct}
                            onValueChange={(itemValue) =>
                                setSelectedProduct(itemValue)
                            }>
                            <Picker.Item label="IBM" value="IBM" />
                            <Picker.Item label="UAT" value="UAT" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Product Version</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedProductVersion}
                            onValueChange={(itemValue) =>
                                setProductVersion(itemValue)
                            }>
                            <Picker.Item label="14.1.1.0.0" value="14.1.1.0.0" />
                            <Picker.Item label="12.2.1.4.0" value="12.2.1.4.0" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Product Language</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedProductLanguage}
                            onValueChange={(itemValue) =>
                                setProductLanguage(itemValue)
                            }>
                            <Picker.Item label="Hindi" value="Hindi" />
                            <Picker.Item label="English" value="English" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Operating System/Version</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedOperatingversion}
                            onValueChange={(itemValue) =>
                                setOperatingversion(itemValue)
                            }>
                            <Picker.Item label="Linux x86" value="Linux x86" />
                            <Picker.Item label="Cloud" value="Cloud" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Databse/Version</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedDatabaseV}
                            onValueChange={(itemValue) =>
                                setDatabaseV(itemValue)
                            }>
                            <Picker.Item label="Berkeley - 18.1" value="Berkeley - 18.1" />
                            <Picker.Item label="Berkeley - 19.2" value="Berkeley - 19.2" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Database Platform/Version</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedDatabaseP}
                            onValueChange={(itemValue) =>
                                setDatabaseP(itemValue)
                            }>
                            <Picker.Item label="Linux x86" value="Linux x86" />
                            <Picker.Item label="Linux x36" value="Linux x36" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Problem Type</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedProblem}
                            onValueChange={(itemValue) =>
                                setProblem(itemValue)
                            }>
                            <Picker.Item label="Security" value="Security" />
                            <Picker.Item label="Installation" value="Installation" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Support Identifier</Text>
                        <TextInput multiline placeholder='Enter' placeholderTextColor={Colors.colormaincolour} style={style.textinputall} />
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={style.textspecialty}>Priority</Text>

                        <View style={style.specialityview}>
                            <TouchableOpacity onPress={handleSignup}>
                                <View style={style.circleview} />
                            </TouchableOpacity>
                            <Text style={style.textp1}>(P1)</Text>
                            <Text style={style.textclos}>Complete Loss of service</Text>
                        </View>

                        <View style={style.specialityview}>
                            <TouchableOpacity onPress={handleSignup}>
                                <View style={style.circleview} />
                            </TouchableOpacity>
                            <Text style={style.textp1}>(P2)</Text>
                            <Text style={style.textclos}>Server loss of Service</Text>
                        </View>

                        <View style={style.specialityview}>
                            <TouchableOpacity onPress={handleSignup}>
                                <View style={style.circleview} />
                            </TouchableOpacity>
                            <Text style={style.textp1}>(P3)</Text>
                            <Text style={style.textclos}>Minor loss of Service</Text>
                        </View>

                        <View style={style.specialityview}>
                            <TouchableOpacity onPress={handleSignup}>
                                <View style={style.circleview} />
                            </TouchableOpacity>
                            <Text style={style.textp1}>(P4)</Text>
                            <Text style={style.textclos}>No Loss of service</Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={style.textoracle}>Is Your Software running on Oracle Cloud Infrastructure</Text>
                        <View style={style.yesnoview}>
                            <TouchableOpacity style={style.touchyesno} onPress={handleSignup}>
                                <View style={style.circleview} />
                                <Text style={style.textclos}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.touchyesno} onPress={handleSignup}>
                                <View style={style.circleview} />
                                <Text style={style.textclos}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={style.textallselect}>Select Cloud</Text>
                        <Picker
                            style={style.pickerview}
                            selectedValue={selectedCloud}
                            onValueChange={(itemValue) =>
                                setCloud(itemValue)
                            }>
                            <Picker.Item label="Google Cloud" value="Google Cloud" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={style.buttonview}>
                        <Text style={style.buttontext}>Create SR</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


        </View>


    );
}
