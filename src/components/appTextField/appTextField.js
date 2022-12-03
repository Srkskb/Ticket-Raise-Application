import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


export default function AppTextField(props) {
    const { title, buttonPressed, type, containerStyle, disable } = props
    return (
        <View style={[styles.textInputView]}>
            <FloatingLabelInput
                label={'label'}
                // isPassword
                // togglePassword={show}
                // value={cont}
                // onChangeText={value => setCont(value)}
                // customShowPasswordComponent={<Text>Show</Text>}
                // customHidePasswordComponent={<Text>Hide</Text>}
            />
            </View>
            )

}

const styles = StyleSheet.create({
    textInputView: {
        borderColor: 'rgba(202, 202, 201, 1)',
        borderWidth: 2,
        marginTop: widthPercentageToDP(1.04),
        height: heightPercentageToDP(7),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

            })