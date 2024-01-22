import { SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen">
      <SignInButton afterSignInUrl="/dashboard"></SignInButton>
    </div>
  );
}
