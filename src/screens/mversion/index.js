import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Colors from '../../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import style from './style';
export default function Mversion({ navigation }) {

    const [selectedDatabaseP, setDatabaseP] = useState();
    const [selectedProduct, setProduct] = useState();
 const NameProduct =()=>{
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BSNHKOhsmkTYowokmamskM001GAT");
myHeaders.append("Cookie", "PHPSESSID=6a3d271223f79d67db893beea57b35f6");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://bus.kibtechnologies.com/tickets-crm/api/V1/Service-Support-Domain/?full=all", requestOptions)
  .then(response => response.json())
  .then(result =>{ console.log(result)
    setDatabaseP(result)
})
  .catch(error => console.log('error', error));
 }


    const goback = () => {
        navigation.navigate('Mhome')
     };
     useEffect(() => {
        NameProduct();
        // navigation.addListener("focus", () => SupportDomin());
      }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.colormaincolour} />
            <View style={style.icimgview}>
                <TouchableOpacity style={{ zIndex: 999, }} onPress={() => goback()} >
                    <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite, }} />
                </TouchableOpacity>
                <Text style={style.styletexthome}>Versions</Text>
            </View>
            <View style={{ flex: 1, }}>
                 <ScrollView>

                <View style={style.addview}>
                    <ScrollView>
                        <View style={style.addnewtextview}>
                            <Text style={style.textadd}>Add New Version</Text>
                        </View>
                        <View style={{marginLeft:20}}>
                            <Text style={style.textallselect}>Database Platform/Version</Text>
                            <Picker
                                style={style.pickerview}
                                selectedValue={selectedDatabaseP}
                                onValueChange={(itemValue) =>
                                    
                                    setDatabaseP(itemValue)
                                    
                                }
                                >
                                
                                <Picker.Item label="Select One" value={setDatabaseP} />
                                {/* <Picker.Item label="" value="Microsoft" /> */}
                            </Picker>
                        </View>

                        <View style={{marginLeft:20}}>
                            <Text style={style.textallselect}>Products</Text>
                            <Picker
                                style={style.pickerview}
                                selectedValue={selectedProduct}
                                onValueChange={(itemValue) =>
                                    setProduct(itemValue)
                                }>
                                <Picker.Item label="Window" value="Window" />
                                <Picker.Item label="Cloud" value="Cloud" />
                                <Picker.Item label="Teams" value="Teams" />
                            </Picker>
                        </View>

                           <View style={style.versionvalueview}>
                                <Text style={style.versiontext}>Version</Text>
                                <View style={style.flexpass}>
                                    <TextInput placeholder='' placeholderTextColor={Colors.colormaincolour}
                                        onChangeText={(email) => this.setState({ email: email })}
                                        style={style.textinputself}
                                    />
                                </View>
                            </View>

                        <TouchableOpacity style={style.addbutton}>
                            <Text style={style.textadd}>Add</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={style.allviewversion}>
                    <ScrollView>
                        <View style={style.addnewtextview}>
                            <Text style={style.textadd}>All Version</Text>
                        </View>

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

                        <View style={style.versionnameview}>
                            <Text style={style.versiontextname}>Version Name :</Text>
                            <Text style={style.versionnumtext}>  V.4</Text>
                        </View>

                        <View style={style.versionnameview}>
                            <Text style={style.versiontextname}>Date :</Text>
                            <Text style={style.versionnumtext}> 2022-12-30</Text>
                        </View>

                        <View style={style.versionnameview}>
                            <Text style={style.versiontextname}>Time :</Text>
                            <Text style={style.versionnumtext}>  12:39:52</Text>
                        </View>

                        <View style={style.Actionbtnmainview}>
                            <View>
                                <Text style={style.versiontextname}>Action :</Text>
                            </View>
                            <TouchableOpacity style={style.btnviewedit}>
                                <Text style={style.textadd}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.btnviewdelete}>
                                <Text style={style.textadd}>Delete</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>

                </ScrollView>
            </View>
        </View>
    )

}