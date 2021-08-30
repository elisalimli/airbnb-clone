import React from "react";
import { Provider } from "urql";
import Routes from "./routes/Routes";
import { client } from "./utils/urqlClient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

const App = () => {
  return (
    <Provider value={client}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Routes />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
