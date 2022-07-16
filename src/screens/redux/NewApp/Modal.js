import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';

const Modal1 = (props) => {
     const hide=()=>{
          props.hidemodal()
     }
     const delete1=()=>{
          props.deletedata()
          hide()
     }
  return (
    <Modal transparent={true} visible={props.showmodal}>
      <View
        style={{
          width: 200,
          height: 100,
          backgroundColor: '#78B361',
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 200,
        }}>
        <Text style={{alignSelf: 'center', marginTop: 10, color: 'red'}}>
          YOU WANT DELETE
        </Text>
        <View style={{height: 60, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: '50%',
              borderRightWidth: 0.5,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={()=>{
               delete1()
            }}
            >
            <Text>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              borderLeftWidth:0.5,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={()=>{
               hide()
            }}
            >
            <Text>NO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modal1;

const styles = StyleSheet.create({});
