import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';

const AterDelete = props => {
  return (
    <Modal transparent={true} visible={props.after}>
      <View
        style={{
          width: 200,
          height: 100,
          backgroundColor: 'blue',
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 300,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <Text>ĐÃ XÓA</Text>
        </View>
    </Modal>
  );
};

export default AterDelete;

const styles = StyleSheet.create({});
