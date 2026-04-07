"use client";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
const addExpenseSchema = Yup.object({
  description: Yup.string().required("Description is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  category: Yup.string()
    .oneOf(
      ["Food", "Transport", "Entertainment", "Utilities", "Other"],
      "Invalid category",
    )
    .required("Category is required"),
});
export default function DailyExpenseForm() {
  return (
    <div className="flex w-full max-w-full flex-col rounded-lg bg-[#fbf9f8] px-8 py-10 font-sans text-[#51443A]">
      <Formik
        initialValues={{
          description: "",
          amount: "",
          category: "",
        }}
        validationSchema={addExpenseSchema}
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
            className="flex flex-col gap-3"
          >
            <div className="flex flex-row mb-6">
              <h2 className="flex-1 font-sans font-extrabold text-2xl text-[#64463D]">
                Record Expense
              </h2>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-[12px] font-bold text-[#51443A]"
              >
                Description
              </label>
              <Field
                type="text"
                name="description"
                placeholder="E.g, Morning Coffee"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mt-1 h-11 rounded-lg border border-[#e6ddd9] bg-[#E4E2E1] px-4 text-[13px] text-[#111111] placeholder:text-[#9A8B85] focus:border-[#7E5D54] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/25"
              />
            </div>
            {errors.description && touched.description ? (
              <div className="-mt-1 text-[12px] font-medium text-red-600">
                {errors.description}
              </div>
            ) : null}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="amount"
                  className="text-[12px] font-bold text-[#51443A]"
                >
                  Amount
                </label>
                <Field
                  type="number"
                  name="amount"
                  placeholder="0.00"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 h-11 rounded-lg border border-[#e6ddd9] bg-[#E4E2E1] px-4 text-[13px] text-[#111111] placeholder:text-[#9A8B85] focus:border-[#7E5D54] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/25"
                />
                {errors.amount && touched.amount ? (
                  <div className="mt-1 text-[12px] font-medium text-red-600">
                    {errors.amount}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="text-[12px] font-bold text-[#51443A]"
                >
                  Category
                </label>
                <Field
                  as="select"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 h-11 rounded-lg border border-[#e6ddd9] bg-[#E4E2E1] px-4 text-[13px] text-[#111111] placeholder:text-[#9A8B85] focus:border-[#7E5D54] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/25"
                >
                  <option value="">Select a category</option>
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Other">Other</option>
                </Field>
                {errors.category && touched.category ? (
                  <div className="mt-1 text-[12px] font-medium text-red-600">
                    {errors.category}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 h-11 rounded-full bg-[#7E5D54] px-4 text-[12px] font-extrabold uppercase text-white shadow-[0_6px_14px_rgba(100,70,61,0.22)] transition-colors hover:bg-[#6f5148] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/35 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Add Expense
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
