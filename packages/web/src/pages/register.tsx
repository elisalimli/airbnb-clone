import React from "react";
import RegisterConnector from "../modules/register/RegisterConnector";
import { withApollo } from "../utils/withApollo";

const Register: React.FC = () => {
  return <RegisterConnector />;
};

export default withApollo({ ssr: true })(Register);
