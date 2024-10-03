import { object, string } from "yup";

const Schema = object({
  fullname: string()
    .min(6, "First name must be 6 characters")
    .max(10, "First name cannot be more than 10 characters")
    .required("Required"),

  email: string().email("Invalid format").required("Required"),

  password: string()
    .min(6, "Password must be 6 characters")
    .matches(
      /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Password need to have at least 1 number and special characters"
    )
    .required("Required"),
});

export default Schema;
