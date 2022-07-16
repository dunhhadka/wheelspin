import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity style={{width:100,height:100,borderRadius:20,backgroundColor:'red'}} onPress={()=>{
        navigation.navigate('Setting',{
          email:"ha van dung"
        })
      }}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})