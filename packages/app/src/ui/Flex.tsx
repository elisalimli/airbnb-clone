import { View, ViewProps } from "react-native";
import React from "react";

interface FlexProps extends ViewProps {
  flex: number;
}

const Flex: React.FC<FlexProps> = ({ flex, children }) => (
  <View style={{ flex }}>{children}</View>
);

export default Flex;
