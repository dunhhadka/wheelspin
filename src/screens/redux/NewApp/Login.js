import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React,{useState,useMemo} from 'react';
import { action } from '../useredux/action';
import {useSelector} from 'react-redux'
const Login = ({navigation}) => {
     const [user,setUser]=useState({name:'',password:''})

   const selector=useSelector(state=>state);
     const login=()=>{
        const result=selector.some((item)=>{
          return item.name===user.name&&item.password===user.password
        })
        if(result)
        {
          navigation.navigate('Home')
        }
        else{
          alert('nhap sai')
        }
     }
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TextInput
        style={{
          height: 40,
          marginHorizontal: 50,
          backgroundColor: '#2A2D2E',
          borderRadius: 10,
          marginVertical: 20,
        }}
        value={user.name}
        onChangeText={(text)=>{
          setUser({
               ...user,
               name:text
          })
        }}
      />
      <TextInput
        style={{
          height: 40,
          marginHorizontal: 50,
          backgroundColor: '#2A2D2E',
          borderRadius: 10,
          marginVertical: 20,
        }}
        value={user.password}
        onChangeText={(text)=>{
          setUser({
               ...user,
              password:text
          })
        }}
      />
      <TouchableOpacity
        style={{
          width: 80,
          height: 50,
          borderRadius: 10,
          backgroundColor: 'blue',
          alignSelf: 'center',
        }}
        onPress={()=>{
          login()
        }}
      />

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
