import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from './Image/Images';
import px from './Px';
const History = () => {
  const array = [1, 1, 1];
  return (
    <View style={styles.container}>
      {array.map((item, index) => {
        return (
          <View style={styles.content} key={index}>
            <Image source={Images.Imagecontent} style={styles.imagecontent} />
            <View style={styles.info}>
              <View style={styles.city}>
                <Image source={Images.Vector} style={styles.vector} />
                <Text style={styles.namecity}>
                  Giao giấy tờ công ty TNHH Outtech
                </Text>
              </View>
              <View style={styles.location}>
                <Image source={Images.location} style={styles.imagelocation} />
                <Text style={styles.namelocation} numberOfLines={2}>
                  HH1B. Linh Đàm - Hoàng Liệt - Hoàng Mai - Hà Nội
                </Text>
              </View>
              <View style={styles.take}>
                <View style={styles.takeone}>
                  <Text style={styles.text}>Nhận đơn</Text>
                </View>
                <View style={{...styles.takeone, borderWidth: null}}>
                  <Text style={{...styles.text, color: 'gray'}}>2.5 km</Text>
                </View>
                <View style={{...styles.takeone, borderWidth: null}}>
                  <Text style={{...styles.text, color: '#06B70D'}}>
                    Thu 69.400đ
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24 * px,
  },
  content: {
    height: 96 * px,
    backgroundColor: '#fff',
    borderRadius: 8 * px,
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15 * px,
  },
  imagecontent: {
    width: 96 * px,
    height: 96 * px,
    resizeMode: 'stretch',
  },
  info: {
    flex: 1,
    height: '100%',
    marginLeft: 13 * px,
  },
  city: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  vector: {
    width: 12 * px,
    height: 12 * px,
    resizeMode: 'stretch',
  },
  namecity: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#333',
    marginLeft: 2 * px,
  },
  location: {
    marginRight: 18 * px,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 3 * px,
  },
  imagelocation: {
    width: 7 * px,
    height: 10 * px,
    resizeMode: 'stretch',
    marginTop: 4 * px,
  },
  namelocation: {
    fontSize: 11 * px,
    fontWeight: '400',
    color: '#828282',
    marginLeft: 5 * px,
  },
  take: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5 * px,
  },
  takeone: {
    width: '33%',
    height: 20 * px,
    borderWidth: 1,
    borderColor: '#009245',
    borderRadius: 3 * px,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 11 * px,
    fontWeight: '400',
    color: '#000000',
  },
});
