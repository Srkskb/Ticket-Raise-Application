
import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput,Dimensions } from 'react-native';
import Colors from '../../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import CommonDropdown from '../../Components/CommonDropdown';
const { height, width } = Dimensions.get("window");
import FileCabinet2 from '../../Components/FileCabinet2';
import FileCab from '../../Components/FileCab';
import style from './style';
import axios from 'axios';
import FileCabi from '../../Components/FileCabi';
export default function Mlanguage({ navigation }) {
    const [studentsid, setStudentsid] = useState([])
    const [versionData, setVersionData] = useState([]);
    const [students, setStudents] = useState([])
    const [products, setProducts] = useState([])
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
  .then(result =>{
    console.log(result)
    var students=result.map(i=>i.name)
    setStudents(result)
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
    const getProducts=(item)=>{
      var products=students.filter(i=>i.name==item)
      console.log(products[0].products)
      setProducts(products[0].products)
    }
const AddVersion =(id)=>{
    var data = JSON.stringify({
        "SSdomainID": "10",
        "Product": products,
        "Name": studentId,
        "Type": "MS0"
      });

    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: 'https://bus.kibtechnologies.com/tickets-crm/api/V1/MasterSetupInsert/',
      headers: { 
        'Content-Type': 'Access-Control-Allow-Headers', 
        'Authorization': 'Bearer BSNHKOhsmkTYowokmamskM001GAT', 
        'Cookie': 'PHPSESSID=87528de06045fd51e0b77932464ac03a'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

const VersionList =()=>{

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer BSNHKOhsmkTYowokmamskM001GAT");
    myHeaders.append("Cookie", "PHPSESSID=87528de06045fd51e0b77932464ac03a");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://bus.kibtechnologies.com/tickets-crm/api/V1/MasterSetupGET/?type=MS1", requestOptions)
      .then(response => response.json())
      .then(result =>{
            console.log(result)
        setVersionData(result);
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
                <Text style={style.styletexthome}>Language</Text>
            </View>
            <View style={{ flex: 1, }}>
                 <ScrollView>

                <View style={style.addview}>
                    <ScrollView>
                        <View style={style.addnewtextview}>
                            <Text style={style.textadd}>Add New Language</Text>
                        </View>
                        <View style={{marginHorizontal:20}} >
                        <Text style={style.textallselect}>Database Platform/Version</Text>
                            <CommonDropdown data={studentsid} onSelect={(item,index)=>{
                              console.log(item)
                              getProducts(item)
                            }}/>
                        </View>
      <View style={{marginHorizontal:20}} >
      <Text style={style.textallselect}>Products</Text>
                            <CommonDropdown data={products} onSelect={(item,index)=>{console.log(item)}}/>
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
                            <Text style={style.textadd}>All Language</Text>
                        </View>
                        </ScrollView>
                </View>

<View style={{paddingTop:width*0.1}}>
      <ScrollView
        style={{ paddingHorizontal: 10,paddingTop:10 }}
      >
        <View style={{ paddingHorizontal: 10 }}>
          {versionData === undefined ? (
            <>
              {/* <NoDataFound /> */}
            </>
          ) : (
            <>
             {versionData.map((list, index) => (
                <FileCabi key={index}
                Name={list.name}
                description={list.SSDomainProduct}
                Email={list.SSDomain}
                Date={list.date}
                onPressEdit={()=>
                    navigation.navigate("Meditservice", {
                      title: list,
                    })
                  }
                removePress={()=>deleteEvent(list.id)}
                />
                
              ))}
            </>
          )}
        </View>
        <View style={{paddingBottom:width*0.2}}>

</View>
      </ScrollView>
  
      </View>
                </ScrollView>
            </View>
        </View>
    )

}