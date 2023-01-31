import { View, Text, TouchableOpacity } from "react-native";
import { buttonStyle } from "./buttonStyle";
import React from "react";
import colors from "../../utils/color";
import { AntDesign } from 'react-native-vector-icons/AntDesign';

export default function Remove({ ...props }) {
  return (
    <View style={{width:'30%'}}>
      <TouchableOpacity {...props}>
        <View style={[buttonStyle.container,{borderColor:colors.colorsky}]}>
          <AntDesign name="delete" size={20} color={colors.colorgreen}/>
          <Text style={[buttonStyle.edit_text,{color:colors.coloryellow}]}>Remove</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

