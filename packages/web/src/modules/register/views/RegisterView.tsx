import { Form, Formik } from "formik";
import Head from "next/head";
import React from "react";
import { FormikSubmit } from "../../../types/types";
import Button from "../../../ui/Button";
import InputField from "../../../ui/Form/Input/InputField";
import { FormValues } from "../RegisterConnector";
import { registerSchema } from "@abb/common";

interface Props {
  handleSubmit: FormikSubmit<FormValues>;
}

const RegisterView: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <div>
      <Head>
        <title>Sign up | Daily</title>
      </Head>

      <div style={{ maxWidth: 300 }} className="mx-auto">
        <Formik<FormValues>
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
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
              <Button
                size="big"
                wrapperClassname="mt-4"
                variant="primary"
                centered
                type="submit"
                isLoading={isSubmitting}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default RegisterView;
