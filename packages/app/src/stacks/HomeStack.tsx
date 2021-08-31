import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  HomeParamList,
  HomeStackNavProps,
} from "../types/navigations/HomeParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";

const Stack = createNativeStackNavigator<HomeParamList>();

const Feed: React.FC<HomeStackNavProps<"Feed">> = ({ navigation }) => {
  const [{ data }] = useMeQuery();
  const [{}, logout] = useLogoutMutation();

  return (
    <View>
      <Text>Feed section | user: {data?.me?.username}</Text>
      <TouchableOpacity
        onPress={async () => {
          const res = await logout();
          console.log("res", res);
        }}
      >
        <Text>press me for logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};
export default HomeStack;
