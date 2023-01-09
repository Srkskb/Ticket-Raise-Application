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
    addview: {
        width:'20%',
        height:70,
        backgroundColor:Colors.colorgrey,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10

    },
    allviewversion:{
        width: '95%',
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 10,
          marginLeft:20

    },
    textallselect: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.colormaincolour,
        marginTop: 30
    },
    textaddselect:{
        fontSize: 18,
        fontWeight: '500',
        color: Colors.colorwhite,
    },
    textinputall: {
        borderWidth: 1,
        width: '90%',
        paddingLeft:10,
        color: Colors.colormaincolour,
        marginTop: 10,
        padding: 8,
    },
    searchmainview:{
        backgroundColor: Colors.colorwhite,
        width: '20%',
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 0.8,
        borderColor: Colors.colormaincolour,
        height:40,
        flexDirection:'row'
    },
    textinputsearch:{
        marginLeft: 10,
        fontSize: 15,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
    },
    iconset: {
        color: Colors.colorBlack,
        width: '15%',
        alignItems: 'center',
        justifyContent:'center',
    },
    textproduct:{
        fontSize: 18,
        fontWeight: '500',
        color: Colors.colormaincolour,
        marginTop: 10
    },
    searchmainview:{
        backgroundColor: Colors.colorwhite,
        width: '90%',
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 0.8,
        borderColor: Colors.colormaincolour,
        height:40,
        flexDirection:'row'
    },
    textinputsearch:{
        marginLeft: 10,
        fontSize: 15,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
    },
    iconset: {
        color: Colors.colorBlack,
        width: '15%',
        alignItems: 'center',
        justifyContent:'center',
    },
    btnview:{
        width:'70%',
        padding:8,
        backgroundColor:Colors.colorsky,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        alignSelf:'center',
        marginVertical:20
    }


    



})