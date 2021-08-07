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
    }>,
    any,
    any
  >
) => Promise<FetchResult<RegisterMutation, Record<any, any>, Record<any, any>>>;

export const RegisterController: React.FC<{
  register: Register;
  children: (submit: any) => any;
}> = ({ children, register }) => {
  const submit: FormikSubmit<RegisterFormValues> = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    const res = await register({
      variables: { input: values },
      update: (cache, { data }) => {
        // @ts-ignore
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: { me: data?.register?.user },
        });
      },
    });
    const errors = res?.data?.register.errors;

    console.log(errors);

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
