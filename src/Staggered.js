import React, { useRef, useEffect } from "react";
import { View, Animated, Text, Easing } from "react-native";

export default function Sequence() {
  const elements = Array.from({ length: 500 }).map((_, i) => i);
  const animations = useRef(elements.map(() => new Animated.Value(0))).current;

  const animate = () => {
    const allAnimations = animations.map(a =>
      Animated.timing(a, {
        toValue: 1,
        duration: 4000
      })
    );
    Animated.stagger(10, allAnimations).start();
  };

  useEffect(animate, []);
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1 }}>
      {elements.map(k => (
        <Animated.Text
          key={k}
          style={{
            width: 20,
            height: 20,
            margin: 2,
            backgroundColor: "red",
            opacity: animations[k]
          }}
        />
      ))}
    </View>
  );
}
