import { StyleSheet } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    lineView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: heightPercentageToDP((10 / 812) * 100),
        marginHorizontal: widthPercentageToDP((50 / 375) * 100),
    },
    line: {
        height: 2,
        width: 130,
        backgroundColor: '#96969B',
        marginHorizontal: 10
    },
    title: {
        marginTop: heightPercentageToDP((27 / 812) / 100),
        fontSize: 28,
        color: '#252529',
        fontFamily: "Montserrat-Bold",
        textAlign: 'center'
    },
    topField: {
        marginTop:10,
        width:'90%',
        
    },
    bottomField: {
        marginTop: 10,
        width:'80%',
        borderWidth:1,
        borderRadius:10,
        
    },
    linkView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: widthPercentageToDP((28 / 375) * 100)
    },
    button: {
        marginTop:10,
        width:"60%"
    },
    mailButton: {
        marginTop: heightPercentageToDP((28 / 812) * 100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomFiel: {
        marginTop: 10,
        width:'80%',
        borderWidth:1,
        borderRadius:10,
        
    },
})

export default styles;
