import DashboardHeader from "../../components/dashboardComponents/dashboardHeader";
import SummaryCardSection from "@/components/dashboardComponents/summaryCardSection";
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
    </main>
  );
}