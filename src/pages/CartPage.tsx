import Button from "@mui/material/Button";
import { ArrowLeft, Trash } from "lucide-react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { state, dispatch } = useCart();
  console.log(state.items)
  const totalSum = state.items.reduce((acc: number, product: CartItem) => acc + (product.price * product.amount), 0);

  return (
    <div className="w-full gird place-items-center p-3">
      <div className="flex-row">
        <h1 className="text-center text-2xl font-semibold mt-12 mb-12">C A R T</h1>
            {state.items.length > 0 ? (
              <div className="border-2 grid gap-4">
                {state.items.map((item: CartItem, index: number | null | undefined) => (
                  <div className="shadow-md md:w-[600px] rounded-md flex items-center h-32" key={index}>
                    <Button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id})} color="error"><Trash /></Button>
                    <div className="grid gap-2 w-full">
                      <h2 className="font-semibold text-md text-center mt-3">{item.title}</h2>
                      <p className="font-bold ml-4 text-center text-sm">${item.price}</p>
                    </div>
                    <div className="flex justify-center w-full items-center gap-3">
                      <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id})} className="bg-gray-50 rounded-full p-3 hover:bg-gray-100 transition-all w-8">+</button>
                      <span className="text-sm">{item.amount}</span>
                      <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id})} className="bg-gray-50 rounded-full p-3 hover:bg-gray-100 transition-all w-8">-</button>
                    </div>
                    <img className="h-28" src={item.img} alt={item.title} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid place-items-center gap-5">
                <p className="font-semibold text-4xl mt-20 text-center">Your cart is empty . . .</p>
                <Link to={'/products'}>
                  <Button color="error" >Keep Shoping <ArrowLeft /></Button>
                </Link>
              </div>
            )}
      </div>
    
      <div className="w-full fixed bottom-0 bg-base-100 border-t">
        {state.items.length > 0 ? 
          <div className="w-full flex justify-center items-end shadow-md">
            <div className='mt-3'>
              <h1 className="font-semibold text-center text-4xl md:text-2xl">Order Summary</h1>
              <br />
              <h3 className="text-start font-semibold text-2xl md:text-md mt-5 md:mt-0">Total ({state.items.length}) Items</h3>
              <br />
              <div className="mt-5 md:mt-0 ml-5 md:ml-0 mb-3 flex justify-center">
                <Button variant="contained" color="error" size="large">Checkout ${totalSum.toFixed(2)}</Button>
              </div>
            </div>
          </div> : ''}
      </div>
    </div>
  );
};

export default CartPage;