import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/color";
import { Remove, Edit, ViewButton } from "./buttons";
import { Feather } from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export default function FileCabina({
  access,
  Name,
  description,
  Email,
  Date,
  removePress,
  onPress,
  onPressEdit,
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.right_side}>
          <View style={styles.arrow_container}>
            <Text style={styles.head_text}> Supported Platform : {Name}</Text>
            <Text style={styles.status_text}>{access}</Text>
          </View>
        </View>
      </View>
      <View style={{padding:10}}>
            <Text style={styles.description}>Product : {description}</Text>
            </View>
            <View style={{padding:10}}>
            <Text style={styles.description}> Supported Domain : {Email}</Text>
            </View>
            <View style={{padding:10}}>
            <Text style={styles.description}> Date: {Date}</Text>
            </View>
      <View style={styles.viewbutton}>
        {/* <Edit onPress={onPressEdit} /> */}
        <View style={{justifyContent:'space-around'}}>
          <TouchableOpacity onPress={onPressEdit}>
          <Text style={{fontSize:20,fontWeight:'500',borderRadius:10,borderWidth:1,textAlign:'center',
          paddingHorizontal:10,backgroundColor:"#007bff",borderColor:"#007bff",color:"#ffffff"}}>
            Edit
          </Text>
          </TouchableOpacity>
        </View>
       
        <View style={{ width: 40 }}></View>
        {/* <ViewButton
          title={"View Document"}
          color={color.white}
          backgroundColor={color.purple}
          fontFamily={"Montserrat-Bold"}
          onPress={onPress}
        /> */}
        <View style={{ width: 60 }}></View>

        {/* <Remove onPress={removePress} /> */}
        <View style={{justifyContent:'space-around'}}>
          <TouchableOpacity onPress={removePress}>
        <Text style={{fontSize:20,fontWeight:'500',borderRadius:10,borderWidth:1,textAlign:'center',
          paddingHorizontal:10,backgroundColor:"#821113",borderColor:"#821113",color:"#ffffff"}}>
            Delete
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.colorpurple,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  left_side: {
    width: "10%",
  },
  right_side: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text_container: {
    width: "90%",
    alignSelf: "flex-end",
    paddingHorizontal: 10,
  },
  description_text: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    width: "100%",
  },
  head_text: {
    fontSize: 16,
    color: colors.colorpurple,
    fontFamily: "Montserrat-Bold",
  },
  status_text: {
    color: colors.colorpurple,
    fontSize: 14,
    alignSelf: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  viewbutton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    flexDirection: "row",
  },
  arrow_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  containers: {
    borderWidth: 1,
    borderColor: colors.purple,
    flexDirection: "row",
    borderRadius: 3,
    alignItems: "center",
    padding: 5,
    justifyContent: 'center',

  },
  edit_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 5,
    color: colors.purple,
    marginLeft: 5,
  },
});
