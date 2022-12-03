import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'


export default function LinkText(props) {
    const { title, linkPressed, containerStyle, testId, textWithImage, linkText } = props
    return (
        <TouchableOpacity onPress={() => { (linkPressed) && linkPressed() }} style={[textWithImage ? styles.containerImage : styles.container, containerStyle]}>
            <Text style={[styles.bold, linkText]}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    bold: {
        fontSize: 13,
        color: '#252529',
        // textAlign: 'center'
        fontWeight: "bold",
    },
    container: {
        marginTop: heightPercentageToDP(2.85),
        alignSelf: 'flex-end',
    },
    containerImage: {
        alignSelf: 'flex-end',
    }
})