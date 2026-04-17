"use client";
import { useEffect, useRef } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import DashboardHeader from "../../components/dashboardComponents/dashboardHeader";
import SummaryCardSection from "@/components/dashboardComponents/summaryCardSection";
import DailyExpenseList from "@/components/dashboardComponents/dailyExpenseList";
import DailyExpenseForm from "@/components/dashboardComponents/reportExpenseForm";
import { useUserAuth } from "@/context/AuthContext";
import { useFirestoreDocument } from "../../hooks/useFirestoreDocument";
import { db } from "@/utils/firebaseConfig";

const DEFAULT_DAILY_BUDGET = 200;

function getLocalDateString() {
  const now = new Date();
  now.setDate(now.getDate());

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
export default function Page() {
  const { user } = useUserAuth();
  const hasEnsuredTodayRef = useRef(false);
  const today = getLocalDateString();
  const todayPath = user ? ["users", user.uid, "dailyBudgets", today] : null;

  const {
    data: parsedDailyBudgetData,
    error,
  } = useFirestoreDocument(todayPath);

  useEffect(() => {
    if (!user?.uid) {
      hasEnsuredTodayRef.current = false;
      return;
    }

    if (hasEnsuredTodayRef.current) return;

    hasEnsuredTodayRef.current = true;
    const docRef = doc(db, "users", user.uid, "dailyBudgets", today);

    async function ensureDailyBudgetDocument() {
      try {
        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) {
          await setDoc(docRef, {
            date: today,
            totalBudget: DEFAULT_DAILY_BUDGET,
            totalSpent: 0,
            remainingBudget: DEFAULT_DAILY_BUDGET,
            expnenseList: [],
            createdAt: serverTimestamp(),
          });
          return;
        }

        const existingData = snapshot.data();
        const totalBudget = Number(
          existingData.totalBudget ?? DEFAULT_DAILY_BUDGET,
        );
        const totalSpent = Number(existingData.totalSpent ?? 0);
        const missingFields = {};

        if (typeof existingData.date !== "string") {
          missingFields.date = today;
        }

        if (!Number.isFinite(Number(existingData.totalBudget))) {
          missingFields.totalBudget = totalBudget;
        }

        if (!Number.isFinite(Number(existingData.totalSpent))) {
          missingFields.totalSpent = totalSpent;
        }

        if (!Number.isFinite(Number(existingData.remainingBudget))) {
          missingFields.remainingBudget = totalBudget - totalSpent;
        }

        if (!Array.isArray(existingData.expnenseList)) {
          missingFields.expnenseList = [];
        }

        if (!existingData.createdAt) {
          missingFields.createdAt = serverTimestamp();
        }

        if (Object.keys(missingFields).length > 0) {
          await setDoc(docRef, missingFields, { merge: true });
        }
      } catch (createError) {
        hasEnsuredTodayRef.current = false;
        console.error("Error creating daily budget document:", createError);
      }
    }

    ensureDailyBudgetDocument();
  }, [today, user?.uid]);

  // const paresedDailyBudgetData = dailyBudgetData[0];
  const dailyExpenses =
    parsedDailyBudgetData?.expnenseList?.map((expense, index) => ({
      ...expense,
      id: expense.id ?? expense.Id ?? index,
    })) ?? [];

  if (error) {
    console.error("Failed to load daily budget document:", error);
  }

  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FCF9F8]">
        <h1 className="text-2xl font-bold text-[#64463D]">
          Please log in to access your dashboard.
        </h1>
      </main>
    );
  }

  const remainingAmount = Number(
    parsedDailyBudgetData?.remainingBudget ?? 0,
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalBudget = Number(parsedDailyBudgetData?.totalBudget ?? 0).toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    },
  );

  const totalSpent = Number(parsedDailyBudgetData?.totalSpent ?? 0).toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    },
  );

  return (
    <main className="flex min-h-screen flex-col bg-[#FCF9F8]">
      <div>
        <DashboardHeader />
      </div>

      <div className="mx-8 my-10 flex flex-col gap-1 p-2">
        <h2 className=" flex-1 font-sans font-extrabold text-3xl font-bold text-[#64463D]">
          Daily Summary
        </h2>
        <p className=" flex-1 mt-2 ">
          Tracking your organic financial footprint.
        </p>
      </div>

      <SummaryCardSection
        remainingAmount={remainingAmount}
        totalBudget={totalBudget}
        totalSpent={totalSpent}
      />

      <section className="mx-8 mt-10 mb-8 flex flex-1 flex-col gap-6 p-2 lg:flex-row lg:items-start">
        <div className="w-full lg:w-2/5">
          <DailyExpenseForm />
        </div>

        <div className=" lg:w-3/5">
          <DailyExpenseList
            expenses={dailyExpenses}
            date={parsedDailyBudgetData?.date}
          />
        </div>
      </section>
    </main>
  );
}
