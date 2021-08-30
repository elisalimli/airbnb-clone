import { Text, View } from "react-native";
import {
  HomeParamList,
  HomeStackNavProps,
} from "../types/navigations/HomeParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<HomeParamList>();

const Feed: React.FC<HomeStackNavProps<"Feed">> = ({ navigation }) => (
  <View>
    <Text>Feed section</Text>
  </View>
);

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};
export default HomeStack;
