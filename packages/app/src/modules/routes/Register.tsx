import { RegisterController } from "@abb/controller";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { useRegisterMutation } from "../../generated/graphql";
import { AuthNavProps } from "../../types/navigations/AuthParamList";
import Typography from "../../ui/Typography";
import { theme } from "../../utils/theme";
import RegisterForm from "../forms/RegisterForm";

const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: ${theme.colors.primary};
  align-items: flex-end;
`;

const Container = styled.View`
  flex: 5;
  background-color: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius[50]}px;
  border-top-right-radius: ${theme.borderRadius[50]}px;
  padding-top: ${theme.spacing[4]}px;
  padding-right: ${theme.spacing[4]}px;
  padding-bottom: ${theme.spacing[4]}px;
  padding-left: ${theme.spacing[4]}px;
`;

const Register: React.FC<AuthNavProps<"Register">> = () => {
  const [, register] = useRegisterMutation();

  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <HeaderContainer>
        <Typography
          extraStyle={{
            padding: theme.spacing[2],
          }}
          color="white"
          fontWeight="bold"
          size="4xl"
        >
          Sign up
        </Typography>
      </HeaderContainer>

      <Container>
        <RegisterController register={register}>
          {(submit) => (<RegisterForm onSubmit={submit} />) as any}
        </RegisterController>
      </Container>
    </View>
  );
};

export default Register;
