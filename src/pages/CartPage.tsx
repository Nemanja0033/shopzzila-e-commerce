import Button from "@mui/material/Button";
import { useState } from "react";

type Products = {
  title: string,
  image: string,
  price: string 
}


export function addToCart({title,image,price}: Products) {
  localStorage.setItem('cartProduct', title); 
  localStorage.setItem('image', image); 
  localStorage.setItem('price', price); 
}

const CartPage = () => {
  const [cartProduct, setCartProduct] = useState<string | null>(localStorage.getItem('cartProduct'));
  const [image, setImage] = useState<string | null>(localStorage.getItem('image'));
  const [price, setPrice] = useState<string | null>(localStorage.getItem('price'));

  const removeFromCart = () => {
    setCartProduct('');
    setImage('');
    setPrice('');
    localStorage.removeItem('cartProduct')
    localStorage.removeItem('image');
    localStorage.removeItem('price');
    }

  return (
    <div>
      <h1>Product: {cartProduct || 'Not Products Yet!'}</h1>
      <img src={image} alt="" />
      <p>{price}</p>
      <Button onClick={removeFromCart} variant="contained">Remove From Cart</Button>
    </div>
  );
}



export default CartPage