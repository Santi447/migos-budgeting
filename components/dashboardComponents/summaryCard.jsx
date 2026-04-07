export default function SummaryCard({ title, amount, reportValue }) {
  return (
    <div className="flex min-h-34.5 flex-col justify-between rounded-xl bg-[#f4f2f1] p-5 hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7a6d68]">
          {title}
        </p>
        <p className="text-4xl leading-none font-extrabold text-[#5c4238]">
          {amount}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-[#7a6d68]">{reportValue}</p>
      </div>
    </div>
  );
}
