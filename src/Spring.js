import React, { useRef } from "react";
import { View, Animated, TouchableHighlight, Text } from "react-native";

const style = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

export default function Spring() {
  const springValue = useRef(new Animated.Value(0.6)).current;

  const animate = () => {
    springValue.setValue(0.6);
    Animated.spring(springValue, {
      toValue: 1.2,
      friction: 0.8
    }).start();
  };

  return (
    <View style={style}>
      <TouchableHighlight style={{ marginBottom: 100 }} onPressIn={animate}>
        <Text>Click to spring</Text>
      </TouchableHighlight>
      <Animated.Image
        style={{
          width: 200,
          height: 200,
          transform: [{ scale: springValue }]
        }}
        source={{
          uri:
            "https://cdn.imgbin.com/1/9/13/imgbin-clark-kent-cartoon-superhero-superman-superman-1u2GU2y0Jd01DnZttsuEdUMjH.jpg"
        }}
      />
    </View>
  );
}
