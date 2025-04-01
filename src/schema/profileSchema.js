import * as yup from "yup";

const profileSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Please select a valid gender"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[0-9]*$/, "Invalid phone number"),
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  birthday: yup
    .date()
    .required("Date of birth is required")
    .typeError("Invalid date format")
    .transform((_value, originalValue) => {
      const date = new Date(originalValue);
      return isNaN(date.getTime()) ? null : date;
    })
    .max(new Date(), "Date of birth cannot be in the future"),
});

export default profileSchema;
