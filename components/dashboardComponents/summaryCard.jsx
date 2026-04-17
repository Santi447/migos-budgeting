import { MdEdit } from "react-icons/md";
import { useState } from "react";
import Modal from "react-modal";
import ModifyDailyBudgetForm from "./modifyDailyBudgetForm";
export default function SummaryCard({ title, amount, reportValue, editable }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="relative flex min-h-40 flex-col justify-between rounded-xl bg-[#f4f2f1] p-5 transition-shadow hover:shadow-lg">
        <div className={`flex flex-col gap-2 ${editable ? "pr-10" : ""}`}>
          {editable && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label={`Edit ${title}`}
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

      {editable && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={true}
          appElement={document.body}
          className="mx-4 w-full max-w-xl rounded-xl bg-[#FCF9F8] p-4 outline-none sm:mx-auto"
          overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/35"
        >
          <ModifyDailyBudgetForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
