import DailyExpenseItem from "./dailyExpenseItem";

export default function DailyExpenseList({ expenses, date }) {
  return (
    <div>
      <div className="flex flex-row mb-6">
      <h2 className="flex-1 font-sans font-extrabold text-2xl text-[#64463D]">Daily Expenses</h2>
      <span className="font-sans font-bold text-sm ">{date}</span>
      </div>
      <ul>
        {expenses?.map((expense) => (
          <DailyExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    </div>
  );
}