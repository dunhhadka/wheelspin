import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Images from './Image/Images';
import styles from './StylesIndex';
import History from './History';
import Income from './Income';
import Goods from './Goods';
const Index = () => {
  const [Showcontent, setShowcontent] = useState(1);
  const [show, setshow] = useState(1);
  const Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const Content = () => {
    return (
      <View style={styles.content}>
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
  };
  return (
    <View style={styles.container}>
      {show == 1 && (
        <ImageBackground source={Images.background} style={styles.backgroud} />
      )}
      <View style={{position: 'absolute'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              ...styles.flash,
              borderTopLeftRadius: 10,
              backgroundColor: show == 1 ? '#06B70D' : null,
            }}
            onPress={() => {
              setshow(1);
            }}>
            <Text
              style={{
                ...styles.textflash,
                color: show == 1 ? '#FFC700' : '#009245',
              }}>
              Thần tốc
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.flash,
              borderTopRightRadius: 10,
              backgroundColor: show == 2 ? '#06B70D' : null,
            }}
            onPress={() => {
              setshow(2);
            }}>
            <Text
              style={{
                ...styles.textflash,
                color: show == 2 ? '#FFC700' : '#009245',
              }}>
              Hàng hóa
            </Text>
          </TouchableOpacity>
        </View>
        {show == 1 && (
          <View>
            <View style={styles.title}>
              <TouchableOpacity
                style={{
                  ...styles.order,
                  borderWidth: Showcontent == 1 ? 1.5 : 1,
                  borderColor: Showcontent == 1 ? '#009245' : '#fff',
                }}
                onPress={() => {
                  setShowcontent(1);
                }}>
                <Text style={styles.textorder}>Đơn hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.order,
                  borderWidth: Showcontent == 2 ? 1.5 : 1,
                  borderColor: Showcontent == 2 ? '#009245' : '#fff',
                }}
                onPress={() => {
                  setShowcontent(2);
                }}>
                <Text style={styles.textorder}>Lịch sử</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.order,
                  borderWidth: Showcontent == 3 ? 1.5 : 1,
                  borderColor: Showcontent == 3 ? '#009245' : '#fff',
                }}
                onPress={() => {
                  setShowcontent(3);
                }}>
                <Text style={styles.textorder}>Thu nhập</Text>
              </TouchableOpacity>
            </View>
            {Showcontent == 1 && (
              <View style={styles.body}>
                <FlatList
                  data={Array}
                  renderItem={({item, index}) => {
                    return <Content key={index} />;
                  }}
                />
              </View>
            )}
            {Showcontent == 2 && <History />}
            {Showcontent == 3 && <Income />}
          </View>
        )}
        {
          (show==2)&&<Goods/>
        }
      </View>
    </View>
  );
};

export default Index;
