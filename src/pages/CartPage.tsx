import Button from "@mui/material/Button";
import { useState } from "react";

type Products = {
  title: string,
  image: string,
  price: string 
}


export function addToCart({title, image, price}: Products) {
  const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
  existingCart.push({ title, image, price });
  localStorage.setItem('cart', JSON.stringify(existingCart));
}

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));

  const removeFromCart = () => {
    localStorage.removeItem('cart');
    setCartProducts([]);
  };

  return (
    <div className="">
      <h1 className="text-gray-700 text-center font-semibold">PRODUCTS</h1>
      <div className="md:flex flex-row w-full mt-10 md:ml-10">
      {cartProducts.length > 0 ? (
        cartProducts.map((product, index) => (
          <div className="border-2 m-2" key={index}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.price}$</p>
            <Button color="error">Remove Product</Button>
          </div>
        ))
      ) : (
        <p>No Products Yet!</p>
      )}
      </div>
      <Button onClick={removeFromCart} variant="contained">Clear Cart</Button>
    </div>
  );
};

export default CartPage;