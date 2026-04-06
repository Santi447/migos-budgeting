import SignupForm from "@/components/signupFormComponents/signupForm"
import HomeFooter from "@/components/homeFooter"
export default function Page() {
  return(
    <main className="flex min-h-screen flex-col bg-[#fbf9f8] border-2 border-red-500">
    <div className="flex border-2 border-blue-500 flex-col items-center gap-6 px-8 py-12">
      <SignupForm />
    </div>
    <HomeFooter />
    </main>
  )
}
