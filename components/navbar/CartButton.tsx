import React from "react";

import { Button } from "../ui/button"; // adjust the path if needed
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartButton = () => {
  const numItemsInCart = 9;

  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/cart'>
        <MdOutlineShoppingCart className='w-6 h-6' />
        {/* Optional: Badge */}
        {numItemsInCart > 0 && (
          // <span className='absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full'>
          <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
            {numItemsInCart}
          </span>
        )}
      </Link>
    </Button>
  );
};

export default CartButton;
