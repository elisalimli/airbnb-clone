import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { useMemo } from "react";
import { theme } from "../../utils/theme";

type ButtonTypes = {
  primary?: boolean;
};

type ButtonProps = { type?: keyof ButtonTypes } & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  ...props
}) => {
  const buttonStyles = useMemo(
    () => [styles.general, styles[type], props.style],
    []
  );

  return (
    <TouchableOpacity {...props} style={buttonStyles}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  general: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: theme.spacing[3],
    borderRadius: theme.borderRadius[50],
  },
});

export default Button;
