"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logging out..." });
  };

  return (
    <SignOutButton>
      <Link href='/' className='w-full text-left' onClick={handleLogout}>
        Signout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
