import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RegisterController } from "../../../controller/dist";
import { useRegisterMutation } from "../generated/graphql";
import RegisterView from "../modules/views/RegisterView";
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

const Register: React.FC<AuthNavProps<"Register">> = () => {
  const [, register] = useRegisterMutation();
  return (
    <RegisterController register={register}>
      {(submit) => (<RegisterView onSubmit={submit} />) as any}
    </RegisterController>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{ header: () => null }}
      initialRouteName="Register"
    >
      <Stack.Screen
        options={{ headerTitle: "Sign in" }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
