import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import Register from "../modules/routes/Register";
import {
  AuthNavProps,
  AuthParamList,
} from "../types/navigations/AuthParamList";

const Stack = createNativeStackNavigator<AuthParamList>();

const Login: React.FC<AuthNavProps<"Login">> = ({ navigation }) => {
  return (
    <View>
      <Text>I am a login screen</Text>
      <Button title="Sign in" onPress={() => {}} />
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Register"
    >
      <Stack.Screen
        options={{ headerTitle: "Sign in" }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
export default AuthStack;
