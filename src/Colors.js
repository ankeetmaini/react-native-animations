import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, PanResponder } from "react-native";

export default function Colors() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedColor = animatedValue.interpolate({
    inputRange: [0, 150],
    outputRange: ["rgb(0, 0, 0)", "rgb(51, 250, 170)"]
  });
  const animatedStyle = {
    backgroundColor: animatedColor,
    transform: [{ translateY: animatedValue }]
  };

  // didMount
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 150,
      duration: 1000
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100
  }
});
