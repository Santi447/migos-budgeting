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
      <h2>Daily Expenses</h2>
      <span>{date}</span>
      <ul>
        {expenses.map((expense) => (
          <DailyExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    </div>
  );
}