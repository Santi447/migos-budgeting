import Link from "next/link";

export default function MainPageHeader() {
  return (
    <div className="w-full bg-[#fbf9f8]">
      <nav className="flex h-[54px] w-full items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <h1 className="font-sans font-extrabold text-3xl font-bold text-[#64463D]">
            Migo&apos;s Budgeting
          </h1>

          <Link
            href="/"
            className="font-[manrope] border-b-2 border-[#64463D] px-3 pt-2 pb-1 font-semibold text-[#64463D]"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/loginPage"
            className="font-[manrope] flex h-10 w-25 items-center justify-center rounded-lg px-3 py-2 text-[14px] font-semibold text-[#111111] transition-colors hover:bg-black/5"
          >
            Login
          </Link>

          <Link
            href="/signUp"
            className="font-[manrope] flex h-10 w-25 items-center justify-center rounded-lg bg-[#7E5D54] px-5 py-2 text-[14px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#6f5148] active:scale-[0.98]"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
