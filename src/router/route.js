import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';


import Splash from '../screens/splash';
import Onboard from '../screens/onboarding';
import Practise from '../screens/practise';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Drawer = createDrawerNavigator();

// function Root() {
//   return (
{/* <Drawer.Navigator
  screenOptions={{
    headerShown: false,
    drawerStyle: {
      backgroundColor: 'transparent',
    },
    drawerPosition: 'right'
  }}>
  <Drawer.Screen name="Home" component={Home} />

</Drawer.Navigator> */}
//   );
// }


export default function AppNavigator({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Securitypin'}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Practise"
          component={Practise}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}