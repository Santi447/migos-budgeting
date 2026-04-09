"use client";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Link from "next/link";
import { useUserAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const signupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});

export default function SignupForm() {
  const { signinginWithEmailAndPassword, gitHubSignIn, googleSignIn } = useUserAuth();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
    async function handleLogin(email, password) {
    try {
      setLoading(true);
      setError(null);
        await signinginWithEmailAndPassword(email, password);
        setSuccess(true);
        router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    } 
    finally{
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
    <div className="flex w-full max-w-[430px] flex-col items-stretch gap-5 rounded-lg bg-[#fbf9f8] px-8 py-10 font-sans text-[#51443A]">
      <h2 className="text-4xl font-extrabold leading-tight text-[#64463D]">
        Welcome Back
      </h2>
      <p className="-mt-2 leading-5">Log in to manage your daily budget</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={signupSchema}
        onSubmit={async(values) => {
          await handleLogin(values.email, values.password);
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 h-11 rounded-full bg-[#7E5D54] px-4 text-[12px] font-extrabold uppercase text-white shadow-[0_6px_14px_rgba(100,70,61,0.22)] transition-colors hover:bg-[#6f5148] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/35 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Logging In..." : "Login"}
            </button>
             {error && <div className="text-white"> {error}</div>}
            {success && (
              <div className="text-white"> Signed in successfully</div>
            )}
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B7770] before:h-px before:flex-1 before:bg-[#e6ddd9] after:h-px after:flex-1 after:bg-[#e6ddd9]">
              OR CONTINUE WITH
            </p>
          </Form>
        )}
      </Formik>
      <div className="flex flex-row justify-center gap-3">
        <button
          type="button"
          form="signupForm"
          onClick={handleGoogleLogin}
          className="h-10 rounded-xl border w-full border-[#ece7e4] bg-white px-4 text-[13px] font-semibold text-[#111111] shadow-[0_1px_6px_rgba(100,70,61,0.08)] transition-colors hover:bg-[#f4efec] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/30"
        >
          Google
        </button>
        <button
          type="button"
          form="signupForm"
          onClick={handleGitHubLogin}
          className="h-10 rounded-xl border w-full  border-[#ece7e4] bg-white px-4 text-[13px] font-semibold text-black shadow-[0_1px_6px_rgba(100,70,61,0.08)] transition-colors hover:bg-[#f4efec] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/30"
        >
          GitHub
        </button>
      </div>
      <p className="flex justify-center gap-1 text-center text-[12px] text-[#51443A]">
        New to Migo?
        <Link
          href="/signUp"
          className="font-bold text-[#64463D] hover:text-[#7E5D54]"
        >
          Create an Account
        </Link>
      </p>
    </div>
  );
}
