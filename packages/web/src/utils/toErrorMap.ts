import { FieldError } from "../generated/graphql";

type ErrorMap = Record<string, string>;

type Func = (errors: FieldError[]) => ErrorMap;

export const toErrorMap: Func = (errors: FieldError[]) => {
  const errorMap: ErrorMap = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};
