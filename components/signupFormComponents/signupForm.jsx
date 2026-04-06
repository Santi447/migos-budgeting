"use client";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Link from "next/link";

const signupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
export default function SignupForm() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-lg border-2 border-gray-300 bg-white p-8 shadow-lg">
      <h2>Create an Account</h2>
      <p>Begin your journey towords financial harmony.</p>
      <div className="flex flex-col gap-4">
        <button type="button" form="signupForm">
          Continue with Google
        </button>
        <button type="button" form="signupForm">
          Continue with GitHub
        </button>
      </div>
      <p>OR WITH EMAIL</p>
      <Formik
        className="border-2 border-gray-300"
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting, setStatus }) => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            form="signupForm"
            onSubmit={handleSubmit}
            className="flex  gap-4 border-2 border-gray-300 flex-col"
          >
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <Field
              type="email"
              name="email"
              placeholder="hello@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && touched.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : null}
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && touched.password ? (
              <div className="text-red-500">{errors.password}</div>
            ) : null}

            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>

            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className="text-red-500">{errors.confirmPassword}</div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Already have an account?
        <Link href="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
      </p>
    </div>
  );
}
