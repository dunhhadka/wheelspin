import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Images from '../Image/Images';
import px from '../Px';
const {width, height} = Dimensions.get('window');
const Warehouse = () => {
  const Content = props => {
    return (
      <View>
        <Text style={styles.titile}>{props.text}</Text>
        <View style={styles.content}>
          <Image source={Images.Imagecontent} style={styles.imagecontent} />
          <View style={styles.info}>
            <View style={styles.city}>
              <Image source={Images.Vector} style={styles.vector} />
              <Text style={styles.namecity}>{props.product}</Text>
            </View>
            <View style={styles.location}>
              <Image source={Images.location} style={styles.imagelocation} />
              <Text style={styles.namelocation} numberOfLines={2}>
                {props.location}
              </Text>
            </View>
            <View style={styles.take}>
              <View
                style={{
                  ...styles.takeone,
                  borderColor:
                    props.text == 'Đơn hàng lẻ' ? '#009245' : '#FFC700',
                }}>
                <Text style={styles.text}>
                  {props.text == 'Đơn hàng lẻ' ? 'Đơn lẻ' : 'Đơn gộp'}
                </Text>
              </View>
              <View style={{...styles.takeone, borderWidth: null}}>
                <Text style={{...styles.text, color: 'gray'}}>2.5 km</Text>
              </View>
              <View style={{...styles.takeone, borderWidth: null}}>
                <Text style={{...styles.text, color: '#06B70D'}}>
                  {props.many}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {props.text == 'Đơn hàng gộp' && (
          <View style={styles.evaluate}>
            <Image source={Images.giohang} style={styles.giohang}/>
            <Text style={styles.DH}>5 ĐH</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Content
        text="Đơn hàng lẻ"
        product="Nồi chiên không dầu"
        many="Thu 19.400đ"
        location="HH1B. Linh Đàm - Hoàng Liệt - Hoàng Mai - Hà Nội"
      />
      <Content
        text="Đơn hàng gộp"
        product="Đơn gộp Thảo Đan Shop"
        many="Thu 150.000đ"
        location="Chung cư Vinhome City - Hoàng Hoa - Tam Dương - Hà Nội"
      />
    </View>
  );
};

export default Warehouse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17 * px,
  },
  content: {
    height: 96 * px,
    backgroundColor: '#fff',
    borderRadius: 8 * px,
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20 * px,
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
  titile: {
    fontSize: 18 * px,
    fontWeight: '600',
    color: '#4D4D4D',
    bottom: -10 * px,
  },
  evaluate: {
    flexDirection: 'row',
    position: 'absolute',
    right:10*px,
    top:50*px,
    alignItems:"center"
  },
  giohang: {
    width: 12 * px,
    height: 12 * px,
    resizeMode: 'stretch',
     marginRight:5*px
  },
  DH:{
     fontSize:11*px,
     fontWeight:'700',
     color:'#009245'
  }
});
