import { StyleSheet } from "react-native";
import Colors from '../../utils/color'
import Fonts from "../../utils/fonts";
export default StyleSheet.create({
    textview: {
        backgroundColor:'grey',
        height:50,
        borderRadius:10,
        marginVertical:10,
        width:'80%',
        paddingLeft:20,
        opacity:0.8
    },
    textbutton:{
        fontSize:Fonts.extraLarge,
        color:Colors.colorwhite,
    },
    button:{
        backgroundColor:'#3b5998',
        padding:10,
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginTop:20,
        opacity:0.8
    }

   




})