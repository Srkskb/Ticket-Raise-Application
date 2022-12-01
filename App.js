import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  AppRegistry
} from 'react-native';

import Route from './src/router/route'




const App= () => {

  return (
   <View style={{flex:1}}>
     <Route/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;