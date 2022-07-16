import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = props => {
  return (
    <Modal transparent={true} visible={props.loading}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 300,
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({});
