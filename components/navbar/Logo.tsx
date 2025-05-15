import React from "react";
import { GiAbstract079 } from "react-icons/gi";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <GiAbstract079 className='w-6 h-6' />
      </Link>
    </Button>
  );
};

export default Logo;
