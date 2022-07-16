import { StyleSheet, Text, View } from 'react-native'
import React,{memo} from 'react'

const Class = ({count}) => {
     console.log('re-render')
  return (
    <View>
      <Text>Class</Text>
    </View>
  )
}

export default memo(Class)

const styles = StyleSheet.create({})