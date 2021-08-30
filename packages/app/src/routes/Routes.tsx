import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AppTabs from "../AppTabs";
import { useMeQuery } from "../generated/graphql";
import AuthStack from "../stacks/AuthStack";

const Routes = () => {
  const [{ fetching, data, error }] = useMeQuery();

  console.log(fetching, data?.me, error);
  if (fetching) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {data?.me ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Routes;
