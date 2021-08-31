import { StyleSheet, View, ViewProps } from "react-native";
import React, { useMemo } from "react";

interface FlexProps extends ViewProps {
  center?: boolean;
}

const Box: React.FC<FlexProps> = ({ center, children, ...props }) => {
  const containerStyles = useMemo(
    () => [center && styles.center, props?.style],
    []
  );

  return (
    <View {...props} style={containerStyles}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Box;
