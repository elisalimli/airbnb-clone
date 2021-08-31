import React from "react";
import { Text, View } from "react-native";
import {
  HomeParamList,
  HomeStackNavProps,
} from "../types/navigations/HomeParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMeQuery } from "../generated/graphql";

const Stack = createNativeStackNavigator<HomeParamList>();

const Feed: React.FC<HomeStackNavProps<"Feed">> = ({ navigation }) => {
  const [{ data }] = useMeQuery();

  return (
    <View>
      <Text>Feed section {data?.me?.username}</Text>
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
