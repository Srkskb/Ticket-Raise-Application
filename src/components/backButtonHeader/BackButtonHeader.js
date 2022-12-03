import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../theme/index';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const BackButtonHeader = ({ title, backPressed }) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => backPressed()} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
            <Image style={styles.backImage} source={Images.backIcon} resizeMode={'contain'} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        width: "100%",
        // paddingBottom: hp(2),
        backgroundColor: "#FFFFFF",
    },
    backImage: {
        marginLeft: 16,
        marginTop: (Platform.OS == 'ios') ? getStatusBarHeight(true) + 16 : 16,
        height: 28,
        width: 28
    },
    title: {
    }
})
export default BackButtonHeader;
