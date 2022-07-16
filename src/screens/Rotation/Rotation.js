import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune';
const {width, height} = Dimensions.get('window');
const participants = ['FREE', '10%', '20%', '30%', '40%', '50%', '80%', '100%'];
const iconRewards = [
  require('./star.png'),
  require('./house.png'),
  require('./like.png'),
  require('./gift.png'),
  require('./ticket.png'),
  require('./ticket.png'),
  require('./lucky.png'),
  require('./house.png'),
];
const Rotation = () => {
  const [child, setChild] = useState(null);

  const [winnervalue, setWinnervalue] = useState(null);
  const [winnerindex, setWinnerindex] = useState(null);
  const [showafter, setshowafter] = useState(false);
  const [number, setnumber] = useState(20);

  const wheelOptions = {
    color: 'red',
    rewards: participants,
    iconRewards,
    knobSize: 25,
    borderWidth: 5,
    borderColor: '#F36911',
    innerRadius: 15,
    duration: 5000,

    backgroundColor: 'transparent',
    textAngle: 'horizontal',
    knobSource: require('./knob2.png'),
    onRef: ref => setChild(ref),
  };
  const onpressAgain = () => {
    if (number >= 1) {
      setnumber(k => k - 1);
      child._tryAgain();
    }
  };
  const choosewinner = value => {
    setWinnervalue(value);
    setshowafter(true);
  };
  useEffect(() => {
    if (setshowafter) {
      setTimeout(() => {
        setshowafter(false);
      }, 3000);
    }
  }, [showafter]);
  const After = () => {
    const anima = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(anima, {
        toValue: 1,
        duration: 1000,
        
        useNativeDriver: false,
        easing:Easing.bounce
      }).start();
    }, []);
    return (
      <View style={styles.after}>
        <Animated.View style={{...styles.winner,top:5,opacity:anima.interpolate({
          inputRange:[0,1],
          outputRange:[0,1]
        }),
      }}>
          <Text style={styles.textwin}>Xin chúc mừng bạn được giảm </Text>
          <Text style={styles.value}>{winnervalue}</Text>
        </Animated.View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.lining}></View>
      <View
        style={{
          position: 'absolute',
          width,
          height,
          alignItems: 'center',
          elevation:10
        }}>
        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            choosewinner(value);
          }}
        />
        <TouchableOpacity
          style={styles.turn}
          onPress={() => {
            onpressAgain();
          }}>
          <Text style={styles.text}>QUAY THƯỞNG</Text>
        </TouchableOpacity>
        <View style={styles.remainting}>
          <Text style={styles.number}>Số lần còn lại :</Text>
          <Text style={{...styles.number, color: 'blue'}}>{number}</Text>
        </View>
        {showafter && <After />}
      </View>
    </View>
  );
};

export default Rotation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  turn: {
    width: 120,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'yellow',
    top: -70,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    fontSize: 13,
    fontWeight: '700',
    color:'black'
  },
  after: {
    width,
    height,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  remainting: {
    width,
    height: 100,
    position: 'absolute',
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  number: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  winner: {
    width,
    height: 200,
    top: -100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textwin: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  value: {
    fontSize: 25,
    fontWeight: '600',
    color: 'yellow',
  },
  lining: {
    width: width - 80,
    height: width - 80,
    backgroundColor: '#FEE36E',
    borderRadius: (width - 10) / 2,
    top: -30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
});
