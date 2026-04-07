export default function DailyExpenseItem({
  icon,
  title,
  category,
  time,
  amount,
}) {
  return (
    <li className="">
      <div className="flex flex-row gap-4 border">
        <h2 className="flex-1 border-2">{icon}</h2>
        <div className="border">
        <h3 className="flex-1 border">{title}</h3>
        <p className="flex-1 border">{category}</p>
        <p className="flex-1 border">{time}</p>
        </div>
        <span className="flex-1 border">${amount}</span>
      </div>
    </li>
  );
}
