import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Images from '../Image/Images';
import px from '../Px';
const {width, height} = Dimensions.get('window');
const Order = () => {
  const Content = props => {
    return (
      <View>
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
                 
                }}>
                <Text style={styles.text}>
                  {`Gợi ý thứ tự giao : ${props.number}`}
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
        {props.number == 2 && (
          <View style={styles.evaluate}>
            <Image source={Images.Frame} style={styles.frame}/>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Content 
      product="Nồi chiên không dầu"
      many="Thu 19.400đ"
      location="HH1B. Linh Đàm - Hoàng Liệt - Hoàng Mai - Hà Nội"
      number={1}
      />
      <Content 
      product="Nồi chiên không dầu"
      many="Thu 19.400đ"
      location="HH1B. Linh Đàm - Hoàng Liệt - Hoàng Mai - Hà Nội"
      number={2}
      />
      <Content 
      product="Nồi chiên không dầu"
      many="Thu 19.400đ"
      location="HH1B. Linh Đàm - Hoàng Liệt - Hoàng Mai - Hà Nội"
      number={3}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17 * px,
  },
  content: {
    height: 96 * px,
    backgroundColor: '#fff',
    borderRadius: 8 * px,
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10*px
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
    justifyContent:'space-around'
  },
  takeone: {
    paddingHorizontal:5*px,
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
  evaluate:{
     position:'absolute',
     right:10*px,
     top:15*px
  },
  frame:{
     height:15*px,
     width:40*px,
     resizeMode:'stretch'
  }
});
