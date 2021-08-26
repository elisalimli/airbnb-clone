import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { add } from "@abb/common";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app heey {add(5, 4)} !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
