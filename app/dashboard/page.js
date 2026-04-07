import DashboardHeader from "../../components/dashboardComponents/dashboardHeader";
import SummaryCardSection from "@/components/dashboardComponents/summaryCardSection";
import DailyExpenseList from "@/components/dashboardComponents/dailyExpenseList";
const sampleExpenses = [
  {
    id: 1,
    icon: "🍔",
    title: "Lunch",
    category: "Food",
    time: "12:00 PM",
    amount: 15.00
  }
];
export default function Page(){
  return(
    <main>
      <DashboardHeader />
      <div className="mx-8 flex flex-col my-10 gap-1">
      <h2 className=" flex-1 font-sans font-extrabold text-3xl font-bold text-[#64463D]">
        Daily Summary
      </h2>
      <p className=" flex-1 mt-2 ">
        Tracking your organic financial footprint.
      </p>
      </div>
      <SummaryCardSection />
      <DailyExpenseList expenses={sampleExpenses} date="Today" />
    </main>
  );
}