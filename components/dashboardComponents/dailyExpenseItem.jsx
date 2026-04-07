export default function DailyExpenseItem({
  icon,
  title,
  category,
  time,
  amount,
}) {
  return (
    <li>
      <div className="">
        <h2>{icon}</h2>
        <h3 className="">{title}</h3>
        <p className="">{category}</p>
        <p className="">{time}</p>
        <span className="">${amount}</span>
      </div>
    </li>
  );
}
