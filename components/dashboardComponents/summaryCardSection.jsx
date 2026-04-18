import SummaryCard from "./summaryCard";

export default function SummaryCardSection({
  remainingAmount,
  totalBudget,
  totalSpent,
}) {
  return (
    <div className="flex flex-row gap-8 mx-10">
      <div className="flex-1">
        <SummaryCard
          title={"Daily Budget"}
          amount={totalBudget}
          reportValue={""}
          editable
        />
        
      </div>
      <div className="flex-1">
        <SummaryCard
          title={"Spent Today"}
          amount={totalSpent}
          reportValue={""}
        />
      </div>
      <div className="flex-1">
        <SummaryCard
          title={"Remaining Budget"}
          amount={remainingAmount}
          reportValue={""}
        />
      </div>
    </div>
  );
}
