import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from './Settings';
const Tab=createDrawerNavigator()
const Draws = () => {
  return (
   <Tab.Navigator screenOptions={{
     headerShown:false
   }}>
     <Tab.Screen name='Home' component={Settings}/>
   </Tab.Navigator>
  )
}

export default Draws

const styles = StyleSheet.create({})