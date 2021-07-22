import { RegisterController } from "@abb/controller";
import React from "react";
import { useRegisterMutation } from "../../generated/graphql";
import RegisterView from "./views/RegisterView";

const RegisterConnector: React.FC = () => {
  const [register] = useRegisterMutation();
  return (
    <RegisterController register={register}>
      {(submit) => <RegisterView handleSubmit={submit} />}
    </RegisterController>
  );
};

export default RegisterConnector;
