import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({
    mainview: {
        flex: 1
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
    },
    bagmainview: {
        width: '95%',
        height: 200,
        backgroundColor: Colors.colorsky,
        marginTop:30,
        alignSelf: 'center',
        borderRadius:10
    },
    subadminmainview:{
        width: '95%',
        height: 200,
        backgroundColor: Colors.colorgreen,
        marginTop: 30,
        alignSelf: 'center',
        borderRadius:10
    },
    usermainview:{
        width: '95%',
        height: 200,
        backgroundColor: Colors.coloryellow,
        marginTop: 30,
        alignSelf: 'center',
        borderRadius:10
    },
    ticketmainview:{
        width: '95%',
        height: 200,
        backgroundColor: Colors.colorred,
        marginVertical: 30,
        alignSelf: 'center',
        borderRadius:10
    },
    icontextview: {
        height: 170,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textview: {
        marginLeft: 20,
    },
    iconview: {
        position: 'absolute',
        right: 20,

    },
    numtext:{
        fontSize:30,
        color:Colors.colorwhite,
        marginVertical:5,
        fontWeight:'bold'
    },
    numtextuser:{
        fontSize:30,
        color:Colors.colormaincolour,
        marginVertical:5,
        fontWeight:'bold'
    },
    textnew:{
        fontSize:20,
        color:Colors.colorwhite,
        fontWeight:'800'
    },
    textnewuser:{
        fontSize:20,
        color:Colors.colormaincolour,
        fontWeight:'800'
    },
    moreinfoview:{
    width:'100%',
    height:30,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    },
    textmoreinfo:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors.colorwhite
    },
    textmoreinfouser:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors.colormaincolour
    },

})