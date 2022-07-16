import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Provider} from 'react-redux';

import Draws from './src/screens/Tabss/Draws';
// import Index from './src/screens/MobileApp/Index';
import NEW from './src/screens/useEffect/NEW';
import Rotation from './src/screens/Rotation/Rotation';
import Giaovan from './src/screens/Giaovan/Giaovan';
const App = () => {
  return (
    <NavigationContainer>
      <Giaovan/>
    </NavigationContainer>
  );
}
export default App
