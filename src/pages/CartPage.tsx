import Button from "@mui/material/Button";
import { useState } from "react";


export function addToCart(product: string) {
  localStorage.setItem('cartProduct', product); 
}

const CartPage = () => {
  const [cartProduct, setCartProduct] = useState<string | null>(localStorage.getItem('cartProduct'));

  const removeFromCart = () => {
    setCartProduct('')
    localStorage.removeItem('cartProduct')
    }

  return (
    <div>
      <h1>Product: {cartProduct || 'Not found'}</h1>
      <Button onClick={removeFromCart} variant="contained">Remove From Cart</Button>
    </div>
  );
}



export default CartPage