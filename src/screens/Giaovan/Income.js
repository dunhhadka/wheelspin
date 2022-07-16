import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from './Image/Images';
import px from './Px';
const {width, height} = Dimensions.get('window');
const Income = () => {
  const ar = [1, 1, 1];
  return (
    <View style={styles.container}>
      <View style={styles.totalincome}>
        <Image source={Images.Imagetotal} style={styles.total} />
        <View style={styles.content}>
          <View style={styles.viewtotal}>
            <Text style={styles.texttotal}>Tổng thu nhập</Text>
            <Text style={styles.sum}>125.000 đ</Text>
          </View>
          <View style={styles.viewupaid}>
            <Text style={styles.unpaid}> Triết khấu chưa thanh toán</Text>
            <Text style={styles.value}>37.500 đ</Text>
            <TouchableOpacity style={styles.viewpay}>
              <Text style={styles.textpay}>Thanh toán</Text>
              <Image source={Images.check} style={styles.check} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {ar.map((item, index) => {
        return (
          <View style={styles.checkpay} key={index}>
            <Image source={Images.Vector} style={styles.vector} />
            <View style={styles.info}>
              <Text style={styles.namecity}>
                Giao giấy tờ công ty TNHH Outtech
              </Text>
              <Text style={styles.namelocation} numberOfLines={2}>
                HH1B. Linh Đàm - Hoàng Liệt - Hoàng Mai - Hà Nội
              </Text>
            </View>
            <Text style={styles.textpayone}>Thu: 25.000đ</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Income;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    paddingHorizontal: 13 * px,
  },
  totalincome: {
    height: 148 * px,
    marginTop: 10 * px,
    elevation: 0.1,
    marginBottom: 10,
  },
  total: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingTop: 14 * px,
  },
  texttotal: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#333333',
  },
  sum: {
    fontSize: 21 * px,
    fontWeight: '700',
    color: '#289E49',
    marginTop: 10 * px,
  },
  viewtotal: {
    marginLeft: 24 * px,
  },
  unpaid: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#333333',
  },
  value: {
    fontSize: 21 * px,
    fontWeight: '700',
    color: '#DE0923',
    marginTop: 10 * px,
  },
  viewupaid: {
    flex: 1,
    marginLeft: 20,
    alignItems: 'center',
  },
  viewpay: {
    width: 130 * px,
    height: 32 * px,
    backgroundColor: '#1DA735',
    borderRadius: 8 * px,
    marginTop: 10 * px,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3 * px,
    justifyContent: 'space-around',
  },
  textpay: {
    fontSize: 18 * px,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 4 * px,
  },
  check: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  checkpay: {
    height: 60 * px,
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 8 * px,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3 * px,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  vector: {
    width: 32 * px,
    height: 32 * px,
    resizeMode: 'stretch',
  },
  info: {
    marginLeft: 22 * px,
    width: 238 * px,
  },
  namecity: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#333',
  },
  namelocation: {
    fontSize: 11 * px,
    fontWeight: '400',
    color: '#828282',
  },
  textpayone: {
    fontSize: 11 * px,
    fontWeight: '700',
    color: '#289E49',
    top: -10 * px,
    right: -5 * px,
  },
});
