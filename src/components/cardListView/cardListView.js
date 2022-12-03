
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Images } from '../../theme';


const CardListView = (props) => {

    const { selectedItem, selectable, index, buttonPressed, image, title } = props

    return (
        <TouchableOpacity onPress={() => { (buttonPressed) && buttonPressed() }} style={selectedItem == index ? styles.selectedcardContainer : styles.cardContainer}>
            <View style={styles.cardcontentView}>
                <Image resizeMode={'contain'} source={image} style={styles.image}></Image>
                <Text style={selectedItem == index ? styles.selectedtitle : styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: widthPercentageToDP((27 / 375) * 100),
        height: heightPercentageToDP((59 / 812) * 100),
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        borderRadius: 15,
        marginBottom: heightPercentageToDP((19 / 812) * 100),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.84,
        elevation: 5,
        marginTop: 5
    },
    selectedcardContainer: {
        marginHorizontal: widthPercentageToDP((27 / 375) * 100),
        height: heightPercentageToDP((59 / 812) * 100),
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#90CDD1",
        borderWidth: 0.5,
        borderColor: '#90CDD1',
        borderRadius: 15,
        marginBottom: heightPercentageToDP((19 / 812) * 100),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.48,
        shadowRadius: 4.84,
        elevation: 5,
        marginTop: 5
    },
    cardcontentView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: heightPercentageToDP((40 / 812) * 100),
        marginHorizontal: widthPercentageToDP((31 / 375) * 100)
    },
    image: {
        width: widthPercentageToDP((37 / 375) * 100),
        height: widthPercentageToDP((37 / 375) * 100),
        marginRight: 10
    },
    title: {
        fontSize: 15,
        color: '#252529',
        fontWeight: "normal",
    },
    selectedtitle: {
        fontSize: 15,
        color: '#90CDD1',
        fontWeight: "normal",
    }
})
export default CardListView

