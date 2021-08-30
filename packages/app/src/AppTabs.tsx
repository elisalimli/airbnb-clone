import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStack from "./stacks/HomeStack";
import { TabsParamList } from "./types/navigations/TabsParamList";

const Tabs = createBottomTabNavigator<TabsParamList>();

const AppTabs: React.FC = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home-sharp" : "home-outline";
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
    </Tabs.Navigator>
  );
};
export default AppTabs;
