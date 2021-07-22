import React from "react";
import RegisterConnector from "../modules/register/RegisterConnector";
import UnprotectedRoute from "../ui/utils/UnprotectedRoute";
import { withApollo } from "../utils/withApollo";
const Register: React.FC = () => {
  return (
    <UnprotectedRoute>
      <RegisterConnector />
    </UnprotectedRoute>
  );
};

export default withApollo({ ssr: true })(Register);
