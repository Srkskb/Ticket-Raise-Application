import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


export default function AppButton(props) {
    const { title, image, buttonPressed, disable, addStyle, btnWithImage, btnColor } = props
    /**
       *  This component display the App button with app theme color throughout the application.
    */
    return (
        <TouchableOpacity disabled={disable} style={[{ alignItems: 'center', justifyContent: 'center', backgroundColor: disable ? 'rgba(144, 205, 209, 0.4)' : btnColor, marginTop: heightPercentageToDP((20 / 812) * 100), marginHorizontal: widthPercentageToDP((53 / 375) * 100), height: 40, borderRadius: 10, flexDirection: 'row' }, addStyle]} onPress={() => { (buttonPressed) && buttonPressed() }}>
            {btnWithImage ?
                <>
                    <Image source={image} style={styles.iconImage}></Image>
                    <Text style={styles.skipText}>{title}</Text>
                </>
                :
                <Text style={styles.skipText}>{title}</Text>
            }
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    iconImage: {
        height: 15,
        width: 15,
        marginRight: 5
    },
    button: {
    },
    skipText: {
        fontSize: 15,
        color: '#FFFFFF',
    },

})