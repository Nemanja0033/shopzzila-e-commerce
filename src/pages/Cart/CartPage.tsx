import Button from "@mui/material/Button";
import { Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BackButton from "../../components/BackButton";

type Products = {
  title: string,
  image: string,
  price: string 
};

export function addToCart({ title, image, price }: Products) {
  const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
  existingCart.push({ title, image, price });
  localStorage.setItem('cart', JSON.stringify(existingCart));
  window.dispatchEvent(new Event('storage'));
}

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.from(sidebarRef.current, { y: 400, opacity: 0 });
      gsap.to(sidebarRef.current, { y: 0, opacity: 1 });
    }
  }, []);

  const removeProduct = (index: number | null | undefined) => {
    const updatedCart = cartProducts.filter((_: any, i: number | null | undefined) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    window.dispatchEvent(new Event('storage'));
    
    setCartProducts(updatedCart);
  };

  const totalSum = cartProducts.reduce((acc: number, product: { price: string; }) => acc + parseFloat(product.price), 0);

  return (
    <div>
      <BackButton />
      <h1 className="text-gray-700 text-center font-semibold">C A R T</h1>
      <div className="md:flex flex-row w-full mt-5 md:justify-center">
        {cartProducts.length > 0 ? (
          <div className="overflow-x-auto max-h-96 w-full flex flex-wrap justify-center">
            {cartProducts.map((product: { title: string; image: string; price: string; }, index: number | null | undefined) => (
              <div className="border-2 m-2 md:w-1/5 w-1/2" key={index}>
                <Button onClick={() => removeProduct(index)} color="error"><Trash /></Button>
                <h2 className="font-semibold text-gray-700 text-center mt-3">{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p className="text-gray-700 font-bold ml-4 text-center text-xl">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 font-semibold text-4xl mt-20 text-center">No Products Yet!</p>
        )}
      </div>
    
      <div className="mt-[100px] md:mt-0 shadow-md">
        {cartProducts.length > 0 ? 
          <div ref={sidebarRef} className="w-full flex justify-center bg-gray-50">
            <div className='mt-3'>
              <h1 className="text-gray-700 font-semibold text-center text-4xl md:text-2xl">Order Summary</h1>
              <br />
              <h3 className="text-start text-gray-700 font-semibold text-2xl md:text-xl mt-5 md:mt-0">Total ({cartProducts.length}) Items: ${totalSum.toFixed(2)}</h3>
              <br />
              <div className="mt-5 md:mt-0 ml-5 md:ml-0">
                <Button variant="contained" color="error" size="large">Checkout ${totalSum.toFixed(2)}</Button>
              </div>
            </div>
          </div> : ''}
      </div>
    </div>
  );
};

export default CartPage;