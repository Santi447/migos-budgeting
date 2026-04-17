import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useUserAuth } from "../../context/AuthContext";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const modifyBudgetSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Total budget is required")
    .positive("Total budget must be a positive number"),
});

async function handleModifyDailyBudget(values, userId, dailyBudgetId) {
  try {
    const docRef = doc(db, "users", userId, "dailyBudgets", dailyBudgetId);
    const amountNum = Number(values.amount);

    if (Number.isNaN(amountNum)) {
      throw new Error("Invalid total budget value");
    }
   const snapshot = await getDoc(docRef);
  const totalSpent = snapshot.exists() ? Number(snapshot.data().totalSpent ?? 0) : 0;
    await setDoc(
      docRef,
      {
      totalBudget: amountNum,
      remainingBudget: amountNum - totalSpent, // You may want to adjust this based on your data structure
      },
      { merge: true },
    );
  } catch (error) {
    console.error("Error updating total budget:", error);
  }
}
function getLocalDateString() {
  const now = new Date();
  now.setDate(now.getDate());

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
export default function ModifyDailyBudgetForm({ onClose }) {
  const { user } = useUserAuth();
  const dailyBudgetId = getLocalDateString(new Date().toISOString().split("T")[0]);
   // Replace with actual daily budget ID
  return (
    <div className="flex max-w-full flex-col rounded-lg bg-[#F6F3F2] px-8 py-10 font-sans text-[#51443A] ">
      <Formik
        initialValues={{
          amount: "",
        }}
        validationSchema={modifyBudgetSchema}
        onSubmit={async (values, { setSubmitting }) => {
          if (!user?.uid) {
            setSubmitting(false);
            return;
          }

          await handleModifyDailyBudget(values, user.uid, dailyBudgetId);

          setSubmitting(false);

          if (typeof onClose === "function") {
            onClose();
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form form="modify-budget-form" className="flex flex-col gap-3">
            <div className="flex flex-row mb-6">
              <h2 className="flex-1 font-sans font-extrabold text-2xl text-[#64463D]">
                Modify Daily Budget
              </h2>
            </div>

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

            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="h-11 rounded-full border border-[#d7cbc5] px-4 text-[12px] font-bold text-[#64463D] transition-colors hover:bg-[#efe8e5]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-full bg-[#7E5D54] px-4 text-[12px] font-extrabold text-white shadow-[0_6px_14px_rgba(100,70,61,0.22)] transition-colors hover:bg-[#6f5148] focus:outline-none focus:ring-2 focus:ring-[#7E5D54]/35 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Modify Budget Amount
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
