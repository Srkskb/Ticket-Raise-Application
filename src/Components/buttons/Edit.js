import { View, Text, Image, TouchableOpacity } from "react-native";
import { buttonStyle } from "./buttonStyle";
import React from "react";
import colors from "../../utils/color";
import { Feather } from 'react-native-vector-icons/Feather';

export default function Edit({ ...props }) {
  return (
    <View style={{ width: "30%" }}>
      <TouchableOpacity {...props}>
        <View style={buttonStyle.container}>
        <Feather name="edit" size={20} color={colors.colorbutton} />
          <Text style={buttonStyle.edit_text}>Edit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
