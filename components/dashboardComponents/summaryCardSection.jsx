import SummaryCard from "./summaryCard";
const data = [
  {
    id: 1,
    title: "Daily Budget",
    amount: "$120.00",
    reportValue: "+10% from last month",
  },
  {
    id: 2,
    title: "Spent Today",
    amount: "$45.50",
    reportValue: "-5% from last month",
  },
  {
    id: 3,
    title: "Remaining Budget",
    amount: "$74.50",
    reportValue: "+15% from last month",
  },
];

export default function SummaryCardSection() {
  return(
    <div className="flex flex-row gap-4 mx-8">
      <div className="flex-1">
      <SummaryCard title={data[0].title} amount={data[0].amount} reportValue={data[0].reportValue} />
      </div>
      <div className="flex-1">
      <SummaryCard title={data[1].title} amount={data[1].amount} reportValue={data[1].reportValue} />
      </div>
      <div className="flex-1">
      <SummaryCard title={data[2].title} amount={data[2].amount} reportValue={data[2].reportValue} />
      </div>
    </div>
  );
}