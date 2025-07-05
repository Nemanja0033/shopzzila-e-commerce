import Button from "@mui/material/Button";
import { Trash } from "lucide-react";
import { useRef, useState } from "react";
import BackButton from "../components/ui/BackButton";
import { Link } from "react-router-dom";
import { useAnim } from "../hooks/useAnim";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  useAnim(sidebarRef);

  const removeProduct = (index: number | null | undefined) => {
    const updatedCart = cartProducts.filter((_: any, i: number | null | undefined) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    window.dispatchEvent(new Event('storage'));
    
    setCartProducts(updatedCart);
  };

  const totalSum = cartProducts.reduce((acc: number, product: { price: string; }) => acc + parseFloat(product.price), 0);

  return (
    <div className="flex-row">
      <BackButton />
      <h1 className="text-center font-semibold mt-12">C A R T</h1>
      <div className="md:flex flex-row w-full mt-5 md:justify-center">
        {cartProducts.length > 0 ? (
          <div className="overflow-x-auto max-h-96 w-full flex flex-wrap justify-center">
            {cartProducts.map((product: { title: string; image: string; price: string; }, index: number | null | undefined) => (
              <div className="shadow-md rounded-md m-2 md:w-1/5 w-1/2" key={index}>
                <Button onClick={() => removeProduct(index)} color="error"><Trash /></Button>
                <h2 className="font-semibold text-center mt-3">{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p className="font-bold ml-4 text-center text-xl">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-semibold text-4xl mt-20 text-center">No Products Yet!</p>
        )}
      </div>
    
      <div className="flex justify-center">
        {cartProducts.length > 0 ? 
          <div ref={sidebarRef} className="w-full flex justify-center items-end shadow-md">
            <div className='mt-3'>
              <h1 className="font-semibold text-center text-4xl md:text-2xl">Order Summary</h1>
              <br />
              <h3 className="text-start font-semibold text-2xl md:text-md mt-5 md:mt-0">Total ({cartProducts.length}) Items: ${totalSum.toFixed(2)}</h3>
              <br />
              <div className="mt-5 md:mt-0 ml-5 md:ml-0 mb-3 flex justify-center">
               <Link  to={`/purchase/all`}>
                <Button variant="contained" color="error" size="large">Checkout ${totalSum.toFixed(2)}</Button>
               </Link>
              </div>
            </div>
          </div> : ''}
      </div>
    </div>
  );
};

export default CartPage;