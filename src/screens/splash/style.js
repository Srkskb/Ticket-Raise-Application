import { StyleSheet } from "react-native";
import Colors from '../../utils/color'
import Fonts from "../../utils/fonts";
export default StyleSheet.create({

    textinput:{
        width:'80%',
        alignSelf:'center'
    },

    flexpass:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'80%',
        borderRadius:10,
        marginTop:20,
        alignSelf:'center'
     },

     iconset:{
         color:Colors.colorBlack,
         width:'10%',
         alignSelf:'center',
         marginRight:30
     },

     button:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
     },

     buttonview:{
        backgroundColor:'#282929',
        padding:12,
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        alignSelf:'center',
        borderRadius:10,
        marginTop:25,
        // opacity:0.5
     },
     textcrm:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
     }


   




})