"use client";
import { useEffect, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import DashboardHeader from "../../components/dashboardComponents/dashboardHeader";
import SummaryCardSection from "@/components/dashboardComponents/summaryCardSection";
import DailyExpenseList from "@/components/dashboardComponents/dailyExpenseList";
import DailyExpenseForm from "@/components/dashboardComponents/reportExpenseForm";
import { useUserAuth } from "@/context/AuthContext";
import { useFirestoreDocument } from "../../hooks/useFirestoreDocument";
import { db } from "@/utils/firebaseConfig";
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
  const hasCreatedTodayRef = useRef(false);
  const today = getLocalDateString();
  const todayPath = user ? ["users", user.uid, "dailyBudgets", today] : null;

  const {
    data: parsedDailyBudgetData,
    isLoading,
    error,
  } = useFirestoreDocument(todayPath);

  useEffect(() => {
    if (!user || isLoading) return;
    if (parsedDailyBudgetData !== null) return;
    if (hasCreatedTodayRef.current) return;

    hasCreatedTodayRef.current = true;

    const docRef = doc(db, "users", user.uid, "dailyBudgets", today);
    setDoc(docRef, {
      date: today,
      totalBudget: 200,
      totalSpent: 0,
      remainingBudget: 200,
      expnenseList: [],
      createdAt: serverTimestamp(),
    }).catch((createError) => {
      hasCreatedTodayRef.current = false;
      console.error("Error creating daily budget document:", createError);
    });
  }, [user, isLoading, parsedDailyBudgetData, today]);

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
        remainingAmount={parsedDailyBudgetData?.remainingBudget || "0"}
        totalBudget={parsedDailyBudgetData?.totalBudget || "0"}
        totalSpent={parsedDailyBudgetData?.totalSpent || "0"}
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
