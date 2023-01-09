import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, AppRegistry} from 'react-native';
import Route from './src/route/route';
const App= () => {
  return (
   <View style={{flex:1}}>
    <Route />
    </View>
  );
};
export default App;