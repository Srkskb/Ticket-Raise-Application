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
    imageview: {
        alignItems: 'center',
        marginTop: 20,
    },
    loginview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    textlogin: {
        color: Colors.colormaincolour,
        fontSize: 40,
        fontWeight: 'bold'
    },
    textsign: {
        color: Colors.colorwhite,
        fontSize: 20,
        marginTop: 20
    },
    flexpass: {
        flexDirection: 'row',
        backgroundColor: Colors.colorwhite,
        width: '80%',
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
        borderWidth: 0.8,
        borderColor: Colors.colorred
    },
    textinputself: {
        width: '80%',
        marginLeft: 20,
        fontSize: 15,
        color: Colors.colorred,
        fontWeight: 'bold'
    },
    iconset: {
        color: Colors.colorBlack,
        width: '10%',
        alignSelf: 'center',
        marginRight: 30
    },
    button: {
        // backgroundColor: Colors.colorred,
        padding: 15,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textcontnue: {
        color: Colors.colorwhite,
        fontSize: 20,
        fontWeight: 'bold'
    },
    forgotview: {
        marginVertical: 25,
        alignItems:'flex-end',
        marginRight:70
    },
    signinview: {
        marginVertical: 50,
        alignItems: 'center'
    }





})