import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import * as React from "react";
import {
  Exact,
  MeDocument,
  MeQuery,
  RegisterInput,
  RegisterMutation,
} from "../../generated/graphql";
import { FormikSubmit, RegisterFormValues } from "../../types";
import { toErrorMap } from "../../utils/toErrorMap";

type Register = (
  options?: MutationFunctionOptions<
    RegisterMutation,
    Exact<{
      input: RegisterInput;
    }>
  >
) => Promise<FetchResult<RegisterMutation, Record<any, any>, Record<any, any>>>;

export const RegisterController: React.FC<{
  register: Register;
  children: (submit) => null;
}> = ({ children, register }) => {
  const submit: FormikSubmit<RegisterFormValues> = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    const res = await register({
      variables: { input: values },
      update: (cache, { data }) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: { me: data?.register?.user },
        });
      },
    });
    const { errors, user } = res?.data?.register;

    setSubmitting(false);
    if (errors) setErrors(toErrorMap(errors));
    else if (user) return null;
  };

  return children(submit);
};
