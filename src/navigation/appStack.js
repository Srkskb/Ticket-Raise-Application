import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginStack from './loginStack';
import SplashScreen from '../splashScreen/SplashScreen';
import { navigationRef } from './rootNavigation';
import MainScreen from '../screen/Main_Screen/MainScreen';

const Stack = createStackNavigator();

class AppStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        let initialRoute = 'SplashScreen';


        return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator screenOptions={{ ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS) }} initialRouteName={initialRoute}>
                <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                <Stack.Screen
                        name="LoginStack"
                        component={LoginStack}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default AppStack;