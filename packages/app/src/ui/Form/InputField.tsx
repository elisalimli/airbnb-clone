import * as React from "react";
import { useField } from "formik";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
  TextInputProps,
  StyleSheet,
} from "react-native";
import { RegisterFormValues } from "@abb/controller";

type OnBlurType =
  | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
  | undefined;

type OnChangeTextType = ((text: string) => void) | undefined;

type InputFieldProps = {
  fieldName: keyof RegisterFormValues;
} & TextInputProps;

const InputField: React.FC<InputFieldProps> = ({ fieldName, ...props }) => {
  const [{ onBlur, onChange, value }, { error, touched }] = useField(fieldName);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="username"
        value={value}
        onChangeText={onChange(fieldName) as OnChangeTextType}
        onBlur={onBlur(fieldName) as OnBlurType}
        {...props}
      />
      {error && touched && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default InputField;
