import React from "react";
import { FormikSubmit } from "../../types/types";
import RegisterView from "./views/RegisterView";

export interface FormValues {
  username: string;
  email: string;
  password: string;
}

const RegisterConnector: React.FC = () => {
  const handleSubmit: FormikSubmit<FormValues> = (values, {}) => {
    console.log(values);
  };
  return <RegisterView handleSubmit={handleSubmit} />;
};

export default RegisterConnector;
