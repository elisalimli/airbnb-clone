import { registerSchema } from "@abb/common";
import { FormikSubmit, RegisterFormValues } from "@abb/controller";
import { Formik } from "formik";
import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import InputField from "../../ui/Form/InputField";
import { theme } from "../../utils/theme";

interface Props {
  onSubmit: FormikSubmit<RegisterFormValues>;
}

type ButtonOnPress = any;

const FormContainer = styled.View`
  padding: ${theme.spacing[4]};
`;

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
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
        <FormContainer>
          <InputField
            iconName="user"
            fieldName="username"
            placeholder="Enter your username"
          />
          <InputField
            iconName="mail"
            fieldName="email"
            placeholder="Enter your email"
          />
          <InputField
            iconName="lock"
            fieldName="password"
            placeholder="Enter your password"
            secureTextEntry
          />
          <Button onPress={handleSubmit as ButtonOnPress} title="Submit" />
        </FormContainer>
      )}
    </Formik>
  );
};

export default RegisterForm;
