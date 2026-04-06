import Link from "next/link";

export default function MainPageHeader() {
  return (
    <div className="w-full border-b border-[#eadfdb] bg-[#fbf9f8]">
      <nav className="flex h-[54px] w-full items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <h1 className="text-[22px] font-bold text-[#5f4238]">
            Migo&apos;s Budgeting
          </h1>

          <Link
            href="/"
            className="font-font-manrope border-b-2 border-[#7f5a4f] px-2 pb-2 text-[13px] font-medium text-[#3a2d27]"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/loginPage"
            className="font-manrope flex h-10 w-25 items-center justify-center rounded-lg px-3 py-2 text-[13px] font-semibold text-[#111111] transition-colors hover:bg-black/5"
          >
            Login
          </Link>

          <Link
            href="/signUp"
            className="font-manrope flex h-10 w-25 items-center justify-center rounded-lg bg-[#7a5a4f] px-5 py-2 text-[13px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#6f5148] active:scale-[0.98]"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
