import SignupForm from "@/components/signupFormComponents/signupForm"
import HomeFooter from "@/components/homeFooter"
import SignupFormBackground from "@/components/signupFormComponents/signupFormBackground"
export default function Page() {
  return(
    <main className="flex min-h-screen flex-col bg-[#fbf9f8]">
    <div className="flex flex-1 overflow-hidden">
      <div className="relative flex-1 overflow-hidden">
        <SignupFormBackground />
      </div>
      <div className="flex w-full max-w-[460px] items-center justify-center bg-[#fbf9f8] px-8 py-12">
        <SignupForm />
      </div>
    </div>
    <HomeFooter />
    
    </main>
  )
}
