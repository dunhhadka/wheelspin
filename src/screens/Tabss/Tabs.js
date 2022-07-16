import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tabss = ({name,age}) => {
  return (
   <View>
     <Text>{name}</Text>
     <Text>{age}</Text>
   </View>
  )
}

export default Tabss

const styles = StyleSheet.create({})