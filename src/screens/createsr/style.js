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
    pickerview:{
        width:'90%',
        // borderWidth:2,
        backgroundColor:'#cfcfcf',
        marginTop:10,
        color:Colors.colormaincolour
    },
    textallselect: {
        fontSize: 25,
        fontWeight: '500',
        color: Colors.colormaincolour,
        marginTop: 30
    },
    textinputall: {
        borderWidth: 1,
        width: '90%',
        paddingLeft:10,
        color: Colors.colormaincolour,
        marginTop: 10,
        padding: 8,
    },
    textspecialty:{
        fontSize: 25,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
    },
    circleview:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'white',
        borderWidth:1
    },
    textp1:{
        fontSize: 18,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
        marginHorizontal:10,

    },
    textclos:{
        fontSize: 18,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
        marginHorizontal:10,
    },
    textoracle:{
        fontSize: 18,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
    },
    yesnoview:{
        flexDirection:'row',
        marginTop:20
    },
    touchyesno:{
      flexDirection:'row',
      marginHorizontal:10,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonview:{
        width:'50%',
        padding:12,
        backgroundColor:'#007bff',
        marginVertical:30,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    buttontext:{
        color:Colors.colorwhite,
        fontSize:20,
        fontWeight:'bold'
    },
    specialityview:
    {flexDirection:'row',
    marginTop:20,
    alignItems:'center',
    width:'80%',
},
checkboxview:{
    flexDirection:'row',
    width:'90%',
    height:100,
    marginTop:30
}






})