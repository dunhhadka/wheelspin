import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import px from './Px';
import Warehouse from './Goods/Warehouse';
import Order from './Goods/Order';
import Manage from './Goods/Manage';
const {width, height} = Dimensions.get('window');
const Goods = () => {
  const [Showcontent, setShowcontent] = useState(1);
  return (
    <View>
      <View style={styles.title}>
        <TouchableOpacity
          style={{
            ...styles.order,
            backgroundColor: Showcontent == 1 ? '#009245' : null,
          }}
          onPress={() => {
            setShowcontent(1);
          }}>
          <Text
            style={{
              ...styles.textorder,
              color: Showcontent == 1 ? '#FFC700' : '#4F4F4F',
            }}>
            Đơn nhập kho
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.order,
            backgroundColor: Showcontent == 2 ? '#009245' : null,
          }}
          onPress={() => {
            setShowcontent(2);
          }}>
          <Text
            style={{
              ...styles.textorder,
              color: Showcontent == 2 ? '#FFC700' : '#4F4F4F',
            }}>
            Giao đơn
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.order,
            backgroundColor: Showcontent == 3 ? '#009245' : null,
          }}
          onPress={() => {
            setShowcontent(3);
          }}>
          <Text
            style={{
              ...styles.textorder,
              color: Showcontent == 3 ? '#FFC700' : '#4F4F4F',
            }}>
            Quản lý
          </Text>
        </TouchableOpacity>
      </View>
      {
          Showcontent==1&&<Warehouse/>
      }
      {
          Showcontent==2&&<Order/>
      }
      {
          Showcontent==3&&<Manage/>
      }
    </View>
  );
};

export default Goods;

const styles = StyleSheet.create({
  title: {
    width,
    height: 32 * px,
    marginTop: 35 * px,
    paddingHorizontal: 12 * px,
    flexDirection: 'row',
    marginBottom: 15 * px,
    justifyContent: 'space-around',
  },
  order: {
    width: '30%',
    borderRadius: 8 * px,
    borderColor: '#06B70D',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#009245',
  },
  textorder: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#4F4F4F',
  },
});
