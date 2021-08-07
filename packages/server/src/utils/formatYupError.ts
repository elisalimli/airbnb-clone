import { FieldError } from "../graphql/shared/FieldError";

export const formatYupError = (err: any) => {
  const errors: Array<FieldError> = [];
  err.inner.forEach((e: { path: string; message: string }) => {
    errors.push({
      field: e.path,
      message: e.message,
    });
  });
  return errors;
};
