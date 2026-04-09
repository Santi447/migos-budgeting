"use client";
import Link from "next/link";
import {LogOut} from 'lucide-react';
import { useUserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const { firebaseSignOut } = useUserAuth();
  const router = useRouter();
  async function handleSignOut() {
    try {
      await firebaseSignOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
  return(
    <div className="w-full bg-[#fbf9f8]">
      <nav className="flex h-[54px] w-full items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <h1 className="font-sans font-extrabold text-2xl font-bold text-[#64463D]">
            Migo&apos;s Budgeting
          </h1>

          <span
            className="font-[manrope] border-b-2 border-[#64463D] px-3 pt-2 pb-1 font-semibold text-[#64463D]"
          >
            Dashboard
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            onClick={handleSignOut}
            href="/"
            className="font-[manrope] flex h-10 w-25 items-center justify-center rounded-lg px-3 py-2 text-[14px] font-semibold text-[#111111] transition-colors hover:bg-black/5"
          >
            <LogOut />
          </Link>
        </div>
      </nav>
    </div>
  );
}