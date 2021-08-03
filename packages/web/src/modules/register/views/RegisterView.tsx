import { Form, Formik } from "formik";
import Head from "next/head";
import React from "react";
import Button from "../../../ui/Button";
import InputField from "../../../ui/Form/Input/InputField";
import { RegisterFormValues, FormikSubmit } from "@abb/controller";
import { registerSchema } from "@abb/common";
import { useRouter } from "next/router";

interface Props {
  handleSubmit: FormikSubmit<RegisterFormValues>;
}

const RegisterView: React.FC<Props> = ({ handleSubmit }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Sign up | Daily</title>
      </Head>

      <div style={{ maxWidth: 300 }} className="mx-auto">
        <Formik<RegisterFormValues>
          initialValues={{ username: "", email: "", password: "" }}
          // i am saying any,because i don't need this type definitions
          onSubmit={async (...props) => {
            const res = await handleSubmit(...props);
            console.log(res);
            if (res) router.push("/");
          }}
          validationSchema={registerSchema}
        >
          {({ isSubmitting, errors }) => (
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

              {/* @todo change this to error component */}
              <div className="text-primary mt-1 ml-0.5 text-sm">
                {errors["general"]}
              </div>
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
