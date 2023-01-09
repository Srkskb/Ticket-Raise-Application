import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
const { width, height } = Dimensions.get("window");
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Alltechnical from '../screens/Alltechnical';
import Createsr from '../screens/createsr';
import Home from '../screens/home';
import Contact from '../screens/contact';
import Mhome from '../screens/managerhome';
import Profile from '../screens/profile';
import Feedback from '../screens/feedback';
import Welcome from '../screens/welcome';
import About from '../screens/about';
import Register from '../screens/register';
import Chatscreen from '../screens/chatscreen';
import Login from '../screens/login';
import Splash from '../screens/splash';
import Colors from '../utils/color';
import Mversion from '../screens/mversion';
import Mlanguage from '../screens/mlanguage';
import Maddcustomer from '../screens/maddcustomer';
import Maddservice from '../screens/maddservice';
import Mallservice from '../screens/mallservice';
import Meditservice from '../screens/meditservices';
import Mdatabaseversion from '../screens/mdatabaseversion';
import Mdatabaseplatformversion from '../screens/mdatabaseplatformversion';
import Mosversion from '../screens/mopversion';
import Mcustomer from '../screens/mallcustomer';
import Mallmanager from '../screens/mallmanager';
import Maddmanager from '../screens/maddmanager';
import Mallsupport from '../screens/mallsupport';
import Maddsupport from '../screens/maddsupport';
import Mallusers from '../screens/mallusers';
import Muserrequest from '../screens/muserrequest';
import Mticket from '../screens/mticket';
import Meditsupport from '../screens/meditsupport';
import Meditmanager from '../screens/meditmanager';
import Meditcustomer from '../screens/meditcustomer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    const [open1, setOpen1] = React.useState(false)
    return (
        <DrawerContentScrollView {...props} style={styles.menuContainer}>

            <View style={styles.touchable_opacity}
                onPress={() => { props.navigation.navigate('Profile') }}>
                <View style={{ marginVertical: 10 }}>
                    <Image source={require('../images/redlg.jpg')} resizeMode='contain' style={styles.profile_dp} />
                </View>
                <View style={{ justifyContent: 'center', marginHorizontal: 10, }}>
                    <Text style={styles.drawertext}>PARAKORE</Text>
                </View>
            </View>

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Home') }}>
                    <Entypo name={'home'} size={25} style={styles.icontext} />
                    <Text style={styles.drawertext1}>Home</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Feedback') }}>
                    <MaterialIcons name={'feedback'} size={25} style={styles.icontext} />
                    <Text style={styles.drawertext1}>Feedback</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen1(!open1)}>
                    <MaterialCommunityIcons name="ticket" style={styles.icontext} size={25} />
                    <Text style={styles.drawertext1}>Technical SR</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open1 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colormaincolour} size={25} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colormaincolour} size={25} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open1 ? <View style={{ width: '100%', }}>
                <View style={{
                    width: '100%', marginTop: 10, paddingLeft: 20, padding: 8
                }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Alltechnical')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            style={styles.icontext} size={25} />
                        <Text
                            style={styles.drawertext1}>
                            All Technical SR</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%', marginVertical: 10, paddingLeft: 20, padding: 8,
                }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Createsr') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={25} />
                        <Text style={styles.drawertext1}>
                            Create Technical SR</Text>
                    </TouchableOpacity>
                </View>
            </View> : null}

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('About') }}>
                    <MaterialCommunityIcons name={'vector-arrange-above'} size={25} style={styles.icontext} />
                    <Text style={styles.drawertext1}>About</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Contact') }}>
                    <Feather name={'phone-call'} size={25} style={styles.icontext} />
                    <Text style={styles.drawertext1}>Contact</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Splash') }}>
                    <Entypo name={'log-out'} size={25} style={styles.icontext} />
                    <Text style={styles.drawertext1}>Sign Out</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}
function Root() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            drawerPosition: 'left'
        }}
            drawerContent={(props) => < CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Drawer.Screen name="Alltechnical" component={Alltechnical} options={{ headerShown: false }} />
            <Drawer.Screen name="Createsr" component={Createsr} options={{ headerShown: false }} />
            <Drawer.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
            <Drawer.Screen name="About" component={About} options={{ headerShown: false }} />
            <Drawer.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
            <Drawer.Screen name="Chatscreen" component={Chatscreen} options={{ headerShown: false }} />

        </Drawer.Navigator>
    )
}

function ManagerCustomDrawer(props) {
    const [open1, setOpen1] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(false)
    const [open4, setOpen4] = React.useState(false)
    const [open5, setOpen5] = React.useState(false)
    const [open6, setOpen6] = React.useState(false)

    return (
        <DrawerContentScrollView {...props} style={styles.menuContainer}>

            <View style={styles.touchable_opacity}
                onPress={() => { props.navigation.navigate('Profile') }}>
                <View style={{ marginVertical: 10 }}>
                    <Image source={require('../images/redlg.jpg')} resizeMode='contain' style={styles.profile_dp} />
                </View>
                {/* <View style={{ justifyContent: 'center', marginHorizontal: 10, }}>
                    <Text style={styles.drawertext}>PARAKORE</Text>
                </View> */}
            </View>

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Mhome') }}>
                    <Entypo name={'home'} size={25} style={styles.icontext} />
                    <Text style={styles.Mdrawertext1}>Dashboard</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen1(!open1)}>
                    <FontAwesome name="podcast" style={styles.icontext} size={25} />
                    <Text style={styles.Mdrawertext1}>Master Setup</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open1 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colormaincolour} size={25} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colormaincolour} size={25} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open1 ? <View style={{ width: '100%', }}>
                <View style={{ width: '100%', marginTop: 5, paddingLeft: 20, padding: 5 }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Mversion')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Version</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Mlanguage') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Language</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Mdatabaseversion') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Database Version</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Mdatabaseplatformversion') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Database Platform</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Mosversion') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Operating system Version</Text>
                    </TouchableOpacity>
                </View>
            </View> : null}

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen2(!open2)}>
                    <FontAwesome name="user-secret" style={styles.icontext} size={25} />
                    <Text style={styles.Mdrawertext1}>Service / Support</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open2 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colormaincolour} size={25} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colormaincolour} size={25} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open2 ? <View style={{ width: '100%', }}>
                <View style={{ width: '100%', marginTop: 5, paddingLeft: 20, padding: 5 }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Mallservice')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>All Service</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Maddservice') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Add new service</Text>
                    </TouchableOpacity>
                </View>
          
            </View> : null}

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen3(!open3)}>
                    <FontAwesome name="user-circle" style={styles.icontext} size={25} />
                    <Text style={styles.Mdrawertext1}>Customer</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open3 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colormaincolour} size={25} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colormaincolour} size={25} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open3 ? <View style={{ width: '100%', }}>
                <View style={{ width: '100%', marginTop: 5, paddingLeft: 20, padding: 5 }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Mcustomer')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>All Customer</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Maddcustomer') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Add New Customer</Text>
                    </TouchableOpacity>
                </View>
          
            </View> : null}

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen6(!open6)}>
                    <FontAwesome name="users" style={styles.icontext} size={25} />
                    <Text style={styles.Mdrawertext1}>Manager</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open6 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colormaincolour} size={25} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colormaincolour} size={25} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open6 ? <View style={{ width: '100%', }}>
                <View style={{ width: '100%', marginTop: 5, paddingLeft: 20, padding: 5 }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Mallmanager')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>All Manager</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Maddmanager') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Add new manager</Text>
                    </TouchableOpacity>
                </View>
          
            </View> : null}

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen4(!open4)}>
                    <Entypo name="tree" style={styles.icontext} size={25} />
                    <Text style={styles.Mdrawertext1}>Support Team</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open4 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colormaincolour} size={25} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colormaincolour} size={25} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open4 ? <View style={{ width: '100%', }}>
                <View style={{ width: '100%', marginTop: 5, paddingLeft: 20, padding: 5 }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Mallsupport')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>All Support Team</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Maddsupport') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Add new support team</Text>
                    </TouchableOpacity>
                </View>
          
            </View> : null}

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOpen5(!open5)}>
                    <FontAwesome name="user" style={styles.icontext} size={25} />
                    <Text style={styles.Mdrawertext1}>Users</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open5 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colormaincolour} size={25} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colormaincolour} size={25} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open5 ? <View style={{ width: '100%', }}>
                <View style={{ width: '100%', marginTop: 5, paddingLeft: 20, padding: 5 }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Mallusers')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>All users</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 5, paddingLeft: 20, padding: 5, }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Muserrequest') }}>
                        <MaterialCommunityIcons name="radiobox-blank" style={styles.icontext} size={15} />
                        <Text style={styles.Mdrawertext1}>Users request</Text>
                    </TouchableOpacity>
                </View>
          
            </View> : null}

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Mticket') }}>
                    <Feather name={'file'} size={25} style={styles.icontext} />
                    <Text style={styles.Mdrawertext1}>Tickets</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}
function ManagerRoot() {
    return (
        <Drawer.Navigator initialRouteName="Mhome" screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            drawerPosition: 'left'
        }}
            drawerContent={(props) => < ManagerCustomDrawer {...props} />}>
            <Drawer.Screen name="Mhome" component={Mhome} options={{ headerShown: false }} />
            <Drawer.Screen name="Mversion" component={Mversion} options={{ headerShown: false }} />
            <Drawer.Screen name="Mlanguage" component={Mlanguage} options={{ headerShown: false }} />
            <Drawer.Screen name="Maddcustomer" component={Maddcustomer} options={{ headerShown: false }} />
            <Drawer.Screen name="Maddservice" component={Maddservice} options={{ headerShown: false }} />
            <Drawer.Screen name="Mallservice" component={Mallservice} options={{ headerShown: false }} />
            <Drawer.Screen name="Meditservice" component={Meditservice} options={{ headerShown: false }} />
            <Drawer.Screen name="Mdatabaseversion" component={Mdatabaseversion} options={{ headerShown: false }} />
            <Drawer.Screen name="Mdatabaseplatformversion" component={Mdatabaseplatformversion} options={{ headerShown: false }} />
            <Drawer.Screen name="Mosversion" component={Mosversion} options={{ headerShown: false }} />
            <Drawer.Screen name="Mcustomer" component={Mcustomer} options={{ headerShown: false }} />
            <Drawer.Screen name="Mallmanager" component={Mallmanager} options={{ headerShown: false }} />
            <Drawer.Screen name="Maddmanager" component={Maddmanager} options={{ headerShown: false }} />
            <Drawer.Screen name="Mallsupport" component={Mallsupport} options={{ headerShown: false }} />
            <Drawer.Screen name="Maddsupport" component={Maddsupport} options={{ headerShown: false }} />
            <Drawer.Screen name="Mallusers" component={Mallusers} options={{ headerShown: false }} />
            <Drawer.Screen name="Muserrequest" component={Muserrequest} options={{ headerShown: false }} />
            <Drawer.Screen name="Mticket" component={Mticket} options={{ headerShown: false }} />
            <Drawer.Screen name="Meditsupport" component={Meditsupport} options={{ headerShown: false }} />
            <Drawer.Screen name="Meditmanager" component={Meditmanager} options={{ headerShown: false }} />
            <Drawer.Screen name="Meditcustomer" component={Meditcustomer} options={{ headerShown: false }} />

        </Drawer.Navigator>
    )
}



export default function AppNavigator({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Splash'}>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
                <Stack.Screen name="ManagerRoot" component={ManagerRoot} options={{ headerShown: false }} />
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 1,
        backgroundColor: Colors.colorwhite
    },
    menuItemsCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    circleContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 10,
    },
    profile_dp: {
        height: 30,
        width: 100,
        borderRadius: 55,
        marginLeft: 50,
    },
    touchable_opacity: {
        alignItems: 'center',
        minHeight: 20,
        marginVertical: 5,
        width: '100%',
        flexDirection: 'row'
    },
    draweritems: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        padding: 8,
        borderBottomWidth: 0.5,
        borderColor: Colors.colormaincolour,
        borderTopWidth: 0.5,
    },
    profiledraweritems: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.colorwhite,
        borderTopWidth: 0.5,
    },
    draweritems1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        padding: 8,
        borderColor: Colors.colorBlack,
        borderTopWidth: 0.5,
    },
    drawertext: {
        fontSize: 15,
        color: Colors.colorBlack,
        fontWeight: 'bold'
    },
    drawertext1: {
        fontSize: 15,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
        marginLeft: 10
    },
    Mdrawertext1: {
        fontSize: 15,
        color: Colors.colormaincolour,
        fontWeight: 'bold',
        marginLeft: 10
    },
    icontext: {
        color: Colors.colormaincolour,
        marginHorizontal: 10
    }
});