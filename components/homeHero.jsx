import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="border-1 border-black flex flex-1 items-start justify-center bg-[#fbf9f8] px-6 pt-16 text-center sm:pt-20">
      <div className="border-1 border-black flex w-full max-w-[620px] flex-col items-center justify gap-10">
        <h2 className="text-[54px] font-black leading-[0.95] text-[#66483f] sm:text-[72px] border-1 border-black">
          Your wealth,
          <span className="block text-[#996219]">curated.</span>
        </h2>
      
        <p className="mt-8 max-w-[540px text-lg leading-7 text-[#5f514c] border-1 border-black">
          Migo&apos;s Budgeting transforms raw financial data into a calm,<br/>
          authoritative narrative. Experience intentional design for<br/>
          your financial future.
        </p>

        <Link
          href="/signUp"
          className="items-center justify-center border-1 border-black font-manrope flex h-11 w-40 mt-8 rounded-lg bg-[#7a5a4f] text-[15px] font-bold text-white shadow-[0_16px_24px_rgba(122,90,79,0.25)] transition-colors hover:bg-[#6f5148] active:scale-[0.98]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
