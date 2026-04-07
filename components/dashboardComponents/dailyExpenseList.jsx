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
  return (
    <div>
      <div className="flex flex-row">
      <h2 className="flex-1">Daily Expenses</h2>
      <span>{date}</span>
      </div>
      <ul>
        {expenses.map((expense) => (
          <DailyExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    </div>
  );
}