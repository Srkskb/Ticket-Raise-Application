// import React, { Component } from 'react';
// import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput,FlatList } from 'react-native';
// import Colors from '../../utils/color';
// import AsyncStorage from '@react-native-community/async-storage';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';
// import style from './style';
// import axios from 'axios';
// class Mallservice extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             memail: '',
//             mname: '',
//             mbscountry: '',
//             SupportData:[],
//         }
//     }
//    GetSupportData =()=>{
//     var data = JSON.stringify({
//         "full": "all"
//       });

//       var config = {
//         method: 'get',
//         url: 'https://bus.kibtechnologies.com/tickets-crm/api/V1/Service-Support-Domain/?full=all',
//         headers: {
//           'Authorization': 'Bearer BSNHKOhsmkTYowokmamskM001GAT',
//           'Content-Type': 'application/json',
//           'Cookie': 'PHPSESSID=407ba2576aef513e33d3f650a0b23f89'
//         },
//         // data : data
//       };

//       axios(config)
//       .then(function (response) {
//         console.log(response.data);
//         // if(response.data.status==200){
//             this.setState({SupportData:response.data})
//         // }
//             // else{
//             // this.setState({SupportData:[]})
//         //   }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     }

//     componentDidMount = async () => {
//         const memail = await AsyncStorage.getItem('memail');
//         const mname = await AsyncStorage.getItem('mname');
//         const mbscountry = await AsyncStorage.getItem('mbscountry');
//         const mcustomfield = await AsyncStorage.getItem('mcustomfield');
//         this.setState({memail })
//         this.setState({ mname })
//         this.setState({ mbscountry })
//         this.GetSupportData()
//         console.log('userdata=======>', memail, mname, mcustomfield, mbscountry)

//     }

//     goback() {
//         this.props.navigation.navigate('Mhome')
//     }

//     render() {

//         return (
//             <View style={{ flex: 1 }}>
//                 <StatusBar backgroundColor={Colors.colormaincolour} />
//                 <View style={style.icimgview}>
//                     <TouchableOpacity style={{ zIndex: 999, }} onPress={() => this.goback()} >
//                         <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colorwhite, }} />
//                     </TouchableOpacity>
//                     <Text style={style.styletexthome}>All Service</Text>
//                 </View>
//                 <View style={{ flex: 1, }}>

//                     <View style={style.searchview}>
//                         <Text style={style.versiontext}>Search</Text>
//                         <View style={style.searchmainview}>
//                             <View style={{ width: '85%', }}>
//                                 <TextInput placeholder='Search' placeholderTextColor={Colors.colormaincolour}
//                                     onChangeText={(email) => this.setState({ email: email })}
//                                     style={style.textinputsearch}
//                                 />
//                             </View>
//                             <TouchableOpacity style={style.iconset} onPress={()=>console.log(this.state.SupportData)}>
//                                 <Feather name={'search'} size={22} style={{ color: Colors.colormaincolour }} />
//                             </TouchableOpacity>
//                         </View>
//                     </View>

//                     <View style={style.allviewversion}>
//                         <ScrollView>

//               {this.state.SupportData.map((list, index) => {
//                 return(
//                 <>
//                                   <View style={style.versionnameview}>
//                                   <Text style={style.versiontextname}>Name :</Text>
//                                   <Text style={style.versionnumtext}>  {this.state.mname}</Text>
//                               </View>

//                               <View style={style.versionnameview}>
//                                   <Text style={style.versiontextname}>Base Support Country :</Text>
//                                   <Text style={style.versionnumtext}> {this.state.mbscountry}</Text>
//                               </View>
//                               <View style={style.versionnameview}>
//                                   <Text style={style.versiontextname}>Support Email id :</Text>
//                                   <Text style={style.versionnumtext}>  {this.state.memail}</Text>
//                                </View>

//                               <View style={style.Actionbtnmainview}>
//                                   <View>
//                                       <Text style={style.versiontextname}>Products :</Text>
//                                   </View>
//                                   <TouchableOpacity style={style.btnviewtest}>
//                                       <Text style={style.textadd}>Tesing1</Text>
//                                   </TouchableOpacity>
//                                   <TouchableOpacity style={style.btnviewtest}>
//                                       <Text style={style.textadd}>Tesing2</Text>
//                                   </TouchableOpacity>

//                                   <TouchableOpacity style={style.btnviewtest}>
//                                       <Text style={style.textadd}>Tesing3</Text>
//                                   </TouchableOpacity>
//                               </View>

//                               <View style={style.Actionbtnmainview}>
//                                   <View>
//                                       <Text style={style.versiontextname}>Action :</Text>
//                                   </View>
//                                   <TouchableOpacity onPress={() => this.props.navigation.navigate('Meditservice')} style={style.btnviewedit}>
//                                       <Text style={style.textadd}>Edit</Text>
//                                   </TouchableOpacity>
//                                   <TouchableOpacity style={style.btnviewdelete}
//                                   onPress={()=>this.SupportData()}
//                                   >
//                                       <Text style={style.textadd}>Delete</Text>
//                                   </TouchableOpacity>
//                               </View>
//                               </>
//                         )})}

//                         </ScrollView>
//                     </View>

//                 </View>
//             </View>
//         )
//     }
// }

// export default Mallservice;
//import liraries
import React, {useEffect, useState, Component} from 'react';
import style from './style';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../utils/color';
import FileCabinet2 from '../../Components/FileCabinet2';

// create a component

export default function Mallservice(navigation) {
  const [fileCabinetData, setFileCabinetData] = useState([]);
  const SupportDomin = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer BSNHKOhsmkTYowokmamskM001GAT');
    myHeaders.append('Cookie', 'PHPSESSID=66b15abd24de432c57ced3a569e627e0');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://bus.kibtechnologies.com/tickets-crm/api/V1/Service-Support-Domain/?full=all',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setFileCabinetData(result.data);
      })

      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    SupportDomin();
    // navigation.addListener("focus", () => SupportDomin());
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.colormaincolour} />
      <View style={style.icimgview}>
        <TouchableOpacity
          style={{zIndex: 999}}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name={'arrow-back'}
            size={30}
            style={{color: Colors.colorwhite}}
          />
        </TouchableOpacity>
        <Text style={style.styletexthome}>All Service</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={style.searchview}>
          <Text style={style.versiontext}>Search</Text>
          <View style={style.searchmainview}>
            <View style={{width: '85%'}}>
              <TextInput
                placeholder="Search"
                placeholderTextColor={Colors.colormaincolour}
                onChangeText={email => this.setState({email: email})}
                style={style.textinputsearch}
              />
            </View>
            <TouchableOpacity
              style={style.iconset}
              onPress={() => console.log(setFileCabinetData())}>
              <Feather
                name={'search'}
                size={22}
                style={{color: Colors.colormaincolour}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        style={{ paddingHorizontal: 10 }}
      >
        <View style={{ paddingHorizontal: 10 }}>
          {fileCabinetData === undefined ? (
            <>
              {/* <NoDataFound /> */}
            </>
          ) : (
            <>
              {fileCabinetData.map((list, index) => (
                <FileCabinet2 key={index}
                  title={list.name}
                  description={list.location}
                  onPressEdit={() =>
                    navigation.navigate("Edit", {
                      
                    })
                  }
                  removePress={() =>deleteEvent(list.id)}
                />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
