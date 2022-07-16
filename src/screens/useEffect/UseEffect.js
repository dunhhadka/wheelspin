import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState, addEventListener} from 'react';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const UseEffect = () => {
  
  return (
    <View style={{width:width,height:height,backgroundColor:'black'}}>
      <View style={{width:50,height:50,backgroundColor:'red',marginRight:300}}/>
    </View>
  );
};

export default UseEffect;

const styles = StyleSheet.create({});
