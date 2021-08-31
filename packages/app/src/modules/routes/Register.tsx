import React from "react";
import { useRegisterMutation } from "../../generated/graphql";
import { AuthNavProps } from "../../types/navigations/AuthParamList";
import RegisterForm from "../forms/RegisterForm";
import { RegisterController } from "@abb/controller";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Flex from "../../ui/Flex";
import { theme } from "../../utils/theme";

const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: ${theme.colors.primary};
  align-items: flex-end;
`;

const Header = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSize["4xl"]};
  font-weight: ${theme.fontWeight.bold};
  padding: ${theme.spacing[3]};
`;

const Container = styled.View`
  flex: 5;
  background-color: ${theme.colors.white};
  border-top-left-radius: 50;
  border-top-right-radius: 50;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`;

const Register: React.FC<AuthNavProps<"Register">> = () => {
  const [, register] = useRegisterMutation();
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <HeaderContainer>
        <Header>Welcome</Header>
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
