import DailyExpenseItem from "./dailyExpenseItem";

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

export default function DailyExpenseList({ expenses, date }) {
  // const safeExpenses = Array.isArray(expenses) ? expenses : [];

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