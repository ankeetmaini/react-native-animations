import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, PanResponder } from "react-native";

export default function Draggable() {
  let updatedValue = useRef({ x: 0, y: 0 }).current;
  const animatedValue = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        animatedValue.setOffset(updatedValue);
        animatedValue.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: animatedValue.x, dy: animatedValue.y }
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        animatedValue.flattenOffset();
        Animated.decay(animatedValue, {
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      }
    })
  ).current;

  // events
  animatedValue.addListener(v => (updatedValue = v));
  // styles
  const animatedStyle = {
    transform: animatedValue.getTranslateTransform()
  };
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, animatedStyle]}
      >
        <Text style={styles.text}>Drag Me</Text>
      </Animated.View>
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
  },
  text: {
    color: "#fff"
  }
});
