import { RegisterController } from "@abb/controller";
import React from "react";
import RegisterView from "./views/RegisterView";

const RegisterConnector: React.FC = () => {
  return (
    <RegisterController>
      {({ submit }) => <RegisterView handleSubmit={submit} />}
    </RegisterController>
  );
};

export default RegisterConnector;
