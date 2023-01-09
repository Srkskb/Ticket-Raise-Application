import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({

    mainview: {
        backgroundColor: Colors.colorwhite,
        flex: 1
    },
    secview: {
        flex: 1,
    },
    imageview: {
        alignItems: 'center',
        marginTop: 20,
    },
    loginview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    textlogin: {
        color: Colors.colormaincolour,
        fontSize: 40
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
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.colorred
    },
    iconset: {
        color: Colors.colorBlack,
        width: '10%',
        alignSelf: 'center',
        alignItems:'center',
    },
    button: {
        // backgroundColor: Colors.colorred,
        padding: 15,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    textcontnue: {
        color: Colors.colorwhite,
        fontSize: 20,
        fontWeight: 'bold'
    },
    forgotview: {
        marginVertical: 30,
        alignItems: 'center'
    },
    signinview: {
        marginVertical: 50,
        alignItems: 'center'
    }





})