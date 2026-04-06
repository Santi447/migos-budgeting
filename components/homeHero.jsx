import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="font-sans flex flex-1 items-center justify-center bg-[#fbf9f8] px-6 text-center">
      <div className="flex w-full max-w-[620px] flex-col items-center gap-10">
        <h2 className="font-extrabold text-8xl leading-[0.95] text-[#64463D] ">
          Your wealth,
          <span className="block text-[#835419]">curated.</span>
        </h2>
      
        <p className="text-2xl text-[#51443A]">
          Migo&apos;s Budgeting transforms raw financial data into a calm,
          authoritative narrative. Experience intentional design for
          your financial future.
        </p>

        <Link
          href="/signUp"
          className="items-center justify-center flex h-18 w-50 rounded-2xl bg-[#7E5D54] font-bold text-white hover:bg-[#6f5148] active:scale-[0.98]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
