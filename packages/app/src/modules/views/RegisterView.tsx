import { registerSchema } from "@abb/common";
import { FormikSubmit, RegisterFormValues } from "@abb/controller";
import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import InputField from "../../ui/Form/InputField";

interface Props {
  onSubmit: FormikSubmit<RegisterFormValues>;
}

type ButtonOnPress = any;

const RegisterView: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik<RegisterFormValues>
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={async (...props) => {
        const res = await onSubmit(...props);
        console.log("submit", res);
        // if (res) router.push("/");
      }}
      validationSchema={registerSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.formContainer}>
          <InputField fieldName="username" placeholder="username" />
          <InputField fieldName="email" placeholder="email" />
          <InputField
            fieldName="password"
            placeholder="password"
            secureTextEntry
          />

          <Button onPress={handleSubmit as ButtonOnPress} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
});

export default RegisterView;
