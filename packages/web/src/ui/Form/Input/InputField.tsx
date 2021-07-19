import { useField } from "formik";
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import Label from "./Label";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string | boolean;
    name: string;
    variant?: string;
    wrapperClassName?: string;
  };

export const textFieldStyle = {
  error: "text-secondary-washed-out mt-1 ml-0.5 text-sm",
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  wrapperClassName,
  children,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <>
      {label ? <Label htmlFor={field.name}>{label}</Label> : null}
      <div className={wrapperClassName}>
        <input
          className="w-full border-default border-gray-200 rounded-8 p-2 focus:border-transparent focus:ring-2 ring-pink focus:ring-primary outline-no-chrome"
          {...field}
          {...props}
          id={field.name}
        />
        {children}
      </div>

      {error && touched ? (
        <div className="text-primary mt-1 ml-0.5 text-sm">{error}</div>
      ) : null}
    </>
  );
};

export default InputField;
