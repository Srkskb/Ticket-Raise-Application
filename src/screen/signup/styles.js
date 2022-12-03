import { StyleSheet } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    title: {
        marginTop: heightPercentageToDP((27 / 812) * 100),
        fontSize: 28,
        color: '#252529',
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    },
    horiZontalInputView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: heightPercentageToDP((49 / 812) * 100),
    },
    des: {
        marginTop: heightPercentageToDP((34 / 812) * 100),
        marginHorizontal: widthPercentageToDP((30 / 375) * 100),
        fontSize: 13,
        color: '#96969B',
        fontFamily:'Poppins-Regular',
        textAlign: 'center'
    },
    inputField: {
        marginTop: 100
    },
    textinputView: {
        marginTop: heightPercentageToDP((15 / 812) * 100),
        borderRadius:10,
        borderWidth:1,
        marginHorizontal:20
    },
    topField: {
        marginVertical: heightPercentageToDP((10 / 812) * 100)
    },
    button: {
        marginTop:10,
        width:"60%"
    },
    input: {
        width: widthPercentageToDP((170 / 400) * 100),
        borderRadius:10,
        borderWidth:0.5
    },
    root:{
        marginTop:5,
        fontSize: 15,
        color: '#252529',
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    },
})

export default styles;
