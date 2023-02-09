import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput,Dimensions } from 'react-native';
import Colors from '../../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import CommonDropdown from '../../Components/CommonDropdown';
const { height, width } = Dimensions.get("window");
import FileCabinet2 from '../../Components/FileCabinet2';
import style from './style';
export default function Mversion({ navigation }) {
    const [studentsid, setStudentsid] = useState([])
    const [versionData, setVersionData] = useState([]);
    const [students, setStudents] = useState([])
    const [studentId, setStudentId] = useState('')
    const [version ,setVersion]=useState("")
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
    // var students=result.data.map(i=>i.name)
    setStudents(result.data)
    setStudentsid(students)
})
  .catch(error => console.log('error', error));
 }


    const goback = () => {
        navigation.navigate('Mhome')
     };
     useEffect(() => {
        NameProduct();
        VersionList();
        // navigation.addListener("focus", () => SupportDomin());
      }, []);

      const studentid=(name)=>{
        var id=students.filter(i=>i.name==name).map(i=>i.id)
        console.log(id)
        if(id.length>1){
          setStudentId(id[0])
        }else{
          setStudentId(id)
        }
    }
const AddVersion =()=>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "Access-Control-Allow-Headers");
myHeaders.append("Authorization", "Bearer BSNHKOhsmkTYowokmamskM001GAT");
myHeaders.append("Cookie", "PHPSESSID=575b06676760eabcc859d39d2a4cd127");

var raw = "{\r\n\"SSdomainID\": \"10\",\r\n\"Product\": \"DatabaseS\",\r\n\"Name\": \"Oracle 10g R1(10.1.0.2)S\",\r\n\"Type\": \"MS0\"\r\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://bus.kibtechnologies.com/tickets-crm/api/V1/MasterSetupInsert/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

const VersionList =()=>{

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BSNHKOhsmkTYowokmamskM001GAT");
myHeaders.append("Cookie", "PHPSESSID=575b06676760eabcc859d39d2a4cd127");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://bus.kibtechnologies.com/tickets-crm/api/V1/MasterSetupGET/?type=MS0", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
    setVersionData(result.data);
})
  .catch(error => console.log('error', error));
}

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
                        <View style={{marginHorizontal:20}} >
                        <Text style={style.textallselect}>Database Platform/Version</Text>
                            <CommonDropdown  onSelect={(item,index)=>{studentid(item)}}/>
                        </View>
      <View style={{marginHorizontal:20}} >
      <Text style={style.textallselect}>Products</Text>
                            <CommonDropdown  onSelect={(item,index)=>{studentid(item)}}/>
                        </View>
                                  <View style={{marginHorizontal:20}} >
                                  <Text style={style.versiontext}>Version</Text>
                                  <View style={{borderWidth:1,borderRadius:5,backgroundColor:"#FFFFFF",borderColor:"#D4E1F4"}}>
                                  <TextInput placeholder='' placeholderTextColor={Colors.colormaincolour}
                                        onChangeText={(text) => setVersion(text)}
                                        value={version}
                                        style={style.textinputself}
                                    />
                                    </View>
                        </View>

                        <TouchableOpacity style={style.addbutton} onPress={AddVersion}>
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
                                    <Feather name={'search'} size={22} style={{ color: Colors.colormaincolour }}
                                      onPress={() => console.log(versionData)}
                                    
                                    />
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