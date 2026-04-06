import * as Yup from "yup";
import {Formik} from "formik";


const signupSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is Required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is Required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Please confirm your password"),

})
export default function SignupForm() {
  return (null);
}