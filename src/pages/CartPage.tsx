import Button from "@mui/material/Button";
import { XIcon } from "lucide-react";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

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
      <h1 className="text-gray-700 text-center font-semibold">C A R T</h1>
      <div className="md:flex flex-row w-full mt-5 md:justify-center">
      {cartProducts.length > 0 ? (
        cartProducts.map((product: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; image: string | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
          <div className="border-2 m-2" key={index}>
            <h2 className="font-semibold text-gray-700 text-center mt-3">{product.title}</h2>
            <img src={product.image} />
            <p className="text-gray-700 font-bold ml-4">{product.price}$</p>
            <Button color="error">Purhcase</Button>
          </div>
        ))
      ) : (
        <p className="text-gray-700 font-semibold text-4xl mt-20 ">No Products Yet!</p>
      )}
      </div>
      <div className="md:ml-[655px] ml-[150px] mt-5">
       {cartProducts.length > 0 ?  <Button onClick={removeFromCart} variant="contained" color="error"><XIcon /></Button> 
       : ''}
      </div>
    </div>
  );
};

export default CartPage;