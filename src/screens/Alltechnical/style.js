import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({

    secondview: {
        flex: 1,
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
    searchmainview: {
        width: '100%',
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textinputsearch: {
        borderWidth: 1,
        width: '60%',
        height: 40,
        marginHorizontal: 15,
        borderRadius: 10,
        borderColor: Colors.colormaincolour,
        paddingLeft: 20,
        color: Colors.colormaincolour
    },
    textsearch: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.colorBlack,
        marginLeft: 30
    },
    boxview:{
        width:'90%',
        borderWidth:1,
        borderColor:Colors.colormaincolour,
        height:150,
        alignSelf:'center',
        marginTop:30,
        borderRadius:20,
    },
    titlebtnview:{
        width:'100%',
        height:40,
        marginTop:10,
        alignSelf:'center',
        flexDirection:'row',
    },
    titleview:{
        width:'30%',
        height:40,
        justifyContent:'center',
        marginLeft:10
    },
    texttitle:{
        fontSize:15,
        fontWeight:'bold',
        color:Colors.colormaincolour
    },
    textviewsr:{
        fontSize:15,
        fontWeight:'bold',
        color:Colors.colorwhite
    },
    btnview:{
        width:'70%',
        height:40,
       justifyContent:'flex-end',
       alignItems:'flex-end'
    },
    touchbtn:{
        width:'45%',
        padding:5,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginRight:20
    },
    touchbtnclose:{
        width:'45%',
        padding:5,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginRight:20
    },
    touchbtnreopen:{
        width:'45%',
        padding:5,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginRight:20
    },
    ticketidview:{
        width:'100%',
        height:40,
    },
    tickettextview:{
        width:'100%',
        height:40,
        justifyContent:'center',
        marginLeft:10
    },
    chatbtn:{
        width:'25%',
        padding:5,
        backgroundColor:Colors.colormaincolour,
        marginLeft:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    }




})