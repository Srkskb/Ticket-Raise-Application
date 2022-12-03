import { Text, View,SafeAreaView,Dimensions,ScrollView,StyleSheet,TouchableOpacity,Animated } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import { TabView, SceneMap } from 'react-native-tab-view';
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
 <ScrollView style={{paddingHorizontal:width*0.03}}>
      
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
  General Condition of sale
</Text>
<Text style={{fontSize:width*0.04,color:"#000",fontWeight:'500'}}>
  All PRICES ARE IN USD
</Text>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
  
1. This is a live auction conducted by KM Numismatics.
 Bidding in the auction constitutes acceptance of 
 the KM Numismatics website Terms of Use, of which these Auctions Terms are a part.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
2. The property in this auction is offered for sale by KM Numismatics for itself and as agent for other consignors. We reserve the right to prohibit any bidder from participating in the auction, to reject any bid, to determine the opening price, to set bidding increments, to withdraw any lot, to bid on behalf of KM Numismatics, and to permit the consignor to bid on his own lots.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
3. The lots are offered at 10% buyer’s premium.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
4. All items are guaranteed genuine. Attribution, date, condition and other
 descriptions are the opinion of the cataloguer, and no warranty is expressed or
  implied. Please note that an auction sale is not an approval sale. 
  Lots may be returned only in the case of misdescription or lack of
   authenticity. Lots examined by the successful bidder prior to the 
   close of the sale may be returned only in the case of lack of 
   authenticity. Any claim of misdescription must be made within 
   5 days of receipt of material. Any claim of lack of authenticity must
    be made in writing by the original purchaser immediately after discovery 
    that an item is not authentic, and upon making such a claim the original
     purchaser must return the lot to KM Numismatics in the same condition 
     as at the time of the auction. Coins that have been
      encapsulated ("slabbed") by a grading and/or authentication 
      service may not be returned for any reason, including authenticity, 
      if they have been removed from the encapsulation ("slab"). If payment is
       made by credit card, rights of return are governed by these Auction
        Terms which supersede any rights of return promulgated by the card issuer.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
5. Invoices are due and payable immediately upon receipt. Interest and late fees of 2.0% per month, or at a highest rate permitted by law, whichever is less, from the date of the auction, shall be payable on invoices not settled within 30 days of the auction date. Payment may be made by check or bank wire. Credit cards (Visa or MasterCard) and Paypal payments will be accepted; credit card and Paypal payments will incur a charge of 4%. Payment by check must be made in US dollars ($) or equivalent Canadian Dollar (CAD) drawn on a US or Canadian bank. All successful bidders outside North America will be charged an additional $20 fee for bank charges that are the result of international wire transfer fees. KM Numismatics may reduce or compromise any charge or fee at its discretion.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
6.  US$ bank account for wire transfers will be provided by phone, fax or mail. An additional $20 fee will be payable for wire transfers received by KM Numismatics from banks outside the United States. Late fees of 2% or $25, whichever is greater, shall be payable on invoices not settled within 14 days. In addition, interest of 2% per month, or at the highest rate permitted by law, whichever is less, shall be payable on invoices not settled within 30 days.

</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
7. Estimates and bids are in US dollars ($US), and bids must be in even dollar ($) amounts. KM Numismatics places an estimate and an opening price on each lot. Estimates are intended as a guide only and not as a statement of opinion of value. Ordinarily the opening price is 40-50% of the estimate. KM Numismatics' live auction site software will execute bids on behalf of all bidders up to their maximum limit. Subject to the opening prices, bids will be executed at one bidding increment over the next highest bid. In the case of identical bids, the earliest bid wins. Once a bid is placed it may only be cancelled by KM Numismatics staff. Bidders are responsible for errors in bidding.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
8. Shipping charge will be added to the invoice according to the location of the buyer, shipping method as well as value of the item so that the buyers receive their items securely without any issues. KM Numismatics will try it’s best to accommodate all shipping requests in the best possible way. It will be buyer’s responsibility if any duties/taxes are levied at port of entry at buyer’s country.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
9. Bidders hereby waive any claim for incidental, consequential or exemplary damages arising from this auction. The sole remedy that any participant in the auction shall have for any claim or controversy arising out of the auction shall be a refund, without interest, of all or part of the purchase price paid by the participant.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
10. All rights granted by KM Numismatics or otherwise available to bidders and purchasers, under these Auction Terms or otherwise, are personal and may not be assigned or transferred to any other person or entity, whether by operation of law or otherwise. No third party may rely on any benefit or right conferred by these Auction Terms. Bidders acting as agents must disclose the agency in writing to KM Numismatics prior to the auction; otherwise rights are limited to the agent and are not transferable to the undisclosed principal.
</Text>
</View>
</View>
<View style={{paddingBottom:width*0.3}}>

</View>
    </ScrollView>

  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
 <ScrollView style={{paddingHorizontal:width*0.03}}>
      
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
  Terms Of Use
</Text>
<Text style={{fontSize:width*0.04,color:"#000",fontWeight:'500'}}>
  Updated April 25, 2020
</Text>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
THESE TERMS OF USE (THESE “TERMS OF USE”) DEFINE THE RELATIONSHIP BETWEEN AUCTION MOBILITY LLC (THE “COMPANY”, “WE”, “US” or “OUR” ) AND YOU, THE PERSON ACCESSING OUR AUCTION EXPERIENCE MANAGEMENT PLATFORM OVER THE WEB AT HTTP://AUCTION.KMNUMISMATICS.COM/ (THE “SITE” ) AND/OR DOWNLOADING OR USING OUR AUCTION EXPERIENCE MANAGEMENT PLATFORM MOBILE APPLICATION(S) (THE “APPLICATION” ) AND REGISTERING FOR OUR SERVICES ( “YOU” OR “YOUR” ). WE MAKE THE SITE AND APPLICATION AVAILABLE TO YOU ON BEHALF OF KM NUMISMATICS (THE “AUCTION HOUSE” ). BY USING THIS SITE AND APPLICATION, YOU AGREE TO BE BOUND BY THE AUCTION HOUSE'S CONDITIONS OF SALE, LOCATED HERE , WHICH ARE INCORPORATED BY REFERENCE. YOU ACKNOWLEDGE THAT WE ARE NOT A PARTY TO YOUR PURCHASE OF ITEMS FROM THE AUCTION HOUSE, AND THAT THE PURCHASE AND SALE OF ITEMS IS A TRANSACTION CONDUCTED EXCLUSIVELY BETWEEN YOU AND THE AUCTION HOUSE, AND NOT BETWEEN YOU AND AUCTION MOBILITY. YOU MAY USE THE SERVICES (DEFINED BELOW) ONLY IF YOU CAN FORM A BINDING CONTRACT WITH US AND ARE NOT A PERSON BARRED FROM RECEIVING THE SERVICES UNDER THE LAWS OF THE UNITED STATES OR OTHER APPLICABLE JURISDICTION. IF YOU CANNOT CONFIRM THE FOREGOING, THEN YOU MUST NOT ACCEPT THESE TERMS OF USE AND MAY NOT DOWNLOAD OR USE THE SITE OR APPLICATION OR USE THE SERVICES. YOU MAY USE THE SERVICES ONLY IN COMPLIANCE WITH THESE TERMS OF USE AND ALL APPLICABLE LAWS AND REGULATIONS.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Binding Arbitration
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
ANY CLAIM, DISPUTE OR CONTROVERSY OF WHATEVER NATURE ARISING OUT OF OR RELATING TO THESE TERMS OF USE SHALL BE RESOLVED BY FINAL AND BINDING ARBITRATION IN ACCORDANCE WITH THE PROCESS DESCRIBED IN THE SECTION TITLED “BINDING ARBITRATION AND APPLICABLE LAW” BELOW. PLEASE READ THE SECTION TITLED “BINDING BILATERAL ARBITRATION AND APPLICABLE LAW” CAREFULLY.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Services
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We may amend these Terms of Use at any time by posting the revised Terms of Use on the Site and Application. We may terminate these Terms of Use at any time by suspending or terminating access to the Services and/or notifying you. You can see when these Terms of Use were last revised by referring to the “Updated” legend above. The Site and Application allow you to place bids, monitor live auctions and perform other related activities in connection with the Auction House (collectively, the “ Services ”). Your continued use of the Services after we have posted revised Terms of Use signifies your acceptance of such revised Terms of Use. No amendment or modification of these Terms of Use will be binding unless in writing and signed by our duly authorized representative or posted to the Site and/or Application by our duly authorized representative.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Agreement with Respect to Terms of Use
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
These Terms of Use constitute a legally binding agreement between the Company and you. You acknowledge that you have read these Terms of Use, and accept, understand and will be bound by such terms and conditions. You further acknowledge that these Terms of Use, together with the Privacy Policy (defined below) and terms governing any individual section of the Site or Application, represent the complete and exclusive agreement between us, and supersede any proposal or prior agreement oral or written, and any other communications between us relating to the Site, Application and Services.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Registration and Privacy
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
To register with us and use the Site or Application, we require that you provide certain information, including your name, email address, username and password (collectively, your “Account Information”). If you provide any information that is untrue, inaccurate, not current or incomplete, or if you impersonate someone else, or we have reasonable grounds to suspect so, we may terminate your account and refuse any and all current or future use of the Site and Application by you.

We are committed to your privacy, and our privacy policy (the “Privacy Policy”) explains how we use, store and protect your Account Information and other information you provide to us. You can read the Privacy Policy here

You are solely responsible for maintaining the confidentiality of your user name and password. You must notify us immediately of any unauthorized use of your Account Information. We will not be responsible for any losses arising out of the unauthorized use of your account and you will indemnify and hold us harmless from and against any losses, damages, claims or liabilities relating to the improper, unauthorized or illegal uses of your account.

If you are a user accessing Services from the European Union, Asia, or any other region with laws or regulations governing personal data collection, use, and disclosure, that differ from United States laws, please be advised that through your continued use of the Services, which is governed by U.S. law, you are transferring your personal information to the United States and you consent to such transfer.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Use and Restrictions
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Content
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
All text, videos, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, artwork and computer code, including but not limited to design, structure, “look and feel” and arrangement of the content available on the Site and Application (collectively, “ Content ”) is owned, controlled or licensed by or to us, and is protected by trade dress, copyright, patent and trademark laws, and various other intellectual property rights and unfair competition laws.

The Application and Services are licensed, not sold. The Content, Site and Application, and all related intellectual property, are solely and exclusively owned by us and/or our licensors and suppliers. We grant you a personal, limited, nontransferable license to download, display and use the Application and use the Services available through the Site strictly in accordance with these Terms of Use. This license does not allow you to use the Application on any device that you do not own or control. You may not copy, reproduce, republish, post, publicly display, translate or distribute the Application or Content in any way, except as specifically authorized by the features and functions of the Services (such as posting to or sharing images with certain social media sites). We grant you no license by implication or estoppel, and reserve all rights not expressly granted in these Terms of Use. The license granted to you pursuant to these Terms of Use is solely for your personal use (but not for resale or redistribution) as a user of the Services, and may not be used for any other purposes. You shall not reverse engineer, de-compile, or otherwise translate, in any way, the Content and user interface(s) made available from, on or through the Application or Site. You have no right or claim of right to the Content or any unique ideas found on the Application or Site.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Links to Other Sites
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
The Application and Site contain links to other independent third-party web sites, and we provide links to third-party websites as part of the Services (in all cases “Linked Sites”). These Linked Sites are provided solely as a convenience to you and based upon your Account Information or the Content you elect to view. Such Linked Sites are not under our control, and we are not responsible for and do not endorse the content of such Linked Sites, including any products, information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites. Some of the content served by us will be from affiliated merchant sites, and sales through these affiliated sites may generate a commission payable to us. We accept no responsibility for reviewing changes or updates to, or the quality, content, policies, nature or reliability of third party web sites, including, without limitation, Linked Sites and websites linking to the Application and/or Site. You should review applicable terms and policies, including privacy and data gathering practices, of third party web sites, and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third party.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Prohibited Uses
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
You may not use the Application, Site or Services for illegal or unlawful or malicious activities or for activities that we deem improper for any reason whatsoever in our sole judgment. While using the Application, Site and Services, you may not: (a) impersonate any person or entity, falsely state or otherwise misrepresent your affiliation with any person or entity, or use or provide any fraudulent, misleading or inaccurate information; (b) defame, abuse, harass, stalk, intimidate, bully, threaten or otherwise violate the rights of others, including without limitation others’ privacy rights or rights of publicity; (c) access or use (or attempt to access or use) another user’s account without permission, or solicit another user’s login information; (d) transmit any software or materials that contain any viruses, worms, trojan horses, defects, or other items of a destructive nature; (e) modify, adapt, sublicense, translate, sell, reverse engineer, decompile or disassemble any portion of the Application, Site or Services; (f) “frame” or “mirror” any portion of the Application, Site or Services; (g) use any robot, spider, site search/retrieval application or other manual or automatic device or process to retrieve, index, “data mine” or in any way reproduce or circumvent the navigational structure or presentation of the Application, Site or Services; (h) harvest or collect information about or from other users of the Application, Site or Services; (i) use the Application, Site or Services for any illegal activity; (j) probe, scan or test the vulnerability of the Application or Site, nor breach the security or authentication measures on the Application or Site or take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Application or Site, such as a denial of service attack; (k) access or use any portion of the Content or Services if you are a direct or indirect competitor of the Company, or provide, disclose or transmit any portion of the Content to any direct or indirect competitor of the Company; (l) use or distribute any Content to directly or indirectly create or contribute to the development of any database or product; or (m) facilitate or encourage any violations of this Section.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Warranties, Disclaimers and Limitations of Liability
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Your Warranties
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>

You represent and warrant to us that (a) all information, including, without limitation, Account Information, that you provide to us is accurate and truthful, (b) you have the authority to share Account Information with us and to grant us the right to use Account Information as provided in these Terms of Use and Privacy Policy and (c) your use of the Services pursuant to these Terms of Use does not violate any applicable law or other contract or obligation to which you are a party or are otherwise bound.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Disclaimer of Warranties
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
ALTHOUGH WE MAKE EFFORTS TO PROVIDE AN ACCURATE APPLICATION AND SITE, THE APPLICATION, SITE AND ALL PARTS THEREOF ARE PROVIDED “AS IS”, “WITH ALL FAULTS”, AND “AS AVAILABLE” TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE COMPANY AND ITS LICENSORS AND SUPPLIERS DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES OR GUARANTEES OF ANY KIND WITH RESPECT TO THE APPLICATION, THE SITE, THE SERVICES, AND ANY INFORMATION OR DATA WE PROVIDE TO YOU, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION (1) AS TO TITLE, MERCHANTABILITY, FITNESS FOR ORDINARY PURPOSES AND FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT, (2) THE QUALITY, ACCURACY, TIMELINESS OR COMPLETENESS, (3) THOSE ARISING THROUGH COURSE OF DEALING, COURSE OF PERFORMANCE OR USAGE OF TRADE, AND (4) THAT ACCESS TO OR USE OF THE APPLICATION, SITE, CONTENT OR SERVCIES WILL BE UNINTERRUPTED, ERROR-FREE OR COMPLETELY SECURE. ANY RELIANCE UPON THE APPLICATION, SITE AND SERVICES IS AT YOUR OWN RISK.

IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SERVICES, OR WITH THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE AND UNINSTALL THE APPLICATION.

Please note that we do not have control over, and cannot guarantee the existence, quality, safety or legality of any item offered by the Auction House, the truth or accuracy of Auction House representations, or the ability of Auction House to sell any item.

Your reliance upon the information available on the Application and/or Site or through use of the Services and your interactions with third parties identified through the Services is SOLELY AT YOUR OWN RISK. The Services may be subject to limitations, delays, and other problems inherent in the use of the Internet, mobile devices and electronic communications and mail delivery systems. We are not responsible for any delays, delivery failures or other damages resulting from such problems. We reserve the right to do any of the following, at any time, without notice: (1) to modify, suspend or terminate operation of or access to the Application, Site and Services, or any portion thereof; and (2) to interrupt the operation of the Application, the Site and/or provision of Services, or any portion thereof, as necessary to perform routine or non-routine maintenance, error correction, or other changes, or to comply with laws.

Some jurisdictions do not allow the above disclaimer of warranties, so such disclaimers might not apply to you.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Limitations of Liability
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, APPLICATION OR THEIR RESPECTIVE CONTENT, WITH THE DELAY OR INABILITY TO ACCESS OR USE THE SITE, THE APPLICATION OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY CONTENT, SOFTWARE, PRODUCTS AND SERVICES MADE AVAILABLE OR OBTAINED THROUGH THE SITE, THE APPLICATION OR THEIR RESPECTIVE CONTENT, OR OTHERWISE ARISING OUT OF THE USE OR ACCESS OF THE SITE, USE OF THE APPLICATION OR USE OF THE SERVICES, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. ANY SERVICES OR CONTENT MADE AVAILABLE OR OBTAINED THROUGH THE USE OF THE SITE OR THE APPLICATION, AND ALL OTHER USE OF THE SITE OR APPLICATION, IS DONE AT YOUR OWN DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS THEREFROM.

THE AGGREGATE AND CUMULATIVE LIABILITY OF COMPANY TO YOU OR ANY THIRD PARTY FOR ALL DAMAGES ARISING OUT OF OR RELATED TO THESE TEMRS OF USE SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).

IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, THE APPLICATION OR THEIR RESPECTIVE CONTENT, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE AND UNINSTALL THE APPLICATION.

Some jurisdictions do not allow the above limitation of liability and/or exclusion of damages, so such limitations and exclusions might not apply to you.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Release
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
If you have a dispute with the Auction House, you release Company (and its affiliates and subsidiaries, and its and their respective officers, directors, employees and agents) from any and all claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such dispute. IN ENTERING INTO THIS RELEASE YOU EXPRESSLY WAIVE ANY PROTECTIONS (WHETHER STATUTORY OR OTHERWISE) THAT WOULD OTHERWISE LIMIT THE COVERAGE OF THIS RELEASE TO INCLUDE ONLY THOSE CLAIMS WHICH YOU MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOR AT THE TIME OF AGREEING TO THIS RELEASE.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Indemnification
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
You will indemnify and hold the Company and its Affiliates harmless with respect to any suits or claims arising out of (i) your breach of these Terms of Use, including, but not limited to, any infringement by you of the copyright or intellectual property rights of any third party; (ii) your fraudulent or malicious use of the Site, the Application and/or Services or your misuse or abuse of the Site, Application and/or Services or (iii) your violation of applicable laws, rules or regulations in connection with your use of the Site, Application or Services. YOU AGREE TO INDEMNIFY AND HOLD THE COMPANY, ITS THIRD-PARTY VENDORS, CORPORATE AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES AND AGENTS HARMLESS FROM ANY AND ALL CLAIMS AND DEMANDS, INCLUDING, BUT NOT LIMITED TO REASONABLE ATTORNEYS’ FEES, MADE BY ANY THIRD-PARTY DUE TO OR ARISING OUT OF ANY CONTENT SUBMITTED, POSTED, OR OTHERWISE PROVIDED BY YOU TO THE COMPANY AND/OR ITS PARTNERS AND ANY BREACH BY YOU OR YOUR AFFILIATES, EMPLOYEES, AGENTS AND REPRESENTATIVES OF THESE TERMS OF USE.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Consent to Electronic Notice
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>

By using the Site, the Application or the Services, you agree that Company may communicate with you electronically regarding administrative, security and other issues relating to your use of the Site, Application and Services. You agree that any notices, agreements, disclosures or other communications that Company sends to you electronically will satisfy any legal communication requirements, including that such communications be in writing. The foregoing does not affect your statutory rights.
</Text>
</View>

</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Governing Law
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
You agree that, except to the extent inconsistent with or preempted by federal law, the laws of the Commonwealth of Massachusetts, United States, without regard to principles of conflict of laws, will govern this Agreement and any claim or dispute between you and Company.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Binding Bilateral Arbitration and Applicable Law (Continued from Section titled “Binding Arbitration” above)
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:"#000"}}>
PLEASE READ THIS SECTION CAREFULLY. You and Company agree that any claim or dispute at law or equity that has arisen or may arise between us relating in any way to or arising out of this or previous versions of the Terms of Use, your use of or access to the Site, Application and Services, or any products or services sold or purchased through the Services, will be resolved in accordance with the provisions set forth in this Section.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
1. Agreement to Arbitrate 
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
You and Company each agree that any and all disputes or claims that have arisen or may arise between you and Company relating in any way to or arising out of this or previous versions of the Terms of Use, the relationship between you and Company, your use of or access to the Site, Application or Services, or any products or services sold, offered, or purchased through the Services (a “Dispute”) shall be resolved exclusively through final and binding arbitration, and not in court.
Notwithstanding the choice of law provision governing the Terms of Use above entitled “Governing Law”, the Federal Arbitration Act governs the interpretation and enforcement of this Agreement to Arbitrate to the maximum extent possible and to the exclusion of any conflicting federal or state laws. The Terms of Use and this Agreement to Arbitrate contemplate a transaction involving interstate commerce.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
2. Prohibition of Class and Representative Actions and Non-Individualized Relief
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
YOU AND COMPANY AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE OR PRIVATE ATTORNEY GENERAL ACTION OR PROCEEDING. YOU THEREFORE AGREE TO WAIVE THE RIGHT TO A JURY TRIAL AND THE RIGHT TO FILE, COMMENCE OR PARTICIPATE IN ANY CLASS ACTION OR CLASS ARBITRATION AGAINST COMPANY OR ANY PUTATIVE CLASS ACTION OR CLASS ARBITRATION AGAINST COMPANY. UNLESS BOTH YOU AND COMPANY AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON’S OR PARTY’S CLAIMS, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED, REPRESENTATIVE, CLASS, OR PRIVATE ATTORNEY GENERAL ACTION OR PROCEEDING. ALSO, THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT PARTY’S INDIVIDUAL CLAIM(S). ANY RELIEF AWARDED CANNOT AFFECT OTHER USERS. If a court decides that applicable law precludes enforcement of any limitations in this Agreement as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought in court, subject to your and Company’s right to appeal the court’s decision. All other claims will be arbitrated.
Arbitration Procedures
Notwithstanding any contrary provision in the FAA or the applicable AAA rules, all issues in a Dispute are for the arbitrator to decide.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05}}>
  <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.04,fontWeight:'500'}}>

 3. The arbitration will be conducted by the American Arbitration Association (“AAA”) under its rules and procedures, including the AAA’s Consumer Arbitration Rules (as applicable) (“AAA Rules”), as modified by this Agreement to Arbitrate. The rules promulgated by the AAA concerning class arbitration shall not apply. The AAA Rules will govern the number of arbitrators that may preside over an arbitration conducted under this Agreement to Arbitrate. The AAA Rules are available online at adr.org, by calling the AAA at 1-800-778-7879, or by writing to Company at the Notice address below. You acknowledge that you have access to the AAA Rules and consent to them and that you can obtain a printed copy of the AAA Rules from Company or AAA. In the event of any conflict between the AAA Rules and this Agreement to Arbitrate, this Agreement to Arbitrate shall control and the arbitrator is bound by the terms of this Agreement to Arbitrate.

A party who intends to seek arbitration must first send to the other, by certified mail, a completed form Notice of Dispute that identifies your name, contact information, a description of the dispute, and your requested relief (“Notice”). The Notice to Company should be sent to Auction Mobility, attn. President, 192 South St., Suite 600, Boston, Massachusetts 02111, United States. Company will send any Notice to you to the physical address we have on file associated with your Company account, with a copy to your email address on file; it is your responsibility to keep your physical address and email address up to date.

If you and Company are unable to resolve the claims described in the Notice within 30 days after the Notice is sent, you or Company may initiate arbitration proceedings. A form for initiating arbitration proceedings is available on the AAA’s site at www.adr.org. In addition to filing this form with the AAA in accordance with its rules and procedures, the party initiating the arbitration must mail a copy of the completed form to the opposing party. You may send a copy to Company at Auction Mobility, attn. President, 192 South St., Suite 600, Boston, Massachusetts 02111, United States. If Company initiates an arbitration against you, it will send a copy of the completed form to the physical address we have on file associated with your Company account, with a copy to your email address on file. Any settlement offer made by you or Company shall not be disclosed to the arbitrator.

The arbitration hearing shall be held in Boston, Massachusetts, United States.

The arbitrator will decide the substance of all claims in accordance with applicable law, including recognized principles of equity, and will honor all claims of privilege recognized by law. The arbitrator shall not be bound by rulings in prior arbitrations involving different users, but is bound by rulings in prior arbitrations involving the same Company user to the extent required by applicable law. The arbitrator’s award shall be final and binding and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.

The arbitrator shall have the authority to compel adequate discovery for the resolution of the Dispute and to award such relief as would otherwise be permitted by law; provided, however, that in no event shall the right to discovery granted to the parties exceed 25 interrogatories, 35 documents requests, 10 third-party subpoenas, and three depositions (of not more than seven hours each), including third-party depositions, per side. The parties may submit such pre-arbitration and post-arbitration briefs (including briefs during arbitration) as they choose, provided that no party shall submit briefing exceeding a reasonable page limitation to be set by the arbitrator. If any party submits a motion, the arbitrator shall consider the motion and either deny it or request opposition briefing by the non-moving party, which shall not be required until requested by the arbitrator. The arbitrator may not grant a motion without allowing the opposing party an opportunity to oppose. The total length of the arbitration hearings on the merits shall not exceed 25 hours of hearing time, to be divided equally between the opposing sides. All discovery shall be completed no later than one hundred 120 days after appointment of the arbitrator. The hearing shall be concluded no later than 180 days after appointment of the arbitrator, unless the arbitrator’s schedule requires a later hearing. The arbitrator may only extend these limits at the request of a party when the arbitrator finds exceptional cause for the extension. The parties may extend these limits upon their agreement.

Costs of Arbitration
Payment of all filing, administration and arbitrator fees will be governed by the AAA’s rules, unless otherwise stated in this Agreement to Arbitrate.
Severability
With the exception of any of the provisions in Section 1 above (“Prohibition of Class and Representative Actions and Non-Individualized Relief”), if an arbitrator or court decides that any part of this Agreement to Arbitrate is invalid or unenforceable, the other parts of this Agreement to Arbitrate shall still apply.
Opt-Out Procedure
IF YOU ARE A NEW COMPANY USER, YOU CAN CHOOSE TO REJECT THIS AGREEMENT TO ARBITRATE (“OPT-OUT”) BY MAILING COMPANY A WRITTEN OPT-OUT NOTICE (“OPT-OUT NOTICE”). THE OPT-OUT NOTICE MUST BE POSTMARKED NO LATER THAN 30 DAYS AFTER THE DATE YOU ACCEPT THE TERMS OF USE FOR THE FIRST TIME. YOU MUST MAIL THE OPT-OUT NOTICE TO Auction Mobility, attn. President, 192 South St., Suite 600, Boston, Massachusetts 02111, United States.
Your Opt-Out Notice must include your name, address (including street address, city, state and zip code), and the user ID(s) and email address(es) associated with the Company account(s) to which the opt-out applies. You must sign and date the Opt-Out Notice for it to be effective. This procedure is the only way you can opt out of the Agreement to Arbitrate. If you opt out of the Agreement to Arbitrate, all other parts of the Agreement and its Legal Disputes Section will continue to apply to you. Opting out of this Agreement to Arbitrate has no effect on any previous, other, or future arbitration agreements that you may have with Company
</Text>
  </View>

</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
4.  Judicial Forum for Legal Disputes
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
Unless you and Company agree otherwise, if the Agreement to Arbitrate above is found not to apply to you or to a particular claim or dispute, either as a result of your decision to opt out of the Agreement to Arbitrate or as a result of a decision by the arbitrator or a court order, you agree that any claim or dispute that has arisen or may arise between you and Company must be resolved exclusively by a state or federal court located in Boston, Massachusetts, United States. You and Company agree to submit to the personal jurisdiction of the courts located within Boston, Massachusetts, United States for the purpose of litigating all such claims or disputes.
Interpretation
These Terms of Use are intended to be interpreted in the English language, and any translation is made for the convenience of the parties only. In the event of a conflict between the English and the translated versions, the English version will control and supersede.

You agree that no joint venture, partnership, employment, or agency relationship exists between you and the Company as a result of these Terms of Use or accessing or using the Site, the Application or their respective contents. The Company’s performance under these Terms of Use is subject to existing laws and legal process, and nothing contained in these Terms of Use is in derogation of the Company’s right to comply with governmental, court and law enforcement requests or requirements relating to your access or use of the Site and/or Application or information provided to or gathered by the Company with respect to such use.

If any part of these Terms of Use is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations contained herein, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the Terms of Use shall continue in effect. A printed version of these Terms of Use and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to the Terms of Use to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. Except as otherwise specified in these Terms of Use, all notices, permissions and approvals hereunder shall be in writing and shall be deemed to have been given upon: (i) personal delivery, (ii) the second business day after mailing, (iii) the second business day after sending by confirmed facsimile, or (iv) the first business day after sending by email. Notices to us must be sent in writing to the following address: Auction Mobility, attn. President, 192 South St., Suite 600, Boston, Massachusetts 02111, United States, and notices to you will be sent to the email address you provide to us, which addresses may be updated from time to time upon written notice to the other party. No forbearance or delay by either party in enforcing its rights shall prejudice or restrict the rights of that party, and no waiver of any such rights or of any breach of any contractual terms shall be deemed to be a waiver of any other right or of any later breach. You may not assign any of your rights or obligations hereunder, whether by operation of law or otherwise. We may assign our rights and privileges under these Terms of Use (including your user registration), without your consent in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of our assets, or to an affiliate, or in connection with a change in control. Subject to the foregoing, these Terms of Use shall bind and inure to the benefit of the parties, their respective successors and permitted assigns.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Term and Termination
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
The term of these Terms of Use will continue for as long as you access and use the Application, Site and/or Services. Sections titled “Content,” “Warranties, Disclaimers and Limitations of Liability,” “Applicable Law and Jurisdiction,” “Interpretation,” and “Indemnification,” and this Section shall survive any termination or expiration of these Terms of Use.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
{'Contact us at'}
</Text>
<TouchableOpacity>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:"#0692B8"}}>
legal@auctionmobility.com
</Text>
</TouchableOpacity>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
57026969v.2
</Text>
</View>
</View>
<View style={{paddingBottom:width*0.3}}>

</View>
</ScrollView>
    </View>
);
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#FFFFFF' }]} >
    <ScrollView style={{paddingHorizontal:width*0.03}}>
      
      <Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
      Privacy Policy
      </Text>
      <Text style={{fontSize:width*0.04,color:"#000",fontWeight:'500'}}>
        Updated April 25, 2020
      </Text>
      <View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
This privacy policy ( “Privacy Policy”) tells you how we use your information when you use our Auction Experience Management Platform on the website(s) (the “Site”, ) and mobile application(s) (the “Application”) made available by ) Auction Mobility LLC ( “we,” “us” or “our” ) on behalf of KM Numismatics/ (the “Auction House” ). Our Terms of Use and the Auction House’s Conditions of Sale are incorporated by reference.

The Site and Application allow you to, among other things use your computer or mobile device(s) to place bids and monitor live auctions (collectively, the “Services” ). Pursuant to our agreement with the Auction House, the Auction House is the owner of any information collected through the Site, and we act as a processor. This Privacy Policy is only applicable when users access the Site and the Application and may not be applicable to information collected by the Auction House in other channels (for example, valuation services, subscriptions to catalogues, telephone bid transactions, etc.). We share your information with the Auction House, and by conducting a transaction using the Application, you consent to that sharing. The Auction House may have their own privacy policy, please consult the Auction House’s privacy policy for information on how the Auction House uses it.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>
  <TouchableOpacity>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
What types of information does the Site and the Application collect?</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
How do you use my information and how long do you keep it?</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
How do you share my information with others?</Text>
</TouchableOpacity>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
How do I change or delete my Personal Data?</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
How do you protect my information?</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
How do the Services use cookies or other technologies?</Text> 
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
Effective Date; Policy Changes</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
Notice to California Residents</Text>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
For Users Located in the European Economic Area (including the United Kingdom)</Text>
<TouchableOpacity>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
Contact Us</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text  style={{fontSize:width*0.04,fontWeight:'500',color:'#0692BB'}}>
What types of information does the Site and the Application collect?
</Text>
</TouchableOpacity>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
What types of information does the Site and the Application collect?
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We collect and store information that you voluntarily provide to us as well as data related to your use of the Site and Application.

When you register with us and use the Services, we ask that you provide your name, email address, user name and password. You can also choose to provide us with additional information, such as a contact phone number. All of the information listed in this paragraph is collectively referred to as your “Personal Data” . This Personal Data is necessary to provide you with the Application and we are processing this Personal Data in accordance with your request.

If you choose to purchase an item at auction, your payment information is processed by a third party payment processor. Please carefully read the section titled “Processing Payments for Auction Items” below. All payment information is necessary to process for the purpose of completing the transaction that you have requested with the Auction House.

The Application can also provide you with push notifications of upcoming events, such as sales or auctions. You can opt out of receiving push notifications at any time by using the settings on your mobile device. You can stop all collection of information by the Application by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.

In addition, we automatically collect certain information and analytical data related to your use of the Site and Application (“Usage Information”). In the aggregate, this Usage Information is non-personally identifiable or anonymous information about you, including the date and time of your visit, the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, location and the features of our Application you accessed (collectively “Aggregate Information” ). This Aggregate Information is in no way associated with your Personal Data. Usage Information is necessary for the operation and optimization of the Site and the Application.

How do you use my information, and how long do you keep it?
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
How do you use my information, and how long do you keep it?
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We use collected information, including Personal Data, to make available and to improve our high standard of reliable services. We use such information to:

respond to inquiries or service requests and monitor such responses;

provide information about and market our products or services;

enable transactions conducted between you and the Auction House using the Application;

resolve problems; and

manage the Site and Application and assess usage of the Services.

We will retain Personal Data for as long as you continue to use the Site and/or Application and as long as is necessary thereafter to meet our obligations to the Auction House or other legal obligations. We will retain Aggregate Information for up to 24 months.

How do you share my information with others?
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
How do you share my information with others?
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We host the Site and Application and provide the Services in connection with and on behalf of the Auction House. We do not sell or rent your Personal Data to third parties. .We share your Individual Information and Usage Information with the Auction House for their business purposes, including marketing purposes. The Auction House may have its own privacy policy and you should consult that for information on how the Auction House uses it.

The ways we may share your Personal Data are outlined below.

Processing Payments for Auction Items

We use third-party credit card processors to process payments for auction items that you choose to make through the Services. To make this possible, your name, billing address and order total are shared via secure (encrypted) means with our third-party payment processors for the sole purpose of completing your order. Please note that your credit card information (number, expiration date, security code) is stored by the third party payment processor and not us. We have entered into agreements (including data processing agreements for our users located in the European Economic Area) with our payment processors to protect and secure your information. If you would like information on our payment processors, please contact us at legal@auctionmobility.com

Service Providers

We may disclose Personal Data to our third party service providers to provide you with the Services, including our third party payment processor. We share Aggregate Information with companies that provide public relations and marketing services for us. Such information will only be shared by us to customize, measure and improve our Site, Application and Services.

Legal Processes

We may disclose information, including Personal Data, which we believe is appropriate to protect our rights, or to cooperate in investigations of fraud or other illegal or inappropriate activity or in response to a subpoena, court order or other comparable legal process. If a subpoena seeks information about an identified user or limited group of users, we’ll make reasonable business efforts, if permitted, to contact the user(s) before providing information to the party that requests it. We cannot guarantee that we will be able to contact the user(s) in all cases.

We may disclose Personal Data to your agent or legal representative (such as the holder of a power of attorney that you grant, or a guardian appointed for you) and may request identity verification before disclosing Personal Data in such a case.

As with any other business, it is possible that in the future we could merge with or be purchased by another company. If we are acquired, the company that acquires us would have access to the information maintained by us, including Personal Data, but would continue to be bound by this Privacy Policy unless and until it is amended.

Aggregate Information

We are not limited in our use of Aggregate Information that does not permit direct association with any specific individual, or non-identifiable aggregate information about our users (such as the number of users of our Services, the geographic distribution of our users, the amount of information located and/or removed, etc.).

How do I change, delete or access my Personal Data?
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
How do I change, delete or access my Personal Data?
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
You may view, change, or access your Personal Data at any time by logging into the Services and changing your account information. If you’d like to delete your Individual Information that you have provided in connection with the Services, please contact us at legal@auctionmobility.com and we will forward your request to the Auction House.

How do you protect my information?
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
How do you protect my information?
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We have implemented industry standard information security practices including administrative, physical, and technical measures to protect your Personal Data from loss, misuse, or unauthorized access, disclosure, alteration, or destruction. The security of your account relies on your protection of your password and mobile device(s). You are responsible for maintaining the security of your password. You are solely responsible for any and all activities that occur under your account or on your mobile device. You may not share your password or Services account with anyone. We will never ask you to send your password or other sensitive information to us in an email, though we may ask you to enter this type of information on the Site or the Application interface. If you believe someone else has obtained access to your password, please change it immediately. If you believe that an unauthorized access has already occurred please report it immediately at legal@auctionmobility.com . You must promptly notify us if you become aware that any information provided by or submitted to in connection with the Services is lost, stolen, or used without permission.

If you have general concerns or questions regarding the security of information collected, processed or stored by the Site and/or Application, you can contact us at legal@auctionmobility.com

How do the Services use cookies or other technologies?
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
How do the Services use cookies or other technologies?
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We collect certain information about your mobile device automatically, such as the type of mobile device you use, your mobile device’s unique device ID, the Internet Protocol (IP) address of your mobile device, your mobile device operating system, location, the type of mobile device Internet browser you use, and information about the way you use the Application. If you prefer, you can program your mobile device so that it does not store this information while utilizing the Applications. Certain Application features may only be available through the collection and use of this type of “cache data”. We may use cache data to assist in data collection and to track Application usage and trends to help us better serve you.

We may use third party analytics services on our website, such as Google Analytics. The information collected through these means (including IP address) is disclosed to these service providers, who use the information to analyze use of our website. To disable Google Analytics, please download the browser add-on for the deactivation of Google Analytics provided by Google at Google Analytics Guide . We use this information only to improve the Services, but do not combine it with personally identifiable information. See our Cookie Policy for further information on our use of cookies.

Effective Date; Policy Changes
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Effective Date; Policy Changes
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
Each time you use the Services, the current version of the Policy will apply. Accordingly, when you use the Services, you should check the date of this Policy (which appears at the top of the Policy) and review any changes since the last version. Our business changes frequently and this Policy is subject to change from time to time. Unless stated otherwise, our current Policy applies to all information that we have about you. We will not materially change our policies and practices to make them less protective of Personal Data collected in the past without the consent of affected customers.

Notice to California Residents
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Notice to California Residents
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
California Civil Code Section 1798.83, known as the “Shine the Light” act, permits customers who are California residents and who have provided us with “personal information” (as that term is defined in Section 1798.83) to request certain information about the disclosure of that information to third parties for their direct marketing purposes. If you are a California resident with questions regarding this, please contact us via email at legal@auctionmobility.com or by mail at:

Auction Mobility LLC
464 Common Street, Suite 326
Belmont MA 02478

Under the California Consumer Privacy Act (“CCPA”), Auction Mobility is a “service provider” to the Auction House. The CCPA grants California residents certain rights with respect to disclosure, access, and deletion of personal information collected by a covered business. If you are a California resident with questions about your rights and personal information under CCPA, please contact the Auction House and we will cooperate with the Auction House to address your requests.

Notice to Nevada Residents
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Notice to Nevada Residents
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We do not sell, rent, or otherwise share your data to any third-party for a business or commercial purpose, other than the Auction House. By establishing an account via the Auction Mobility Site and the Application, you specifically consent to such disclosure. Pursuant to Section 603A of the Nevada Revised Statutes, residents of Nevada may, at any time, submit a request to an operator of a website in Nevada directing the operator not to make any sale of any personal information the operator has collected or will collect about the consumer. If you are a Nevada resident and want to opt-out of the sale of any personal information at any future time, please submit an email request to legal@auctionmobility.com . In your request, please specify that you want to “Opt-Out of Sale of Personal Information in Nevada.” Please allow 60 days for a response.

For Users Located in the European Economic Area (EEA) or the United Kingdom
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
For Users Located in the European Economic Area (EEA) or the United Kingdom
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
If you are located in the EEA or the United Kingdom, you are entitled to certain information regarding your Personal Data and our legal basis for collecting and processing such Personal Data.
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Rights of EEA and United Kingdom residents
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Is my Personal Data transferred out of the EEA or the United Kingdom?
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
We are located in the United States and provide our Services from the United States, and as such, your Personal Data will be held in our servers located in the United States. The United States does not have the same data protection laws as in the EEA or the United Kingdom.

We provide the Services to the Auction House as a data processor pursuant to instructions and a data processing agreement, including the EU Commission approved “standard contractual clauses.”
</Text>
</View>
</View>
<View style={{paddingTop:width*0.05,}}> 
<TouchableOpacity>
<Text style={{fontSize:width*0.05,color:"#0692BB",fontWeight:'bold'}}>
click here
https://www.privacyshield.gov/list .
</Text>
</TouchableOpacity>
</View>
<View style={{paddingTop:width*0.05,}}>    
<Text style={{fontSize:width*0.05,color:"#000",fontWeight:'bold'}}>
Contact Us
</Text>
</View>
<View style={{paddingTop:width*0.05,}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text  style={{fontSize:width*0.04,fontWeight:'500'}}>
To contact us with your questions or comments regarding this Policy or the information collection and dissemination practices of the Application, please email us at legal@auctionmobility.com or contact us by mail at:

Auction Mobility LLC
464 Common Street, Suite 326
Belmont MA 02478

If you have questions about the Auction House’s use of your Personal Data, please refer to the Auction House’s privacy policy and contact the Auction House directly.
</Text>
</View>
</View>
<View style={{paddingBottom:width*0.3}}>

</View>
      </ScrollView>
    </View>
);
export default class Terms extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Condition of sale' },
      { key: 'second', title: 'Terms of use' },
      { key: 'third', title: 'Privacy Policy' },
    ],

  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color: "#E42217", opacity, fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: "#E42217", fontSize: 15 }}>{route.title}</Animated.Text>
              <Text>

              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  render() {
    return (
      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
    
      <View style={{width:"100%",height:"8%",backgroundColor:'#dcdcdc',justifyContent:'center'}}>
<View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>Terms & Condition</Text>
</View>
</View>
<ScrollView contentContainerStyle={{ flex: 1 }}>
  <View style={{paddingTop:width*0.05,paddingHorizontal:width*0.05}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:width*0.04,color:"#000",fontWeight:'500'}}>
          Please read these Terms & Condition carefully
        </Text>
        </View>
        </View>
        <View style={{ width: width, height: '100%', backgroundColor: '#FFFFFF' }}>
            <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderTabBar}
              onIndexChange={this._handleIndexChange}
            />
          </View>
        </ScrollView>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: "row",
    elevation: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

    height: 50,
    width: 180,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  },
  container: {
    width: width,
    height: '100%'
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: "space-evenly"

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical:6,



  },
})