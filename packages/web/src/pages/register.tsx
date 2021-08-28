import { withUrqlClient } from "next-urql";
import React from "react";
import RegisterConnector from "../modules/register/RegisterConnector";
import UnprotectedRoute from "../ui/utils/UnprotectedRoute";
import { createUrqlClient } from "../utils/createUrqlClient";

const Register: React.FC = () => {
  return (
    <UnprotectedRoute>
      <RegisterConnector />
    </UnprotectedRoute>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
