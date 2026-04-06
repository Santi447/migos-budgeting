import Link from "next/link";

export default function HomeHero() {
  return (
    <section className=" flex flex-1 items-center justify-center bg-[#fbf9f8] px-6 text-center">
      <div className="flex w-full max-w-[620px] flex-col items-center gap-10">
        <h2 className="text-[54px] font-black leading-[0.95] text-[#64463D] sm:text-[72px]">
          Your wealth,
          <span className="block text-[#835419]">curated.</span>
        </h2>
      
        <p className="mt-8 max-w-[540px] text-lg leading-7 text-[#51443A]">
          Migo&apos;s Budgeting transforms raw financial data into a calm,<br/>
          authoritative narrative. Experience intentional design for<br/>
          your financial future.
        </p>

        <Link
          href="/signUp"
          className="items-center justify-center font-manrope flex h-11 w-40 rounded-lg bg-[#7E5D54] text-[15px] font-bold text-white hover:bg-[#6f5148] active:scale-[0.98]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
