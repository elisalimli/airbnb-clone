import { registerSchema } from "@abb/common";
import { FormikSubmit, RegisterFormValues } from "@abb/controller";
import { Formik } from "formik";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Box from "../../components/Box";
import Button from "../../ui/Form/Button";
import InputField from "../../ui/Form/InputField";
import Typography from "../../ui/Typography";
import { theme } from "../../utils/theme";

interface Props {
  onSubmit: FormikSubmit<RegisterFormValues>;
}

type ButtonOnPress = any;

const FormContainer = styled.View`
  padding: ${theme.spacing[4]}px;
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
          {/* <Button onPress={handleSubmit as ButtonOnPress} title="Submit" /> */}

          <Box center style={{ marginTop: theme.spacing[2] }}>
            <Button style={{ width: "75%" }}>
              <Typography color="white">Create new account</Typography>
            </Button>
          </Box>
        </FormContainer>
      )}
    </Formik>
  );
};

export default RegisterForm;
