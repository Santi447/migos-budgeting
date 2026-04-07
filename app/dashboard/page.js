import DashboardHeader from "../../components/dashboardComponents/dashboardHeader";
import SummaryCardSection from "@/components/dashboardComponents/summaryCardSection";
import DailyExpenseList from "@/components/dashboardComponents/dailyExpenseList";
import DailyExpenseForm from "@/components/dashboardComponents/reportExpenseForm";

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

      <div className="mx-8 p-2">
        <SummaryCardSection />
      </div>

      <section className="mx-8 mt-10 mb-8 flex flex-1 flex-col gap-6 p-2 lg:flex-row lg:items-start">
        <div className="lg:max-w-md">

          <DailyExpenseForm />
        </div>

        <div className="min-w-0 flex-1 p-4">
          <DailyExpenseList expenses={sampleExpenses} date="MAR 31, 2026" />
        </div>
      </section>
    </main>
  );
}
