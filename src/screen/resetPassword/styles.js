import { StyleSheet } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    title: {
        marginTop: heightPercentageToDP((27 / 812) / 100),
        fontSize: 28,
        color: '#252529',
        fontWeight: "bold",
        textAlign: 'center'
    },

    des: {
        marginTop: heightPercentageToDP((27 / 812) * 100),
        marginHorizontal: widthPercentageToDP((50 / 375) * 100),
        fontSize: 13,
        color: '#96969B',
        fontFamily:'Poppins-Medium',
        textAlign: 'center'
    },
    topField: {
        marginTop:30,
        width:'80%',
        borderWidth:1,
        borderRadius:10,
        alignSelf:"center"
        
    },
    buttonView: {
        marginTop: heightPercentageToDP((20 / 812) * 100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingHorizontal:widthPercentageToDP((28 / 175) * 100)
    }
})

export default styles;
