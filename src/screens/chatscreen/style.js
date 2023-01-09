import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({

    icimgview: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colormaincolour,
        padding: 8
    },
    styletexthome: {
        fontWeight: 'bold',
        width: '95%',
        fontSize: 25,
        textAlign: 'center',
        marginLeft: -30,
        color: Colors.colorwhite
    },
    secview: {
        flex: 1
    },
    flexpass: {
        flexDirection: 'row',
        backgroundColor: Colors.colorwhite,
        width: '95%',
        borderRadius:50,
        alignSelf: 'center',
        borderWidth:1,
        borderColor: Colors.colormaincolour,
        position:'absolute',
        bottom:0,
        marginVertical:10
    },
    textinputself: {
        width: '65%',
        marginLeft: 20,
        fontSize: 15,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
    },
    iconset: {
        color: Colors.colorBlack,
        marginHorizontal:15,

    },
    icontwoview:{
        flexDirection:'row',
       width:'30%',
       justifyContent:'center',
       alignItems:'center'
    }




})