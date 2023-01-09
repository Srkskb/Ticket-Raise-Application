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
        width: '95%',
        height: 230,
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.colormaincolour

    },
    allviewversion:{
        width: '95%',
        height: 270,
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: Colors.colormaincolour,
        borderWidth:1,
        borderColor:Colors.colormaincolour

    },
    addnewtextview: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorsky,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textadd: {
        color: Colors.colorwhite,
        fontSize: 15,
        fontWeight: 'bold'
    },
    versionvalueview:{
        marginTop:15,
        marginLeft:20
    },
    searchview:{
        marginTop:15,
        marginLeft:20,
        width:'100%'
    },
    versiontext:{
        color:Colors.colormaincolour,
        fontSize:17,
        fontWeight:'bold',
    },
    flexpass: {
        backgroundColor: Colors.colorwhite,
        width: '90%',
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 0.8,
        borderColor: Colors.colormaincolour,
        height:40
    },
    searchmainview:{
        backgroundColor: Colors.colorwhite,
        width: '70%',
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
    textinputself: {
        width: '100%',
        marginLeft: 20,
        fontSize: 15,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
    },
    addbutton:{
        marginVertical:20,
        width:'80%',
        padding:10,
        backgroundColor:Colors.colorsky,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    versionnameview:{
        marginTop:20,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    versiontextname:{
        fontSize:15,
        color:Colors.colormaincolour,
        fontWeight:'bold',
        marginLeft:20
    },
    versionnumtext:{
        fontSize:15,
        color:Colors.colormaincolour,
        fontWeight:'bold',
    },
    Actionbtnmainview:{
        marginTop:20,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    btnviewedit:{
        backgroundColor:Colors.colorsky,
        width:'30%',
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        borderRadius:10
    },
    btnviewtest:{
        backgroundColor:Colors.colorgreen,
        width:'20%',
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        borderRadius:10
    },
   






})