import { FormikHelpers } from "formik";

export type FormikSubmit<T> = (
  values: T,
  formikHelpers: FormikHelpers<T>
) => void | Promise<any>;
