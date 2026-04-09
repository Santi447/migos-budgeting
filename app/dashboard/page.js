"use client";
import DashboardHeader from "../../components/dashboardComponents/dashboardHeader";
import SummaryCardSection from "@/components/dashboardComponents/summaryCardSection";
import DailyExpenseList from "@/components/dashboardComponents/dailyExpenseList";
import DailyExpenseForm from "@/components/dashboardComponents/reportExpenseForm";
import { useUserAuth } from "@/context/AuthContext";

const sampleExpenses = [
  {
    id: 1,
    icon: "🍔",
    title: "Lunch",
    category: "Food",
    time: "12:00 PM",
    amount: 15.0,
  },
  {
    id: 2,
    icon: "☕",
    title: "Coffee",
    category: "Beverage",
    time: "3:00 PM",
    amount: 4.5,
  }
];
export default function Page() {
  const { user } = useUserAuth();
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
      
        <SummaryCardSection />
      

      <section className="mx-8 mt-10 mb-8 flex flex-1 flex-col gap-6 p-2 lg:flex-row lg:items-start">
        <div className="w-full lg:w-2/5">

          <DailyExpenseForm />
        </div>

        <div className=" lg:w-3/5">
          <DailyExpenseList expenses={sampleExpenses} date="MAR 31, 2026" />
        </div>
      </section>
    </main>
  );
}
