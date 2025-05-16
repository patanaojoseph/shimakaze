import React from "react";
import { Button } from "../ui/button";
function AddToCart({ productId }: { productId: string }) {
  return (
    <div>
      <Button className='capitalize mt-8' size='lg'>
        add to cart
      </Button>
    </div>
  );
}

export default AddToCart;
