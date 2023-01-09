import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({

    barsview: {
        marginTop: 10,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    maintouchview: {
        width: 138,
        height: 138,
        padding: 2,
        borderRadius: 80,
        marginTop: 50,
        backgroundColor: Colors.colormaincolour,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    cameraview: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -15,
        top: 15
    },
    imageview: {
        backgroundColor: Colors.colormaincolour,
        width: 130,
        height: 130,
        borderRadius: 70,
    },
    textnameview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textname: {
        fontSize: 20,
        color: Colors.colormaincolour,
        fontWeight: 'bold'
    },
    lineview: {
        width: '90%',
        height: 0.5,
        alignSelf: 'center',
        backgroundColor: Colors.colormaincolour,
        marginTop: 50
    },
    lineview2: {
        width: '90%',
        height: 0.5,
        alignSelf: 'center',
        backgroundColor: Colors.colormaincolour,
        marginTop: 10
    },
    ticketsview: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center'
    },
    texttickettotal: {
        position: 'absolute',
        left: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.colormaincolour,
        marginTop: 10
    },
    ticketno: {
        position: 'absolute',
        right: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.colormaincolour,
        marginTop: 10
    },
    aboutmainview: {
        width: '90%',
        height: 200,
        borderWidth: 0.5,
        marginVertical: 50,
        alignSelf: 'center',
        borderColor: Colors.colormaincolour

    },
    abouttextview: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        paddingLeft: 30
    },
    textabout: {
        color: Colors.colorwhite,
        fontSize: 20,
    },
    icontextview: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center'
    },
    textpersonal: {
        fontSize: 20,
        color: Colors.colormaincolour,
        fontWeight: 'bold',

    },
    aboutphoneview: {
        marginVertical: 30,
        marginLeft: 10
    },
    emailtext: {
        fontSize: 15,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
        alignItems: 'center'
    }

})