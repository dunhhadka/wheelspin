import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Animated
} from 'react-native';
import React, {useState, useEffect,useRef} from 'react';
import axios from 'axios';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const holizon = 20;
const verticall = 20;
const NEW = () => {
  const [data, setData] = useState([]);
  const Call = async (methor, type) => {
    return await axios({
      method: methor,
      url: `https://thaoquan.herokuapp.com/api/user`,
      data: null,
    }).catch(err => {
      console.log(err);
    });
  };
  useEffect(() => {
    Call('GET', '').then(res => {
      setData(res.data.data.userList);
    });
  }, []);
  const scrollY=useRef(new Animated.Value(0)).current

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <Animated.FlatList
      onScroll={Animated.event(
        [{nativeEvent:{contentOffset:{y:scrollY}}}],
        {useNativeDriver:false}
      )}
        data={data}
        renderItem={({item, index}) => {
          const inputRange=[
            0,0,index*120,(index+2)*120
          ]

          const scale=scrollY.interpolate({
            inputRange,
            outputRange:[1,1,1,0]
          })
          return (
            
            <Animated.View
              key={index}
              style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: 15,
                alignItems: 'center',
                padding: holizon,
                flexDirection: 'row',
                marginBottom: verticall,
                transform:[{scale}]
              }}>
              <Image
                source={{uri: item.avatar}}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 20, color: 'black'}}>
                  {item.username}
                </Text>
                <Text style={{color: 'black', opacity: 0.5}}>{item._id}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default NEW;

const styles = StyleSheet.create({});
