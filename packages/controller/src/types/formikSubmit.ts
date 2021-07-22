import { FormikHelpers } from "formik";
import { ReactElement } from "react";

export type FormikSubmit<T> = (
  values: T,
  formikHelpers: FormikHelpers<T>
) => void | Promise<any> | ReactElement<any, any>;
