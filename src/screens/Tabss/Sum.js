import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Setting from './Setting';
const Stack=createNativeStackNavigator()
const Sum = () => {
  return (
    <Stack.Navigator screenOptions={{
         headerShown:false
    }}>
     <Stack.Screen name='Home' component={Home}/>
     <Stack.Screen name='Setting' component={Setting}/>
    </Stack.Navigator>
  );
};

export default Sum;

const styles = StyleSheet.create({});
