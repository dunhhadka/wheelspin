import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { actions } from '../redux/actions';
const Setting = () => {
  const dispatch=useDispatch()
  const selector=useSelector(state=>state)
  console.log(selector)
  const handle = () => {
    dispatch(actions(1))
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Text>setting</Text>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          borderRadius: 50,
          alignSelf: 'center',
        }}
        onPress={() => {handle()}}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
