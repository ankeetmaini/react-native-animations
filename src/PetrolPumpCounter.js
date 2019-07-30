import React, { useEffect } from "react";

import { View, StyleSheet, Text, Animated } from "react-native";

const getPosition = (number, height) => number * height * -1;
const Digit = ({ value }) => {
  const [height, setHeight] = React.useState(0);
  const position = React.useRef(new Animated.Value(getPosition(value, height)))
    .current;
  const numbers = Array.from({ length: 9 }).map((_, i) => i);
  const onLayout = e => {
    setHeight(e.nativeEvent.layout.height);
  };

  useEffect(() => {
    Animated.timing(position, {
      toValue: getPosition(value, height),
      duration: 500
    }).start();
  }, [height]);

  return (
    <View>
      <View style={[{ overflow: "hidden", height }]}>
        <Animated.View style={{ transform: [{ translateY: position }] }}>
          {numbers.map(n => (
            <Text key={n} style={{ fontSize: 80, color: "red" }}>
              {n}
            </Text>
          ))}
          <Text style={{ fontSize: 80, opacity: 0 }} onLayout={onLayout}>
            0
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default function Counter() {
  // const [v, setV] = React.useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setV(v => v + 1);
  //   }, 800);
  //   return () => clearInterval(interval);
  // }, []);
  // console.log(v % 10);
  const number = 1000;
  return (
    <View style={styles.container}>
      {"14356"
        .split("")
        .reverse()
        .map((v, i) => (
          <Digit value={Number(v)} />
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
