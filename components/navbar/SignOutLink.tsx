"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logout successfully..." });
  };

  return (
    // <SignOutButton>
    //   <Link href='/' className='w-full text-left' onClick={handleLogout}>
    //     Signout
    //   </Link>
    // </SignOutButton>

    <SignOutButton>
      <Link href='/' className='w-full text-left' onClick={handleLogout}>
        <div className='w-full flex items-center gap-2 text-left cursor-pointer'>
          <FaSignOutAlt className='w-5 h-5' />
          Signout
        </div>
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
