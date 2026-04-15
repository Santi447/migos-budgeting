export default function DailyExpenseItem({
  icon,
  title,
  category,
  time,
  amount,
}) {
  const formattedAmount = Number(amount).toFixed(2);
  const formattedTime =
    time && typeof time.toDate === "function"
      ? time.toDate().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })
      : time instanceof Date
        ? time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })
        : String(time ?? "");

  return (
    <li className="p-3 border bg-white border-gray-300 mb-2 rounded-lg gap">
      <div className="flex items-center gap-4 p-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6F3F2]">
          {icon}
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-1">
          <h3 className="px-1 text-lg font-bold">{title}</h3>
          <p className="px-1 text-[#51443A] font-semibold">
            {category} • {formattedTime}
          </p>
        </div>

        <span className="shrink-0 px-2 py-1 text-right text-[#64463D] font-extrabold text-xl">
          ${formattedAmount}
        </span>
      </div>
    </li>
  );
}
