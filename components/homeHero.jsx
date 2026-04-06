import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="flex flex-1 items-start justify-center bg-[#fbf9f8] px-6 pt-16 text-center sm:pt-20">
      <div className="flex w-full max-w-[620px] flex-col items-center">
        <h2 className="text-[54px] font-black leading-[0.95] text-[#66483f] sm:text-[72px]">
          Your wealth,
          <span className="block text-[#996219]">curated.</span>
        </h2>

        <p className="mt-8 max-w-[540px] text-[18px] leading-7 text-[#5f514c]">
          Migo&apos;s Budgeting transforms raw financial data into a calm,
          authoritative narrative. Experience intentional design for your
          financial future.
        </p>

        <Link
          href="/signUp"
          className="w-50 h-10 mt-8 rounded-lg bg-[#7a5a4f] px-8 py-4 text-[15px] font-bold text-white shadow-[0_16px_24px_rgba(122,90,79,0.25)] transition-colors hover:bg-[#6f5148] active:scale-[0.98]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
