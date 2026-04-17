import { MdEdit } from "react-icons/md";
export default function SummaryCard({ title, amount, reportValue, editable }) {
  return (
    <div className="relative flex min-h-40 flex-col justify-between rounded-xl bg-[#f4f2f1] p-5 transition-shadow hover:shadow-lg">
      <div className={`flex flex-col gap-2`}>
        {editable && (
          <button
            type="button"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md border border-[#d7d1ce] bg-white/60 text-[#7a6d68] transition-colors hover:text-[#5c4238] sm:right-4 sm:top-4"
          >
            <MdEdit className="h-4 w-4" />
          </button>
        )}
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
