import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({


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
        fontSize: 25,
        textAlign: 'center',
        marginLeft: -30,
        color: Colors.colorwhite
    },
    textfeedback: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 30,
        color: Colors.colormaincolour,
        marginVertical: 20
    },
    textinputself: {
        paddingHorizontal: 20,
        borderWidth: 1,
        color: Colors.colormaincolour,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        borderColor: Colors.colormaincolour,
        fontWeight: 'bold',
        marginVertical: 10
    },
    textinputfeedback: {
        fontWeight: 'bold',
        textAlignVertical: 'top',
        paddingHorizontal: 20,
        paddingLeft: 10,
        borderRadius: 15,
        borderColor: Colors.colormaincolour,
        borderWidth: 1,
        color: Colors.colormaincolour,
        marginHorizontal: 20,
        marginVertical: 10
    },
    submitbutton: {
        marginTop: 20,
        borderWidth: 1,
        padding: 12,
        backgroundColor: Colors.colormaincolour,
        borderRadius: 15,
        width: '50%',
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    textsubmit: {
        fontSize: 18,
        color: Colors.colorwhite,
        fontWeight:'bold'
    }


})