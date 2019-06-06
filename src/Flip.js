import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity
} from "react-native";

export default function Flip() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  let _value = useRef(true).current;

  animatedValue.addListener(({ value }) => {
    _value = value;
  });

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"]
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"]
  });
  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0]
  });
  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1]
  });
  const flip = () => {
    if (_value >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  };

  const frontAnimatedStyle = { transform: [{ rotateY: frontInterpolate }] };
  const backAnimatedStyle = { transform: [{ rotateY: backInterpolate }] };
  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={[
            styles.flipCard,
            frontAnimatedStyle,
            { opacity: frontOpacity }
          ]}
        >
          <Text style={[styles.flipText]}>
            This text is flipping on the front
          </Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.flipCard,
            styles.flipCardBack,
            backAnimatedStyle,
            { opacity: backOpacity }
          ]}
        >
          <Text style={[styles.flipText]}>
            This text is flipping on the back
          </Text>
        </Animated.View>
      </View>
      <TouchableOpacity style={styles.button} onPress={flip}>
        <Text>Flip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue"
  },
  flipCard: {
    padding: 20,
    backgroundColor: "red",
    justifyContent: "center",
    height: 40
  },
  flipCardBack: {
    backgroundColor: "blue",
    position: "absolute",
    top: 0
  },
  flipText: {
    color: "white"
  },
  button: {
    marginTop: 40,
    backgroundColor: "yellow",
    padding: 30
  }
});
