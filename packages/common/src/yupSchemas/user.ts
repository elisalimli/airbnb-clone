import * as yup from "yup";

const registerError = {
  shortEmail: "must be greater than 2 characters",
  longEmail: "must be less than 50 characters",
  longUsername: "must be less than 30 characters",
  shortPassword: "must be at least 3 characters",
  longPassword: "must be less than 255 characters",
  invalidEmail: "Invalid email",
};

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, registerError.shortEmail)
    .max(30, registerError.longUsername)
    .required(),
  email: yup
    .string()
    .max(50, registerError.longEmail)
    .email(registerError.invalidEmail)
    .required(),
  password: yup
    .string()
    .min(3, registerError.shortPassword)
    .max(255, registerError.longPassword)
    .required(),
});
