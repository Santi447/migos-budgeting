import { Coffee } from "@deemlol/next-icons";
import { ShoppingBag } from "@deemlol/next-icons"
import { FileText } from "@deemlol/next-icons"
import { IoCarSharp } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";

function getCategoryIcon(category) {
  switch (category) {
    case "Food":
      return <Coffee size={20} />;
    case "Transport":
      return <IoCarSharp size={20} />;
    case "Entertainment":
      return <BiCameraMovie size={20} />;
    case "Health":
      return <GiHealthNormal size={20} />;
    case "Shopping":
      return <ShoppingBag size={20} />;
    case "Utilities":
      return <FileText size={20} />;
    case "Other":
      return <GiCardboardBoxClosed size={20} />;
    default:
      return <GiCardboardBoxClosed size={20} />;
  }
}

export default function DailyExpenseItem({ title, category, time, amount }) {
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
          {getCategoryIcon(category)}
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
