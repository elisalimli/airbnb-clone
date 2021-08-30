import * as React from "react";
import { OperationContext, OperationResult } from "urql";
import {
  Exact,
  RegisterInput,
  RegisterMutation,
} from "../../generated/graphql";
import { FormikSubmit, RegisterFormValues } from "../../types";
import { toErrorMap } from "../../utils";

type Register = (
  variables?: Exact<{
    input: RegisterInput;
  }>,
  context?: Partial<OperationContext>
) => Promise<OperationResult<RegisterMutation, Exact<any>>>;

export const RegisterController: React.FC<{
  register: Register;
  children: (submit: any) => any;
}> = ({ children, register }) => {
  const submit: FormikSubmit<RegisterFormValues> = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    const res = await register({
      input: values,
    });
    const errors = res?.data?.register.errors;

    console.log("errors", errors, res?.data?.register);

    setSubmitting(false);
    if (errors) {
      setErrors(toErrorMap(errors));
      return false;
    }

    // @todo route some page
    return true;
  };

  return children(submit);
};
