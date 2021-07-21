import * as React from "react";
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
} from "../../generated/graphql";
import { useRouter } from "next/router";
import { FormikSubmit, RegisterFormValues } from "../../types";
import { toErrorMap } from "../../utils/toErrorMap";

export const RegisterController: React.FC = ({ children }) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  const submit: FormikSubmit<RegisterFormValues> = async (
    values,
    { setErrors }
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
    const { errors, user } = res?.data?.register as any;
    if (errors) setErrors(toErrorMap(errors));
    else if (user) router.push("/");
  };

  return (children as any)(submit);
};
