import { View, Text, Image,StyleSheet } from "react-native";
import color from "../utils/color";
import SelectDropdown from "react-native-select-dropdown";
import React from "react";
const down_img = require("../images/down.png");
const Value = ["Data 1", "Data 2", "Data 3"];
export default function CommonDropdown({ label, ...props }) {
  return (
    <View>
         {label && <Text style={styles.label_text} {...props}>{label}</Text>}
      <View style={{ flexDirection: "row",marginBottom:20, ...props }}>
        <SelectDropdown
          data={Value}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          onSelect={(selectedItem, index) => {
          }}
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.text_button}
          rowTextStyle={styles.row_text}
          dropdownStyle={styles.dropdown_style}
          {...props}
        />
        <Image style={styles.downimg} source={down_img}></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    dropdown: {
      borderRadius: 8,
      width: "100%",
      borderWidth: 1,
      borderColor: "#D4E1F4",
      backgroundColor: "#FFFFFF",
    },
    label_text: {
      color: "#000000",
      fontSize: 13,
      fontFamily: "Montserrat-Regular",
      marginBottom: 5,
    },
    downimg: {
      position: "absolute",
      right: 10,
      // alignSelf:'center',
      height: 8,
      resizeMode: "contain",
      top: "40%",
    },
    text_button: {
      textAlign: "left",
      fontSize: 14,
      alignSelf: "center",
      justifyContent: "center",
      color: color.black,
      fontFamily: "Montserrat-Medium",
      marginLeft:-1
    },
    row_text:{
      fontSize: 16,
      alignSelf: 'center',
      justifyContent: 'center',
      color: 'black',
      fontFamily:'Montserrat-Medium'
    },
    dropdown_style:{
      borderRadius:10,
    }
  });

