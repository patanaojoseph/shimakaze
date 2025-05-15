import React from "react";
import { IoHeart } from "react-icons/io5";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <IoHeart className='text-red-500' />
    </Button>
  );
};

export default FavoriteToggleButton;
