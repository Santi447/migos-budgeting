"use client";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "../../context/AuthContext";

const signupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function SignupForm() {
  const { signUpWithEmailAndPassword, googleSignIn, gitHubSignIn } = useUserAuth();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSignUp(email, password) {
    try {
      setLoading(true);
      setError(null);
      await signUpWithEmailAndPassword(email, password);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }
    async function handleGitHubLogin() {
    try {
      setLoading(true);
      setError(null);
      await gitHubSignIn();
      setSuccess(true);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      setLoading(true);
      setError(null);
      await googleSignIn();
      setSuccess(true);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex w-full max-w-107.5 flex-col items-stretch gap-5 rounded-lg bg-[#fbf9f8] px-8 py-10 font-sans text-[#51443A]">
      <h2 className="text-[24px] font-extrabold leading-tight text-[#64463D]">
        Create your Account
      </h2>
      <p className="-mt-2 text-[12px] leading-5">
        Begin your journey towards financial harmony.
      </p>
      <div className="flex w-full flex-col gap-3">
        <button
          type="button"
          form="signupForm"
          onClick={handleGoogleLogin}
          className="h-11 rounded-full border border-[#ece7e4] bg-white px-4 text-[13px] font-semibold text-[#111111] shadow-[0_1px_6px_rgba(100,70,61,0.08)] transition-colors hover:bg-[#f4efec] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/30"
        >
          Continue with Google
        </button>
        <button
          type="button"
          onClick={gitHubSignIn}
          form="signupForm"
          className="h-11 rounded-full border border-[#ece7e4] bg-black px-4 text-[13px] font-semibold text-white shadow-[0_1px_6px_rgba(100,70,61,0.08)] transition-colors hover:bg-[#f4efec] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/30"
        >
          Continue with GitHub
        </button>
      </div>
      <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B7770] before:h-px before:flex-1 before:bg-[#e6ddd9] after:h-px after:flex-1 after:bg-[#e6ddd9]">
        OR WITH EMAIL
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          await handleSignUp(values.email, values.password);
        }}
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
            className="flex flex-col gap-3"
          >
            <label
              htmlFor="email"
              className="text-[12px] font-bold text-[#51443A]"
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
              className="mt-1 h-11 rounded-lg border border-[#e6ddd9] bg-[#E4E2E1] px-4 text-[13px] text-[#111111] placeholder:text-[#9A8B85] focus:border-[#7E5D54] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/25"
            />
            {errors.email && touched.email ? (
              <div className="-mt-1 text-[12px] font-medium text-red-600">
                {errors.email}
              </div>
            ) : null}
            <label
              htmlFor="password"
              className="text-[12px] font-bold text-[#51443A]"
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
              className="mt-1 h-11 rounded-lg border border-[#e6ddd9] bg-[#E4E2E1] px-4 text-[13px] text-[#111111] placeholder:text-[#9A8B85] focus:border-[#7E5D54] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/25"
            />
            {errors.password && touched.password ? (
              <div className="-mt-1 text-[12px] font-medium text-red-600">
                {errors.password}
              </div>
            ) : null}

            <label
              htmlFor="confirmPassword"
              className="text-[12px] font-bold text-[#51443A]"
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
              className={`mt-1 h-11 rounded-lg border bg-[#E4E2E1] border-[#e6ddd9] px-4 text-[13px] text-[#111111] placeholder:text-[#9A8B85] focus:border-[#7E5D54] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/25`}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className="-mt-1 text-[12px] font-medium text-red-600">
                {errors.confirmPassword}
              </div>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 h-11 rounded-full bg-[#7E5D54] px-4 text-[12px] font-extrabold uppercase text-white shadow-[0_6px_14px_rgba(100,70,61,0.22)] transition-colors hover:bg-[#6f5148] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/35 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing Up..." : "REGISTER"}
            </button>
            {error && <div className="text-white"> {error}</div>}
            {success && (
              <div className="text-white"> Signed up successfully</div>
            )}
          </Form>
        )}
      </Formik>
      <p className="flex justify-center gap-1 text-center text-[12px] text-[#51443A]">
        Already have an account?
        <Link
          href="/loginPage"
          className="font-bold text-[#64463D] hover:text-[#7E5D54]"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
