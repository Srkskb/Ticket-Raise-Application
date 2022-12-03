import { Text, View,SafeAreaView,Dimensions,ScrollView } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
export default class About extends Component {
  render() {
    return (
        <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
    
        <View style={{width:"100%",height:"8%",backgroundColor:'#dcdcdc',justifyContent:'center'}}>
<View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>About Us</Text>
</View>
</View>
<ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
    <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>

{"1*  Founded in Toronto in 2009, KM Numismatics is a rare coin dealership with a particular focus on world coins of exceptional quality."}


</Text>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{"2*  We also have an Ebay store with an excellent 100% feedback all these years (ebay ID - cj_fam, store name KM Numismatics)."}
</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{"3* We only deal in high-quality graded coins graded by NGC, PCGS and Anacs only. As most of the coin business is done online now, it becomes easier for both the buyer and seller if the coin is graded. Our aim is to serve clients who wish to buy and sell in a friendly and professional setting. "}
</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{"4* We also have our own live Auction Platform where we conduct online auction from time to time. The unique feature of our auctions is that there is no “Buyer’s Premium.” The buyers have to pay the “Hammer Price” only. "}
</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{"5* We also have our own live Auction Platform where we conduct online auction from time to time. The unique feature of our auctions is that there is no “Buyer’s Premium.” The buyers have to pay the “Hammer Price” only.  "}
</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{"6*  KM Numismatics president, Khaild Mohammad, gained his numismatic experience as a collector. He started collecting around 2005 and has a very good knowledge of grades and has dealt with many high-value rare coins during these years. We believe in “Quality” rather than “Quantity” and feel that good quality coins would retain their value better than the coins that are not in a mint state. "}
</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{"7*  Mr. Mohammad has also helped form a number of significant private collections, mainly of British India proofs and patterns as well as Mughal Coins. Some rarities that he has handled for clients include a British India 1835 Proof Two Mohur in NGC PF66 Cameo, an 1878 British India Half Anna in Gold NGC PF64, Egypt ½ Birr in Gold PCGS MS64, 1914-S 5 Dollar in BU condition and many other British India and world rarities. "}
</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{"8*  We are always looking for good quality coins for our site as well as good quality coins as consignment for our auctions. If you would like to sell any of your rarities through us, please send us an email and someone will get in touch with you soon. "}
</Text>
</View>
<View style={{justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:"500",color:"#000"}}>
{" We look forward to assisting you. "}
</Text>
</View>
        </View>

    </View>
    <View style={{paddingBottom:width*0.1}}>

</View>

    </ScrollView>
    </SafeAreaView>
    )
  }
}