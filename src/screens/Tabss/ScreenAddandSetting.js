import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Setting from './Setting';
import Add from './Add';
const Stack=createNativeStackNavigator()
const ScreenAdd=()=>{
     return(
          <Stack.Navigator screenOptions={{
               headerShown:false,
          }}>
               <Stack.Screen name='Seeting' component={Setting}/>
               <Stack.Screen name='Add' component={Add}/>
          </Stack.Navigator>
     )
}
export default ScreenAdd