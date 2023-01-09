import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({
    mainview: {
        flex: 1
    },
    secview: {
        flex: 1,
        backgroundColor: Colors.colorwhite
    },
    barsview: {
        width: '20%',
        paddingLeft: 20
    },

    icimgview: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colormaincolour,
        padding: 10
    },
    styletexthome: {
        fontWeight: 'bold',
        width: '95%',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: -30,
        color: Colors.colorwhite
    },
    textmainview: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 20
    },
    textmainself: {
        fontSize: 20,
        color: Colors.colormaincolour,
        textAlign: 'center',
        fontWeight: '700'
    },
    textallselect: {
        fontSize: 25,
        fontWeight: '500',
        color: Colors.colormaincolour,
    },




})