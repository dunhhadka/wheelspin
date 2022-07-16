import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo, useEffect} from 'react';

const API = ({handle}) => {
  console.log(20);
 
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'blue',
          borderRadius: 30,
        }}
        onPress={()=>{
          handle(500)
        }}
      />
    </View>
  );
};

export default memo(API);

const styles = StyleSheet.create({});
