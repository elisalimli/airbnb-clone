import { Formik } from "formik";
import router from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { MeQuery, MeDocument } from "../../../generated/graphql";
import register from "../../../pages/register";
import InputField from "../../../ui/Form/Input/InputField";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const RegisterView: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Sign up | Daily</title>
      </Head>

      <div style={{ maxWidth: 300 }} className="mx-auto">
        <Formik<FormValues>
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {}}
        >
          {({ isSubmitting }) => (
            <div>
              {/* <Header
              headerType="h1"
              centered
              color="text-primary-100"
              size="4xl"
              fontWeight="bold"
            >
            Register
            </Header> */}
              <InputField
                name="username"
                placeholder="username"
                label="Username"
              />
              <InputField
                name="email"
                placeholder="email"
                label="Email"
                type="email"
              />
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
              {/* <Button
              fontWeight="normal"
              variant="primary"
              width={175}
              height={40}
              extraClassName="mt-4"
              loading={isSubmitting}
              centered
              type="submit"
            >
              Register
            </Button> */}
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default RegisterView;
