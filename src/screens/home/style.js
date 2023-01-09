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
    imgmainview: {
        width: '100%',
        height: 250,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secimageview: {
        width: 250,
        height: 250,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    handimgview:{
        width:200,
        height:200,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50
     },
    barsview: {
        marginTop: 10,
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
        fontSize: 25,
        textAlign: 'center',
        marginLeft: -30,
        color: Colors.colorwhite
    }



})