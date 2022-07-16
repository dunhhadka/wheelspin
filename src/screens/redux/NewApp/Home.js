import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Animated,
  Easing,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {action} from '../useredux/action';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import Modal1 from './Modal';
import AterDelete from './AterDelete';
import Login from './Login';
import Loading from './Loading';
import {callAPI} from './API';
import {floor} from 'react-native-reanimated';
const width = Dimensions.get('window').width;
const Home = ({navigation}) => {
  const [Data, setData] = useState([]);
  const [showmodal, setShowmodal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [after, setAter] = useState(false);
  const [id, setId] = useState();
  const [Datasear, setDatasear] = useState([]);
  const Imagess = [1, 2, 3, 4, 5, 6];
  const animation = useRef(new Animated.Value(0)).current;

  const hidemodal = () => {
    setShowmodal(false);
  };
  const show = id => {
    setShowmodal(true);
    setId(id);
  };
  const deletedata = async () => {
    await axios({
      method: 'DELETE',
      url: `https://thaoquan.herokuapp.com/api/user/delete/${id}`,
    })
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    call();
    setAter(true);
    setTimeout(() => {
      setAter(false);
    }, 3000);
  };
  const call = () => {
    setLoading(true);
    callAPI().then(res => {
      
      setData(res.data.data.userList);
      setDatasear(res.data.data.userList);
      console.log(res.data.data.userList)
      setLoading(false);
    });
  };

  const search = text => {
    if (!text) {
      setDatasear(Data);
    } else {
      setDatasear(
        Data.filter(e => e.username.toLowerCase().includes(text.toLowerCase())),
      );
    }
  };
  useEffect(() => {
    call();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{alignSelf: 'center'}}>
        <Text>UserList</Text>
      </View>
      <Animated.View
        style={{
          height: 45,
          backgroundColor: '#939393',
          borderRadius: 20,
          paddingLeft: 10,
          opacity: animation.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0],
          }),
        }}>
        <TextInput
          placeholder="search"
          style={{color: 'black'}}
          onChangeText={text => {
            search(text);
          }}
        />
      </Animated.View>
      <FlatList
        data={Datasear}
        onScroll={e => {
          animation.setValue(e.nativeEvent.contentOffset.y);
          console.log(animation);
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                height: 80,
                borderRadius: 10,
                backgroundColor: '#414141',
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}
              onPress={() => {
                navigation.navigate('Setting', item);
              }}>
              <Image
                source={{uri: item.avatar}}
                style={{width: 60, height: 60, borderRadius: 30}}
              />
              <Text style={{marginLeft: 50}}>{item.username}</Text>
              <TouchableOpacity
                style={{position: 'absolute', right: 10}}
                onPress={() => {
                  show(item._id);
                }}>
                <Image
                  source={require('../NewApp/delete.png')}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
      <Modal1
        showmodal={showmodal}
        hidemodal={hidemodal}
        deletedata={deletedata}
      />
      <Loading loading={loading} />
      <AterDelete after={after} />
    </View>
  );
};
const Setting = ({navigation}) => {
  // const data = route.params;
  const Imag = [1, 2, 3, 4, 5, 6];
  const [dos, setDos] = useState(0);
  const vitri=useRef(new Animated.Value(0)).current
  const scrollX = useRef(new Animated.Value(0)).current;
  const ScrollRef = useRef(0);
  const showdog = e => {
    const valueimage = e.nativeEvent.contentOffset.x;
    const index = (valueimage + width / 2) / width;
    setDos(Math.floor(index));
  };
 useEffect(()=>{
  Animated.timing(
    vitri,
    {
      toValue:1,
      duration:3000,
      useNativeDriver:false,
    },

  ).start()
 },[])
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{marginTop: 50}}>
        <Animated.ScrollView
          horizontal
         ref={ScrollRef}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}>
          {Imag.map((item, index) => {
            const input = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [0, -50, 0],
            });
            return (
              <Animated.View
                style={{
                  elevation: 20,
                  transform: [{translateY: input}],
                  marginTop: 50,
                 
                }}
                key={index}>
                <Image
                  style={{
                    width: 300,
                    height: 200,
                    resizeMode: 'stretch',
                    marginHorizontal: (width - 300) / 2,
                  }}
                  source={require('./viewback.png')}
                />
              </Animated.View>
            );
          })}
        </Animated.ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
          }}>
          {Imag.map((item, index) => {
            return (
              <Text
                style={{
                  marginHorizontal: 5,
                  fontSize: 8,
                  color: index === dos ? 'white' : '#C8C8C8',
                }}
                key={index}>
                ●
              </Text>
            );
          })}
        </View>
      </View>
      <Button
        title="this is button "
        onPress={() => {
          navigation.navigate('Scroll');
        }}
      />
    </View>
  );
};
const Scroll = () => {
  const array = [1, 2, 4, 3, 3, 3, 3, 3, 3, 3];

  const ScrollRef = useRef(0);
  const [vitri, setvitri] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setvitri(vitri + 180);
      ScrollRef.current.scrollTo({
        x: 0,
        y: vitri,
        animated: true,
      });
      if (vitri > 1000) {
        setvitri(0);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [vitri]);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView ref={ScrollRef}>
        {array.map((item, index) => {
          return (
            <View
              style={{
                height: 100,
                borderRadius: 20,
                backgroundColor: index % 2 == 0 ? 'red' : 'blue',
                marginBottom: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={index}>
              <Text style={{fontSize: 50}}>{index}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const Stack = createNativeStackNavigator();
const Sum = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Setting" component={Setting} />

      <Stack.Screen name="Scroll" component={Scroll} />
    </Stack.Navigator>
  );
};
export default Sum;
const styles = StyleSheet.create({});
