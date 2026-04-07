import Image from "next/image";

export default function SignupFormBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/signupBg.svg"
        alt="Signup Background"
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
