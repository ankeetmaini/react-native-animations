import React, { useRef, useEffect } from "react";
import { Animated, Easing, Text, View, TouchableHighlight } from "react-native";

const createAnimation = (val, duration, easing, delay = 0) =>
  Animated.timing(val, {
    toValue: 1,
    duration,
    delay,
    easing
  });

const styleButton = {
  backgroundColor: "blue",
  color: "white",
  padding: 20
};
const styleContainer = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};
export default function Parallel() {
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;

  const animate = () => {
    animatedValue1.setValue(0);
    animatedValue2.setValue(0);
    animatedValue3.setValue(0);
    Animated.parallel([
      createAnimation(animatedValue1, 2000, Easing.ease),
      createAnimation(animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(animatedValue3, 1000, Easing.ease, 2000)
    ]).start();
  };

  useEffect(animate, []);

  const scale = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 2]
  });
  const spin = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"]
  });
  const intro = animatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 400]
  });

  return (
    <View style={styleContainer}>
      <Animated.Text
        style={{
          transform: [{ scale }]
        }}
      >
        Welcome!
      </Animated.Text>
      <Animated.View style={{ marginTop: 20, transform: [{ rotate: spin }] }}>
        <Text style={{ fontSize: 20 }}>to the App!</Text>
      </Animated.View>
      <Animated.View style={{ top: intro, position: "absolute" }}>
        <TouchableHighlight onPress={animate}>
          <View style={styleButton}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Click Here To Start
            </Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
}
