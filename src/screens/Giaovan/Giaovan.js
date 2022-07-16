import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from './Index';
import Images from './Image/Images';
import px from './Px';
const Tabbottom = createBottomTabNavigator();
const Giaovan = () => {
  const Tab = [
    {
      name: 'Đơn hàng',
      image: Images.order,
      component: Index,
    },
    {
      name: 'Thu nhập',
      image: Images.income,
      component: Index,
    },
    {
      name: 'Tin nhắn',
      image: Images.message,
      component: Index,
    },
    {
      name: 'Giao vận',
      image: Images.giaovan,
      component: Index,
    },
    {
      name: 'Ví tiền',
      image: Images.wallet,
      component: Index,
    },
    {
      name: 'Cá nhân',
      image: Images.user,
      component: Index,
    },
  ];
  const TabButton = props => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={item.image}
          style={{...styles.imageicon, tintColor: focused ? '#0B9621' : '#BDBDBD'}}
        />
        <Text style={{...styles.textname,color:focused ? '#FFC700' : '#BDBDBD'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Tabbottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 70 * px,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}>
      {Tab.map((item, index) => {
        return (
          <Tabbottom.Screen
            name={item.name}
            component={item.component}
            key={index}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tabbottom.Navigator>
  );
};

export default Giaovan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageicon: {
    width: 28 * px,
    height: 28 * px,
    resizeMode: 'stretch',
  },
  textname: {
    fontSize: 11 * px,
    fontWeight: '600',
  },
});
